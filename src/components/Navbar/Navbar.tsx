import "./Navbar.scss";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <header className="navbar">
            <h2>CozyCodeShop</h2>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
            </nav>

        </header>
    );
};

export default Navbar;