import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Audubon() {
  const [state, handleSubmit] = useForm("mnjeklrn");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form className="tc-contact-form" onSubmit={handleSubmit}>
      <label className="tc-form-label" htmlFor="email">
        Email Address
      </label>
      <input
        className="tc-form-input"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        className="tc-form-error"
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label className="tc-form-label" htmlFor="message">
        Message
      </label>
      <textarea
        className="tc-form-input tc-form-textarea"
        id="message"
        name="message"
        rows="4"
      />
      <ValidationError
        className="tc-form-error"
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button className="tc-form-submit" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default Audubon;