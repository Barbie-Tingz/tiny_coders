import breadboard from '../assets/breadboard.svg'
import keyboard from '../assets/keyboard.svg'
import rasp_pi from '../assets/rasp_pi.svg'

function HomePage() {
    return(
<div className="home_page">
    <div className="section_title">
        <h1>What makes Tiny Coders Unique</h1>
    </div>

    <div className="cards_row">
        <div className="card card_one">
            <img src={breadboard} alt="" />
            <h3>Electronics & Wiring Breadboards</h3>
            <p>## More Details ##</p>
        </div>

        <div className="card card_two">
            <img src={keyboard} alt="" />
            <h3>Learning Linux Operating System</h3>
            <p>## More Details ##</p>
        </div>

        <div className="card card_three">
            <img src={rasp_pi} alt="" />
            <h3>Raspberry Pico Pi Configuration</h3>
            <p>## More Details ##</p>
        </div>
    </div>
</div>
    )
}

export default HomePage