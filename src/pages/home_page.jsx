import breadboard from '../assets/breadboard.svg'
import monitor from '../assets/monitor.svg'
import rasp_pi from '../assets/rasp_pi.svg'
import BugDash from '../pages/bug_dash.jsx'
import AboutPage from '../pages/about_page.jsx'

function HomePage() {
    return(
<div className="home_page">
    <div className="section_title">
        <h1 className="bitcount-prop-single">Big Ideas Start Small</h1>
    </div>

    <div className="cards_row">
        <div className="card card_one">
            <img src={breadboard} alt="" />
            <h3>Electronics & Wiring Breadboards</h3>
            <p>## More Details ##</p>
        </div>

        <div className="card card_two">
            <img src={monitor} alt="" />
            <h3>Creating Games in Python</h3>
            <p>## More Details ##</p>
        </div>

        <div className="card card_three">
            <img src={rasp_pi} alt="" />
            <h3>Create Your Own Mini Computer</h3>
            <p>## More Details ##</p>
        </div>
    </div>
    <AboutPage></AboutPage>
    <BugDash></BugDash>
</div>
    )
}

export default HomePage