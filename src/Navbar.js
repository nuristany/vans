
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <nav >
        <label className="logo"><Link to="/">#VANLIFE</Link></label>
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/vans">Vans</Link></li>
            
            
        </ul>                
    </nav>
    )
}

export default Navbar;