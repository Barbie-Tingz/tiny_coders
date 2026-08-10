import monitor from '../assets/monitor.svg'
import arduino from '../assets/arduino.svg'
import breadboard from '../assets/breadboard.svg'
import BugDash from '../pages/bug_dash.jsx'

export default function HomePage() {
  return (
    <div className="tc-page">

      {/* HERO */}
      <div className="tc-hero-wrap">
        <div className="tc-hero-browser">
          <div className="tc-hero-shadow1" />
          <div className="tc-hero-shadow2" />
          <div className="tc-hero-window">
            <div className="tc-hero-tabstrip">
              <div className="tc-hero-tab">tinycoders.org</div>
            </div>

            <div className="tc-hero-bar">
              <span className="tc-hero-nav-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/></svg></span>
              <span className="tc-hero-nav-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></span>
              <span className="tc-hero-nav-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg></span>
              <div className="tc-hero-addr"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg> www.tinycoders.org</div>
              <div className="tc-hero-dot" />
            </div>

            <div className="tc-hero-body">
              <div className="finger-paint font-lg">Big Ideas Start Small</div>
              <div className="tc-hero-sub">
                Hands-on electronics, coding, and mini computers for curious young minds — no experience needed.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="tc-cards-section">
        <div className="tc-cards">
          {[
            { icon: breadboard, title: "Electronics & Wiring Breadboards" },
            { icon: monitor, title: "Creating Games in Python" },
            { icon: arduino, title: "Create Your Own Mini Computer" },
          ].map((card, i) => (
            <div key={i} className="tc-fcard">
                <img src={card.icon} alt=""/>
              <div className="tc-fcard-title">{card.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* UNIQUE SECTION */}
      <div className="tc-unique-section">
        <div className="tc-unique-eyebrow">OUR PHILOSOPHY</div>
        <div className="finger-paint font-md">What Makes Tiny Coders Unique?</div>
        <div className="tc-unique-body">
          A blinking LED today. A finished game next month. A kid who used to be intimidated by a
          keyboard, now debugging their own code like it's nothing. That's the whole philosophy —
          nobody starts at the end.
        </div>
      </div>
      <BugDash className= "bugdash-home"></BugDash>
    </div>
  );
}