import Calendar from "./calendar"

function ClassesPage() {
    return(
        <div className="tc-page">
            <div className="tc-page-hero">
                <div className="tc-unique-eyebrow">PICK YOUR SPOT</div>
                <div className="finger-paint font-md">Classes</div>
            </div>
            <Calendar></Calendar>
        </div>
    )
}

export default ClassesPage