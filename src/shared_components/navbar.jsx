import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const linkClass = ({ isActive }) => `tc-nav-link${isActive ? " active" : ""}`
    const closeMenu = () => setMenuOpen(false)

    return(
        <nav className="tc-nav">
            <NavLink to="/" end className="tc-nav-logo" onClick={closeMenu}>Tiny Coders</NavLink>

            <button
                className="tc-nav-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`tc-nav-links${menuOpen ? " open" : ""}`}>
                <li><NavLink to="/" end className={linkClass} onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink to="/classes" className={linkClass} onClick={closeMenu}>Classes</NavLink></li>
                <li><NavLink to="/enrollment" className={linkClass} onClick={closeMenu}>Enrollment</NavLink></li>
                <li><NavLink to="/videos" className={linkClass} onClick={closeMenu}>Videos</NavLink></li>
                <li><NavLink to="/contact" className={linkClass} onClick={closeMenu}>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
