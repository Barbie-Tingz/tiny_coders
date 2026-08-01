import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xwvgdrwz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
    <label className="parent_name">
        Parent Name
    </label>
    <input
        id="parent_name"
        type="text"
        name="name"
    />
    <label className="child_name">
        Child Name 
    </label>
    <input
        id="child_name"
        type="text"
        name="name"
    />
    <label className="email_address">
        Email Address
    </label>
    <input
        id="email_address"
        type="email" 
        name="email"
    />
    <label className="message">
        Message
    </label>
    <input
        id="message"
        type="text"
        name="name"
    />
    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
    />
    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
    />
    <button type="submit" disabled={state.submitting}>
        Submit Form
    </button>
    </form>
  );
}

export default ContactForm