import { useState } from "react";
import { getProducts, saveProducts } from "../../utils/productStorage";

import type { Product } from "../../types/product";

export default function AdminDashboard() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    const addProduct = () => {
        const products = getProducts();

        const newProduct: Product = {
            id: Date.now(),
            name,
            price: Number(price),
            image,
            category,
        };

        saveProducts([newProduct, ...products]);

        setName("");
        setPrice("");

        alert("Product added!");
    };

    return (
        <div style={{
            padding: "40px",
            color: "white"
        }}>
            <h1>Admin Dashboard</h1>

            <h2>Add Product</h2>

            <input placeholder="Product name"
                    value={name}
                    onChange={(e) => 
                        setName(e.target.value)
                    }
            />

            <br /><br />

            <input placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
             />

             <br /><br />

            <input placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)} 
            />

            <br /><br />

            <input placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)} 
            />


             <button onClick={addProduct}>
                Add Product
             </button>
        </div>
    );
}