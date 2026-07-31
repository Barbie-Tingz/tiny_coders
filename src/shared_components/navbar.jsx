import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <nav>
            <ul className= "navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/videos">Videos</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar