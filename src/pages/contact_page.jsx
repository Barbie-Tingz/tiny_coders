import rasp_pi from '../assets/rasp_pi.svg'
import jumper_wires from '../assets/jumper_wires.svg'
import led from '../assets/LED.svg'
import monitor from '../assets/monitor.svg'

function ContactPage() {
return(
<div className="contact_page">
    <div className="contact_left">
        <h1>Contact Us</h1>
        <div className="photo_frame">
            <h3> Register forms </h3>
            <button>Register Now</button>
            <img src={jumper_wires} alt="" className="jumper_wires" />
            <img src={led} alt="" className="LED" />
        </div>
    </div>

    <div className="contact_right">
        <div className="contact_card contact_card_one">
            <h3>Jillian Henry</h3>
            <p><em>Company Owner</em></p>
            <p>123 Anywhere St.<br/>Any City ST 12345<br/>Telephone: (123) 456-7890<br/>hello@example.com</p>
        </div>

        <div className="contact_card contact_card_two">
            <h3>Alex Serna</h3>
            <p><em>Company Coordinator</em></p>
            <p>123 Anywhere St.<br/>Any City ST 12345<br/>Telephone: (123) 456-7890<br/>hello@example.com</p>
        </div>
    </div>
</div>
    )
}

export default ContactPage