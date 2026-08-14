import { useEffect, useState } from "react"
import Audubon from "../registration_forms/audubon.jsx"
import Avalon from "../registration_forms/avalon.jsx"
import AzaleaPark from "../registration_forms/azalea_park.jsx"
import BaldwinPark from "../registration_forms/baldwin_park.jsx"
import Hillcrest from "../registration_forms/hillcrest.jsx"
import Princeton from "../registration_forms/princeton.jsx"

const schools = [
    { key: "audubon", name: "Audubon", accent: "sky-cyan", Form: Audubon },
    { key: "avalon", name: "Avalon", accent: "blue", Form: Avalon },
    { key: "azalea-park", name: "Azalea Park", accent: "pink", Form: AzaleaPark },
    { key: "baldwin-park", name: "Baldwin Park", accent: "lavender", Form: BaldwinPark },
    { key: "hillcrest", name: "Hillcrest", accent: "sky-cyan", Form: Hillcrest },
    { key: "princeton", name: "Princeton", accent: "blue", Form: Princeton },
]

function EnrollmentPage() {
    const [openSchool, setOpenSchool] = useState(null)
    const selected = schools.find((school) => school.key === openSchool)

    useEffect(() => {
        if (!selected) return

        document.body.style.overflow = "hidden"
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setOpenSchool(null)
        }
        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.body.style.overflow = ""
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [selected])

    return(
        <div className="tc-page">
            <div className="tc-page-hero">
                <div className="tc-unique-eyebrow">JOIN A CLASS</div>
                <div className="finger-paint font-md">Enrollment</div>
            </div>

            <div className="tc-school-grid">
                {schools.map(({ key, name, accent }) => (
                    <div key={key} className={`tc-school-card ${accent}`}>
                        <button
                            className="tc-school-card-header"
                            onClick={() => setOpenSchool(key)}
                        >
                            <span className="tc-school-name">{name}</span>
                            <span className="tc-school-toggle">+</span>
                        </button>
                    </div>
                ))}
            </div>

            {selected && (
                <div className="tc-modal-overlay" onClick={() => setOpenSchool(null)}>
                    <div className="tc-modal-panel" onClick={(e) => e.stopPropagation()}>
                        <div className="tc-modal-header">
                            <span className="tc-modal-title">{selected.name} Registration</span>
                            <button
                                className="tc-modal-close"
                                onClick={() => setOpenSchool(null)}
                                aria-label="Close"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="tc-modal-body">
                            <selected.Form />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EnrollmentPage
