import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { getProducts, saveProducts } from "../../utils/productStorage";
import type { Product } from "../../types/product";


export default function Admin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [name, setName] = useState("");
    const [price, setPrice] = useState ("");

    const handleLogin = () => {
        if (email === "admin@gmail.com" && password === "123456") {
            navigate("./admin/dashboard");
        } else {
            alert("wrong email or password");
        }
    };

    const addProduct = () => {
        const products = getProducts();

      const newProduct: Product = {
        id: Date.now(),
        name,
        price: Number(price),
      };

      saveProducts([newProduct, ...products]);

      setName("");
      setPrice("");
    }

    return (
        <div style={{ padding: "40px", color: "white" }}>
            <h1>Admin Login</h1>

            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <button onClick={handleLogin}>Login</button>

            <h2>Add Product (Admin)</h2>

            <input placeholder="Product name" 
            value={name}
            onChange={(e) => setName(e.target.value)}/>

            <input placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)} />

            <button onClick={addProduct}>Add Product</button>
        </div>
    )
}