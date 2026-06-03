import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const { cart, removeFromCart, increase, decrease } = useCart();
    const navigate = useNavigate();

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
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
                            key={item._id}
                            style={{
                                border: "1px solid gray",
                                marginBottom: "10px",
                                padding: "10px",
                            }}
                        >
                            <img src={item.image} 
                            width="100"
                            alt={item.name}
                            />

                            <h3>{item.name}</h3>

                            <p>Qty: {item.quantity}</p>

                            <p>
                                {item.quantity}$ x {item.price}
                            </p>
                            <p>
                                Total: {(item.price * item.quantity).toFixed(2)}$
                            </p>

                            <div style={{ display: "flex", gap: "10px" }}>
                                <button onClick={() => increase(item._id)}>+</button>
                                <button onClick={() => decrease(item._id)}>-</button>
                            </div>
                            <button onClick={() => removeFromCart(item._id)}>
                                Remove
                            </button>
                        </div>
                    ))}

                    <h2>Total: {totalPrice.toFixed(2)}$</h2>

                    <button onClick={() => navigate("/checkout")}>
                        Checkout
                    </button>
                </>
            )}
        </div>
    );
}