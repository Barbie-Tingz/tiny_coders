import rasp_pi from '../assets/rasp_pi.svg'
import jumper_wires from '../assets/jumper_wires.svg'
import led from '../assets/LED.svg'
import monitor from '../assets/monitor.svg'
import ContactForm from './contact_form'

function ContactPage() {
return(
<div className="contact_page">
    <div className="contact_left">
        <h1>Contact Us</h1>
        <div className="photo_frame">
            <ContactForm></ContactForm>
        </div>
    </div>

    <div className="contact_right">
        <div className="contact_card contact_card_one">
            <h3>Jillian Henry</h3>
            <p><em>Company Owner</em></p>
            <p>Telephone: (123) 456-7890<br/>hello@example.com</p>
        </div>

        <div className="contact_card contact_card_two">
            <h3>Alex Serna</h3>
            <p><em>Company Coordinator</em></p>
            <p>Telephone: (123) 456-7890<br/>hello@example.com</p>
        </div>
    </div>
</div>
    )
}

export default ContactPage