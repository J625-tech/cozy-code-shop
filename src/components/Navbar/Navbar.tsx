import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {

    const { user, logout } = useAuth();

    return (
        <header className="navbar">

            <h2 className="logo">CozyCodeShop</h2>

            <nav className="links">

                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/admin">Admin</Link>

                {
                    user ? (
                        <button 

                        onClick={logout}
                        className="logout-btn"
                        >
                            Logout 
                        </button>

                    ) : (
                    <Link to="/register">Login</Link>
                    )
                }

            </nav>

        </header>
    );
};

export default Navbar;