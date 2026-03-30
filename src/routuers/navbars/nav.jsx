import { Link } from "react-router-dom";
import './nav.css'
function NavLinks()
{
    return(
        <div className="nav">
            <Link to="/home">Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default NavLinks