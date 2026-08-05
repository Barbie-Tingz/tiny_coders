import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xwvgdrwz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form className="tc-contact-form" onSubmit={handleSubmit}>
    <label className="tc-form-label" htmlFor="parent_name">
        Parent Name
    </label>
    <input
        className="tc-form-input"
        id="parent_name"
        type="text"
        name="name"
    />
    <label className="tc-form-label" htmlFor="child_name">
        Child Name
    </label>
    <input
        className="tc-form-input"
        id="child_name"
        type="text"
        name="child_name"
    />
    <label className="tc-form-label" htmlFor="email_address">
        Email Address
    </label>
    <input
        className="tc-form-input"
        id="email_address"
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
        Submit Form
    </button>
    </form>
  );
}

export default ContactForm