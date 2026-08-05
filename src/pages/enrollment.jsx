import { useState } from "react"
import Audobon from "../registration_forms/audobon.jsx"
import Avalon from "../registration_forms/avalon.jsx"
import AzaleaPark from "../registration_forms/azalea_park.jsx"
import BaldwinPark from "../registration_forms/baldwin_park.jsx"
import Hillcrest from "../registration_forms/hillcrest.jsx"
import Princeton from "../registration_forms/princeton.jsx"

const schools = [
    { key: "audobon", name: "Audobon", accent: "sky-cyan", Form: Audobon },
    { key: "avalon", name: "Avalon", accent: "blue", Form: Avalon },
    { key: "azalea-park", name: "Azalea Park", accent: "pink", Form: AzaleaPark },
    { key: "baldwin-park", name: "Baldwin Park", accent: "lavender", Form: BaldwinPark },
    { key: "hillcrest", name: "Hillcrest", accent: "sky-cyan", Form: Hillcrest },
    { key: "princeton", name: "Princeton", accent: "blue", Form: Princeton },
]

function EnrollmentPage() {
    const [openSchool, setOpenSchool] = useState(null)

    return(
        <div className="tc-page">
            <div className="tc-page-hero">
                <div className="tc-unique-eyebrow">JOIN A CLASS</div>
                <div className="finger-paint font-md">Enrollment</div>
            </div>

            <div className="tc-school-grid">
                {schools.map(({ key, name, accent, Form }) => {
                    const isOpen = openSchool === key
                    return (
                        <div key={key} className={`tc-school-card ${accent}${isOpen ? " open" : ""}`}>
                            <button
                                className="tc-school-card-header"
                                onClick={() => setOpenSchool(isOpen ? null : key)}
                                aria-expanded={isOpen}
                            >
                                <span className="tc-school-name">{name}</span>
                                <span className="tc-school-toggle">{isOpen ? "−" : "+"}</span>
                            </button>
                            {isOpen && (
                                <div className="tc-school-form">
                                    <Form />
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EnrollmentPage