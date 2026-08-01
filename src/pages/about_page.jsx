import kid_1 from '../assets/kid_1.svg'
import arduino from '../assets/arduino.svg'
import breadboard from '../assets/breadboard.svg'
import led from '../assets/LED.svg'

function AboutPage() {
    return(
        <div className="about_page">
            <div className="about_top">
                <section className="intro_sec"> 
                    <h1>What Makes Tiny Coders Unique?</h1>
                    <p>A blinking LED today. A finished game next month. 
                        A kid who used to be intimidated by a keyboard, 
                        now debugging their own code like it's nothing. 
                        That's the whole philosophy — nobody starts at the end.
                    </p>
                </section>

                <section className="about_info_sec">
                    <div className="info_frame">
                        <p>TINY CODERS, BIG IDEAS</p>
                        <img src={kid_1} className="shape shape_one" alt="" />
                        <img src={arduino} className="shape shape_two" alt="" />
                        <img src={breadboard} className="shape shape_three" alt="" />
                        <img src={led} className="shape shape_four" alt="" />
                    </div>
                </section>
            </div>

            <div className="mission_statement">
                <section className="mission_top">
                    <h1>Our Mission</h1>
                </section> 
                <section className="mission_sec">
                    <p>## Mission info goes here ##</p>
                </section>
            </div>
        </div>
    )
}


export default AboutPage 