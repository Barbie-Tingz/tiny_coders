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
                <p className="tc-contact-info">Email: tinycoders@tinycoders.org</p>
            </div>
        </div>
    </div>
</div>
    )
}

export default ContactPage