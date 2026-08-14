import { useForm, ValidationError } from '@formspree/react';

function RegistrationForm({ formId, schoolName }) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <p className="tc-form-success">
        Thanks for registering{schoolName ? ` for ${schoolName}` : ''}! We'll be in touch soon.
      </p>
    );
  }

  return (
    <form className="tc-contact-form" onSubmit={handleSubmit}>

      <fieldset className="tc-form-section">
        <legend className="tc-form-section-title">Child Information</legend>

        <label className="tc-form-label" htmlFor="child_full_name">Full Legal Name</label>
        <input className="tc-form-input" id="child_full_name" type="text" name="child_full_name" required />

        <label className="tc-form-label" htmlFor="child_dob">Date of Birth</label>
        <input className="tc-form-input" id="child_dob" type="date" name="child_dob" required />

        <label className="tc-form-label" htmlFor="child_grade">Grade</label>
        <select className="tc-form-input tc-form-select" id="child_grade" name="child_grade" required defaultValue="">
          <option value="" disabled>Select grade</option>
          <option value="4th">4th</option>
          <option value="5th">5th</option>
        </select>
      </fieldset>

      <fieldset className="tc-form-section">
        <legend className="tc-form-section-title">Parent/Guardian Information</legend>

        <label className="tc-form-label" htmlFor="parent_full_name">Full Name</label>
        <input className="tc-form-input" id="parent_full_name" type="text" name="parent_full_name" required />

        <label className="tc-form-label" htmlFor="parent_relationship">Relationship to Child</label>
        <input className="tc-form-input" id="parent_relationship" type="text" name="parent_relationship" required />

        <label className="tc-form-label" htmlFor="parent_email">Email</label>
        <input className="tc-form-input" id="parent_email" type="email" name="parent_email" required />
        <ValidationError className="tc-form-error" prefix="Email" field="parent_email" errors={state.errors} />

        <label className="tc-form-label" htmlFor="parent_phone">Phone Number</label>
        <input className="tc-form-input" id="parent_phone" type="tel" name="parent_phone" required />

        <label className="tc-form-label" htmlFor="parent_address">Home Address</label>
        <input className="tc-form-input" id="parent_address" type="text" name="parent_address" required />
      </fieldset>

      <fieldset className="tc-form-section">
        <legend className="tc-form-section-title">Emergency Contact</legend>
        <p className="tc-form-note">If different from the parent/guardian above.</p>

        <label className="tc-form-label" htmlFor="emergency_name">Name</label>
        <input className="tc-form-input" id="emergency_name" type="text" name="emergency_name" />

        <label className="tc-form-label" htmlFor="emergency_relationship">Relationship to Child</label>
        <input className="tc-form-input" id="emergency_relationship" type="text" name="emergency_relationship" />

        <label className="tc-form-label" htmlFor="emergency_phone">Phone Number</label>
        <input className="tc-form-input" id="emergency_phone" type="tel" name="emergency_phone" />
      </fieldset>

      <fieldset className="tc-form-section">
        <legend className="tc-form-section-title">Authorized Pickup</legend>

        <label className="tc-form-label" htmlFor="authorized_pickup">Names of Anyone Else Authorized to Pick Up the Child</label>
        <textarea className="tc-form-input tc-form-textarea" id="authorized_pickup" name="authorized_pickup" rows="3" />

        <p className="tc-form-note">
          For your child's safety, we cannot release them to anyone not listed above or on file. If someone
          unauthorized arrives for pickup, we will contact the parent/guardian before releasing the child.
        </p>
      </fieldset>

      <fieldset className="tc-form-section">
        <legend className="tc-form-section-title">Medical/Safety Information</legend>

        <label className="tc-form-label" htmlFor="allergies">Allergies</label>
        <textarea className="tc-form-input tc-form-textarea" id="allergies" name="allergies" rows="2" />

        <label className="tc-form-label" htmlFor="medical_conditions">Medical Conditions the Instructor Should Know About</label>
        <textarea className="tc-form-input tc-form-textarea" id="medical_conditions" name="medical_conditions" rows="2" />

        <label className="tc-form-label" htmlFor="medications">Medications the Child May Need During Class</label>
        <textarea
          className="tc-form-input tc-form-textarea"
          id="medications"
          name="medications"
          rows="2"
          placeholder="Include administration instructions, if any"
        />
      </fieldset>

      <fieldset className="tc-form-section">
        <legend className="tc-form-section-title">Communication Preferences</legend>

        <label className="tc-form-label" htmlFor="contact_method">Preferred Contact Method</label>
        <select className="tc-form-input tc-form-select" id="contact_method" name="contact_method" required defaultValue="">
          <option value="" disabled>Select a method</option>
          <option value="Email">Email</option>
          <option value="Text">Text</option>
          <option value="Call">Call</option>
        </select>

        <label className="tc-form-checkbox-row" htmlFor="newsletter_optin">
          <input type="checkbox" id="newsletter_optin" name="newsletter_optin" value="Yes" />
          Sign me up for the newsletter and program updates
        </label>
      </fieldset>

      <fieldset className="tc-form-section">
        <legend className="tc-form-section-title">Consent &amp; Legal</legend>

        <label className="tc-form-checkbox-row" htmlFor="photo_release">
          <input type="checkbox" id="photo_release" name="photo_release" value="Yes" />
          I give permission for photos/videos of my child to be used on Tiny Coders' website and social media
        </label>

        <label className="tc-form-checkbox-row" htmlFor="liability_waiver">
          <input type="checkbox" id="liability_waiver" name="liability_waiver" value="Yes" required />
          I acknowledge the risks involved in hands-on electronics/tool activities and agree to the liability waiver
        </label>

        <label className="tc-form-checkbox-row" htmlFor="privacy_policy_ack">
          <input type="checkbox" id="privacy_policy_ack" name="privacy_policy_ack" value="Yes" required />
          I have read and agree to the <a className="tc-form-link" href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>
        </label>
      </fieldset>

      <button className="tc-form-submit" type="submit" disabled={state.submitting}>
        Submit Registration
      </button>
    </form>
  );
}

export default RegistrationForm;
