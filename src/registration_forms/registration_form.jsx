import { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ref as dbRef, onValue } from 'firebase/database';
import { database } from '../firebase';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function RegistrationForm({ formId, schoolName, day }) {
  const [state, handleSubmit] = useForm(formId);
  const [sameAsParent, setSameAsParent] = useState(false);
  const [photoRelease, setPhotoRelease] = useState(false);
  const [liabilityWaiver, setLiabilityWaiver] = useState(false);
  const [privacyAck, setPrivacyAck] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [checkoutSubmitted, setCheckoutSubmitted] = useState(false);
  const [checkoutError, setCheckoutError] = useState(false);
  const checkoutContainerRef = useRef(null);
  const embeddedCheckoutRef = useRef(null);
  const paymentRef = useRef(null);
  if (!paymentRef.current) {
    paymentRef.current = crypto.randomUUID();
  }
  const consentComplete = photoRelease && liabilityWaiver && privacyAck;

  // Listen for the webhook (api/stripe-webhook.js) confirming payment actually succeeded.
  useEffect(() => {
    const statusRef = dbRef(database, `payments/${paymentRef.current}`);
    const unsubscribe = onValue(statusRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.paid) {
        setPaymentConfirmed(true);
      }
    });

    return () => unsubscribe();
  }, []);

  // Once consent is complete, create a Stripe Checkout Session and mount it inline.
  useEffect(() => {
    if (!consentComplete || paymentConfirmed) return;
    let cancelled = false;

    (async () => {
      try {
        const stripe = await stripePromise;
        const res = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paymentRef: paymentRef.current }),
        });
        const data = await res.json();

        if (cancelled || !data.clientSecret || !checkoutContainerRef.current) {
          if (!cancelled) setCheckoutError(true);
          return;
        }

        const embeddedCheckout = await stripe.initEmbeddedCheckout({
          clientSecret: data.clientSecret,
          onComplete: () => setCheckoutSubmitted(true),
        });

        if (cancelled) {
          embeddedCheckout.destroy();
          return;
        }

        embeddedCheckoutRef.current = embeddedCheckout;
        embeddedCheckout.mount(checkoutContainerRef.current);
      } catch (err) {
        console.error('Failed to load embedded checkout:', err);
        if (!cancelled) setCheckoutError(true);
      }
    })();

    return () => {
      cancelled = true;
      if (embeddedCheckoutRef.current) {
        embeddedCheckoutRef.current.destroy();
        embeddedCheckoutRef.current = null;
      }
    };
  }, [consentComplete, paymentConfirmed]);

  if (state.succeeded) {
    return (
      <p className="tc-form-success">
        Thanks for registering{schoolName ? ` for ${schoolName}` : ''}! We'll be in touch soon.
      </p>
    );
  }

  return (
    <form className="tc-contact-form" onSubmit={handleSubmit}>

      <div className="tc-form-intro">
        {schoolName && (
          <div className="tc-form-school-name">
            {schoolName}
            {day && <span className="tc-form-day"> ({day})</span>}
          </div>
        )}
        <div className="tc-form-price">$99.95/month</div>
        <div className="tc-form-tagline">Monthly program. No contracts.</div>
      </div>

      <fieldset className="tc-form-section">
        <legend className="tc-form-section-title">Child Information</legend>

        <div className="tc-form-row">
          <div className="tc-form-col">
            <label className="tc-form-label" htmlFor="child_first_name">First Name</label>
            <input className="tc-form-input" id="child_first_name" type="text" name="child_first_name" required />
          </div>
          <div className="tc-form-col">
            <label className="tc-form-label" htmlFor="child_last_name">Last Name</label>
            <input className="tc-form-input" id="child_last_name" type="text" name="child_last_name" required />
          </div>
        </div>

        <label className="tc-form-label" htmlFor="child_grade">Grade</label>
        <select className="tc-form-input tc-form-select" id="child_grade" name="child_grade" required defaultValue="">
          <option value="" disabled>Select grade</option>
          <option value="4th">4th</option>
          <option value="5th">5th</option>
        </select>

        <label className="tc-form-label" htmlFor="child_teacher">Teacher Name</label>
        <input className="tc-form-input" id="child_teacher" type="text" name="child_teacher" required />

        <label className="tc-form-label" htmlFor="medications">Medical/Allergies</label>
        <textarea
          className="tc-form-input tc-form-textarea"
          id="medications"
          name="medications"
          rows="2"
          placeholder="Include administration instructions, if any"
        />
      </fieldset>

      <fieldset className="tc-form-section">
        <legend className="tc-form-section-title">Parent/Guardian Information</legend>

        <div className="tc-form-row">
          <div className="tc-form-col">
            <label className="tc-form-label" htmlFor="parent_first_name">First Name</label>
            <input className="tc-form-input" id="parent_first_name" type="text" name="parent_first_name" required />
          </div>
          <div className="tc-form-col">
            <label className="tc-form-label" htmlFor="parent_last_name">Last Name</label>
            <input className="tc-form-input" id="parent_last_name" type="text" name="parent_last_name" required />
          </div>
        </div>

        <label className="tc-form-label" htmlFor="parent_email">Email</label>
        <input className="tc-form-input" id="parent_email" type="email" name="parent_email" required />
        <ValidationError className="tc-form-error" prefix="Email" field="parent_email" errors={state.errors} />

        <label className="tc-form-label" htmlFor="parent_phone">Phone Number</label>
        <input className="tc-form-input" id="parent_phone" type="tel" name="parent_phone" required />

      </fieldset>

      <fieldset className="tc-form-section">
        <legend className="tc-form-section-title">Dismissal Method</legend>

        <label className="tc-form-checkbox-row" htmlFor="dismissal_car_rider">
          <input type="checkbox" id="dismissal_car_rider" name="dismissal_car_rider" value="Yes" />
          Car Rider
        </label>

        <label className="tc-form-checkbox-row" htmlFor="dismissal_walker_biker">
          <input type="checkbox" id="dismissal_walker_biker" name="dismissal_walker_biker" value="Yes" />
          Walker/Biker
        </label>

        <label className="tc-form-checkbox-row" htmlFor="extended_day">
          <input type="checkbox" id="extended_day" name="extended_day" value="Yes" />
          Extended Day Program
        </label>
      </fieldset>

      <fieldset className="tc-form-section">
        <legend className="tc-form-section-title">Emergency Contact</legend>

        <label className="tc-form-checkbox-row" htmlFor="emergency_same_as_parent">
          <input
            type="checkbox"
            id="emergency_same_as_parent"
            checked={sameAsParent}
            onChange={(e) => setSameAsParent(e.target.checked)}
          />
          Same as Parent/Guardian above
        </label>

        <div className={`tc-form-subgroup${sameAsParent ? ' tc-form-section-disabled' : ''}`}>
          <div className="tc-form-row">
            <div className="tc-form-col">
              <label className="tc-form-label" htmlFor="emergency_first_name">First Name</label>
              <input className="tc-form-input" id="emergency_first_name" type="text" name="emergency_first_name" disabled={sameAsParent} />
            </div>
            <div className="tc-form-col">
              <label className="tc-form-label" htmlFor="emergency_last_name">Last Name</label>
              <input className="tc-form-input" id="emergency_last_name" type="text" name="emergency_last_name" disabled={sameAsParent} />
            </div>
          </div>

          <label className="tc-form-label" htmlFor="emergency_relationship">Relationship to Child</label>
          <input className="tc-form-input" id="emergency_relationship" type="text" name="emergency_relationship" disabled={sameAsParent} />

          <label className="tc-form-label" htmlFor="emergency_phone">Phone Number</label>
          <input className="tc-form-input" id="emergency_phone" type="tel" name="emergency_phone" disabled={sameAsParent} />
        </div>
      </fieldset>

      <fieldset className="tc-form-section">
        <legend className="tc-form-section-title">Consent &amp; Legal</legend>

        <label className="tc-form-checkbox-row" htmlFor="photo_release">
          <input
            type="checkbox"
            id="photo_release"
            name="photo_release"
            value="Yes"
            checked={photoRelease}
            onChange={(e) => setPhotoRelease(e.target.checked)}
            required
          />
          I give permission for photos/videos of my child to be used on Tiny Coders' website and social media
        </label>

        <label className="tc-form-checkbox-row" htmlFor="liability_waiver">
          <input
            type="checkbox"
            id="liability_waiver"
            name="liability_waiver"
            value="Yes"
            checked={liabilityWaiver}
            onChange={(e) => setLiabilityWaiver(e.target.checked)}
            required
          />
          I acknowledge the risks involved in hands-on electronics/tool activities and agree to the liability waiver
        </label>

        <label className="tc-form-checkbox-row" htmlFor="privacy_policy_ack">
          <input
            type="checkbox"
            id="privacy_policy_ack"
            name="privacy_policy_ack"
            value="Yes"
            checked={privacyAck}
            onChange={(e) => setPrivacyAck(e.target.checked)}
            required
          />
          I have read and agree to the <a className="tc-form-link" href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>
        </label>
      </fieldset>

      <fieldset className="tc-form-section">
        <legend className="tc-form-section-title">Payment</legend>

        <div className={`tc-form-subgroup${consentComplete ? '' : ' tc-form-section-disabled'}`}>
          {!consentComplete && (
            <p className="tc-form-note">Please check all three boxes in Consent &amp; Legal above to continue.</p>
          )}
          <p className="tc-form-note">Tuition is $99.95/month, billed monthly with no long-term contract.</p>

          <input type="hidden" name="payment_ref" value={paymentRef.current} />

          {checkoutError && (
            <p className="tc-form-note">
              Something went wrong loading the payment form. Please refresh and try again.
            </p>
          )}

          {!paymentConfirmed && !checkoutError && (
            <>
              <div ref={checkoutContainerRef} className="tc-checkout-embed"></div>
              <p className="tc-form-note">
                {checkoutSubmitted
                  ? 'Confirming your payment with Stripe — this updates automatically, usually within a few seconds.'
                  : 'Complete payment above to unlock the Submit button below.'}
              </p>
            </>
          )}

          {paymentConfirmed && (
            <p className="tc-form-note">Payment confirmed — you're all set to submit below.</p>
          )}
        </div>
      </fieldset>

      <button className="tc-form-submit" type="submit" disabled={state.submitting || !paymentConfirmed}>
        Submit Registration
      </button>
    </form>
  );
}

export default RegistrationForm;
