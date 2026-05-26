import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";


export default function Cart() {
    const { cart, removeFromCart } = useCart();

    const navigate = useNavigate();

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price,
        0
    );

    return (
        <div style={{ padding: "20px", color: "white" }}>
            <h1>Shopping Cart</h1>

            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                border: "1px solid gray",
                                marginBottom: "10px",
                                padding: "10px",
                            }}
                        >
                            <img src={item.image} width="100" />

                            <h3>{item.title}</h3>
                            <p>{item.price}$</p>

                            <button onClick={() => removeFromCart(item.id)}>
                                Remove
                            </button>
                        </div>
                    ))}

                    <h2>Total: {totalPrice}$</h2>

                    <button onClick={() => navigate("./checkout")}> Checkout
                                        
                    </button>
                </>
            )}
        </div>
    );
}


