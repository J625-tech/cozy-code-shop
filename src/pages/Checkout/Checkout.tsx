import { useState } from "react";
import { useCart } from "../../context/CartContext";


export default function Checkout () {
    const { cart, clearCart } = useCart();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (cart.length === 0) {
            alert("Cart is empty");
            return;
        }
        alert (`Order placed!\nName: ${name}\nTotal: $${total.toFixed(2)}`);

        clearCart();

        setName("");
        setAddress("");
        setPhone("");
    };

    return(
        <div style={{ padding: "20px", color: "white" }}>
            <h1>Checkout</h1>

            <h2>Total: ${total.toFixed(2)}</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ marginBottom: "10px", padding: "5px" }}
                    />
                </div>

                <div>
                    <input
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        style={{ marginBottom: "10px", padding: "5px" }}
                    />
                </div>

                <div>
                    <input
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        style={{ marginBottom: "10px", padding: "5px" }}
                    />
                </div>
                <button type="submit">
                    Place Order
                </button>
            </form>
        </div>
    );
}