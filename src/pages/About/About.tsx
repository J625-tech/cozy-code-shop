import { FaTruck, FaStar, FaEnvelope, FaLock } from "react-icons/fa";
import "./About.scss";



const About = () => {
    return (
        <div className="about">
            <h1>About us</h1>

            <p className="about-text">
                Welcome to CozyCodeShop - your cozy place for fashion and coding style
                </p>
                <div className="about-cards">
                    <div className="card">
                        <FaTruck />
                        <h3>Delivery</h3>
                        <p>Worldwide shipping with fast and reliables service.</p>
                    </div>
                    <div className="card">
                        <FaStar /> 
                        <h3>Reviews</h3>
                        <p>Trusted by customers who love our products.</p>
                    </div>

                    <div className="card">
                        < FaEnvelope />
                        <h3>Contact</h3>
                        <p>Support@cozycodeshop.com</p>
                    </div>

                    <div className="card">
                        <FaLock />
                        <h3>Secure Shopping</h3>
                        <p>Safe payments and protected customer information</p>
                    </div>

                </div>
        </div>
    );
};

export default About;
