import ContactForm from './contact_form'

function ContactPage() {
return(
<div className="tc-page">
    <div className="tc-page-hero">
        <div className="tc-unique-eyebrow">GET IN TOUCH</div>
        <div className="finger-paint font-md">Contact Us</div>
    </div>

    <div className="tc-contact-section">
        <div className="tc-contact-form-card">
            <ContactForm></ContactForm>
        </div>

        <div className="tc-contact-people">
            <div className="tc-contact-card">
                <h3 className="tc-contact-name">Jillian Henry</h3>
                <p className="tc-contact-role">Company Owner</p>
                <p className="tc-contact-info">Telephone: (123) 456-7890<br/>hello@example.com</p>
            </div>

            <div className="tc-contact-card accent-pink">
                <h3 className="tc-contact-name">Alex Serna</h3>
                <p className="tc-contact-role">Company Coordinator</p>
                <p className="tc-contact-info">Telephone: (123) 456-7890<br/>hello@example.com</p>
            </div>
        </div>
    </div>
</div>
    )
}

export default ContactPage