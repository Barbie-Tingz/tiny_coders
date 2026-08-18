import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { paymentRef } = req.body || {};

    if (!paymentRef) {
      res.status(400).json({ error: 'Missing paymentRef' });
      return;
    }

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      mode: 'subscription',
      client_reference_id: paymentRef,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: 9995,
            recurring: { interval: 'month' },
            product_data: { name: 'Tiny Coders Monthly Membership' },
          },
          quantity: 1,
        },
      ],
      return_url: 'https://tinycoders.org/enrollment?session_id={CHECKOUT_SESSION_ID}',
    });

    res.status(200).json({ clientSecret: session.client_secret });
  } catch (err) {
    console.error('Failed to create checkout session:', err.message);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
}
