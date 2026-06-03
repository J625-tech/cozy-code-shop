import "./ProductCard.scss";
import { useCart } from "../../context/CartContext";
import type { Product } from "../../types/product";

type ProductCardProps ={
    product: Product;
    onDelete?: (id: string) => void;
    onEdit?: (product: Product) => void;
};

const ProductCard = ({ product, onDelete, onEdit }: ProductCardProps) => {
    const { addToCart } = useCart();


    return (
        <div className="product-card">
            <img src={product.image} alt={product.name}/>

            <h3>{product.name}</h3>
            <span>{product.category}</span>
            <p>${product.price}</p>

            <button onClick={() => addToCart(product)}>
                Add to cart
                </button>

                {onDelete && (
                    <button onClick={() => onDelete(product._id)}
                    style={{
                        marginTop: "10px",
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "5px",
                        cursor: "pointer",
                        borderRadius: "4px",
                    }}>
                        Delete
                    </button>
                )}
                {onEdit && (
                        <button 
                        onClick={() => onEdit(product)}
                                            style={{
                        marginTop: "10px",
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "5px",
                        cursor: "pointer",
                        borderRadius: "4px",
                    }}
                    
                        >
                        </button>
                    )}

        </div>
    );
};

export default ProductCard;
