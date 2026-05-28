
import "./Home.scss";

import { products } from "../../mock/products";
import ProductCard from "../../components/ProductCard/ProductCard";



const Home = () => {
    return (
        <main className="home">
            <section className="hero">
                <h1>Welcome to CozyCodeShop</h1>
            
                <p>Your one-stop shop for all your 
                    coding needs!</p>

                <div className="buttons">
                    
                <button className="shop-btn">Shop now</button>
                <button className="learn-btn">Learn More</button>
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