import logo from "./images/logo.png"
import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav className="nav">
            <img src={logo} className="nav"/>
            <ul className="nav-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;