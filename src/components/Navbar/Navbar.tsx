import "./Navbar.scss";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <header className="navbar">
            <h2 className="logo">CozyCodeShop</h2>

            <nav className="links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/register">Register</Link>
            </nav>

        </header>
    );
};

export default Navbar;