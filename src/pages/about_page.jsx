import kid_4 from '../assets/kid_4.svg'
import arduino from '../assets/arduino.svg'
import breadboard from '../assets/breadboard.svg'
import led from '../assets/LED.svg'

function AboutPage() {
    return(
        <div className="about_page">
            <div className="about_top">
                <section className="intro_sec"> 
                    <h1>About Page</h1>
                    <p>## About Text Goes Here ##</p>
                </section>

                <section className="about_info_sec">
                    <div className="info_frame">
                        <p>## Text goes here instead of a picture ##</p>
                        <img src={kid_4} className="shape shape_one" alt="" />
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