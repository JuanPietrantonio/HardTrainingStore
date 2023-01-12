
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav className="nav-menu">  
            <Link to="/">
                <h1>Hard Training Store</h1>
            </Link>
            <Link to="/category/protein">Proteinas</Link>
            <Link to="/category/amino">Amonacidos</Link>
            <Link to="/category/dumbbells">Pesas</Link>
            <CartWidget></CartWidget>
            
        </nav>
    )
}

export default NavBar;