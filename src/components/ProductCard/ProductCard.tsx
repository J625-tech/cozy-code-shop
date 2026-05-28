import "./ProductCard.scss";
import { useCart } from "../../context/CartContext";
import type { Product } from "../../types/product";

type ProductCardProps ={
    product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();


    return (
        <div className="product-card">
            <img src={product.image} alt={product.name}/>

            <h3>{product.name}</h3>
            <span>{product.category}</span>
            <p>${product.price}</p>

            <button onClick={() => addToCart}>Add to cart</button>

        </div>
    );
};

export default ProductCard;
