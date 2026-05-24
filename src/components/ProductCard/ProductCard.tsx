import { useCart } from "../../context/CartContext";

type Product = {
    id: number;
    title: string;
    image: string;
    price: number;
};

export const ProductCard = ({ product }: { product: Product }) => {
    const { addToCart } = useCart();
    
    return (
        <div>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>

            <button onClick={() => addToCart(product)}>
                Add to Cart 
            </button>
        </div>
    )
}

export default ProductCard;
