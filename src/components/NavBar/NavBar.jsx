import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav className="nav-menu">  
            <Link to="/">
                <h3>Mi tienda</h3>
            </Link>
            <Link to="/detalle">Detalle1</Link>
            <Link to="/">Detalle2</Link>
            <Link to="/">Detalle3</Link>
            <CartWidget>🛒</CartWidget>
        </nav>
    )
}

export default NavBar;