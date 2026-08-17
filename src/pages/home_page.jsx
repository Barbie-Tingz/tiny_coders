import { useState } from 'react'
import computer from '../assets/computer.png'
import alien from '../assets/alien_sprite.png'
import pygame from '../assets/pygame.png'
import TinyTumble from '../pages/tiny_tumble.jsx'

const featureCards = [
  {
    icon: pygame,
    title: "Programming Games in Python Language",
    description: "Kids learn real coding fundamentals by building their own games in Python, turning lines of code into playable creations from day one.",
  },
  {
    icon: alien,
    title: "Designing Video Game Characters",
    description: "Students bring their imagination to life by designing and customizing their own video game characters, blending art and logic in a way that's uniquely their own.",
  },
  {
    icon: computer,
    title: "Take-Home Mini Computer",
    description: "Every student leaves with a take-home mini computer, so the learning doesn't stop when class ends — they can keep building and exploring at home.",
  },
]

export default function HomePage() {
  const [selectedCard, setSelectedCard] = useState(null)

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
          {featureCards.map((card, i) => (
            <div key={i} className="tc-window tc-fcard-window">
              <div className="tc-window-main">
                <div className="tc-window-titlebar">
                  <span className="tc-window-dot"></span>
                  <span className="tc-window-dot"></span>
                  <span className="tc-window-dot"></span>
                </div>
                <button className="tc-window-body tc-fcard-btn" onClick={() => setSelectedCard(card)}>
                  <img className="tc-fcard-icon" src={card.icon} alt=""/>
                  <div className="tc-fcard-title">{card.title}</div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCard && (
        <div className="tc-modal-overlay" onClick={() => setSelectedCard(null)}>
          <div className="tc-modal-panel tc-modal-panel-sm" onClick={(e) => e.stopPropagation()}>
            <div className="tc-modal-header">
              <span className="tc-modal-title">{selectedCard.title}</span>
              <button
                className="tc-modal-close"
                onClick={() => setSelectedCard(null)}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="tc-modal-body">
              <p className="tc-fcard-modal-desc">{selectedCard.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* UNIQUE SECTION
      <div className="tc-unique-section">
        <div className="tc-unique-eyebrow">OUR PHILOSOPHY</div>
        <div className="finger-paint font-md">What Makes Tiny Coders Unique?</div>
        <div className="tc-unique-body">
          A blinking LED today. A finished game next month. A kid who used to be intimidated by a
          keyboard, now debugging their own code like it's nothing. That's the whole philosophy —
          nobody starts at the end.
        </div>
      </div>
      */}
      <TinyTumble className="tinytumble-home"></TinyTumble>
    </div>
  );
}