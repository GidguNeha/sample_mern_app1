import { NavLink } from "react-router-dom";
import './Header.css'



function Header(){
    return(
        <header className="header">
            <NavLink className="header-brand" to="/">People<span>First</span></NavLink>
            <nav className="header-nav" aria-label="Main navigation">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/service">Services</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </nav>
        </header>
    )

}

export default Header;








