import Stripe from 'stripe';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

// Stripe requires the raw, unparsed request body to verify the webhook signature.
export const config = {
  api: {
    bodyParser: false,
  },
};

function getAdminApp() {
  if (getApps().length) return getApps()[0];
  return initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: (process.env.FIREBASE_ADMIN_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

async function readRawBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  let event;
  try {
    const rawBody = await readRawBody(req);
    event = stripe.webhooks.constructEvent(
      rawBody,
      req.headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  const isPaidEvent =
    event.type === 'checkout.session.completed' ||
    event.type === 'checkout.session.async_payment_succeeded';

  if (isPaidEvent) {
    const session = event.data.object;
    const ref = session.client_reference_id;

    if (ref) {
      const db = getDatabase(getAdminApp());
      await db.ref(`payments/${ref}`).set({
        paid: true,
        amountTotal: session.amount_total,
        currency: session.currency,
        confirmedAt: Date.now(),
      });
    }
  }

  res.status(200).json({ received: true });
}
