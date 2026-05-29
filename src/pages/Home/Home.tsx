
import "./Home.scss";

import { products } from "../../mock/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";



const Home = () => {
    const navigate = useNavigate();
    return (
        <main className="home">
            <section className="hero">
                <h1>Welcome to CozyCodeShop</h1>
            
                <p>Your one-stop shop for all your 
                    coding needs!</p>

                <div className="buttons">
                    
                <button 
                className="shop-btn" 
                onClick={() => navigate("./shop")}>Shop now</button>


                <button className="learn-btn"
                onClick={() => navigate("./about")}>Learn More</button>
                </div>
        </section>

        
        <section className="products">
            {products.map((product) => (
                <ProductCard 
                key={product.id}
                product={product}
                />
            ))}

        </section>


        </main>
    );
};

export default Home;