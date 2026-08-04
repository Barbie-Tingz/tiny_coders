import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <nav>
            <ul className= "navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/classes">Classes</Link></li>
                <li><Link to="/enrollment">Enrollment</Link></li>
                <li><Link to="/videos">Videos</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/FAQ">FAQ</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar