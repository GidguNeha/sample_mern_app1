import { Link } from "react-router-dom";
import './Header.css'



function Header(){
    return(
        <div className="header">  

            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
            <Link to="/service">service</Link>
            
        </div>
    )

}

export default Header;









