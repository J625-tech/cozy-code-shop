import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <h2 className="logo">CozyCodeShop</h2>
            <input placeholder="Search products...." />

            <div className="links">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Cart</a>

            </div>
        </div>
    );
};

export default Navbar;