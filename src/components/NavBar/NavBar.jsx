
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav className="nav-menu">  
            <Link to="/">
                <h3>Hard Training Store</h3>
            </Link>
            <Link to="/category/smartphones">Celulares</Link>
            <Link to="/category/laptops">Laptops</Link>
            <Link to="/category/fragrances">Fragancias</Link>
            <CartWidget></CartWidget>
            
        </nav>
    )
}

export default NavBar;