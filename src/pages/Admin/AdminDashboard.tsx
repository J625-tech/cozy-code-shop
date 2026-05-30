import { useState } from "react";
import { getProducts, saveProducts } from "../../utils/productStorage";

import type { Product } from "../../types/product";
import "./AdminDashboard.scss"


export default function AdminDashboard() {
    const [products, setProducts] = useState<Product[]>(getProducts())


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    const addProduct = () => {
    
        const newProduct: Product = {
            id: Date.now(),
            name,
            price: Number(price),
            image: image || "",
            category,
        };

        const updatedProducts = [newProduct, ...products]

        setProducts(updatedProducts);
        saveProducts(updatedProducts);

        setName("");
        setPrice("");
        setImage("");
        setCategory("");

        alert("Product added!");
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>

        <div className="admin-form">
            {/* <h2>Add Product</h2> */}

            <input placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
            />

            <input placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
            />

            <input placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
            />

            <input placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
            />

            <button onClick={addProduct}>
                addProduct
            </button>

            

        </div>
    </div>
    );
}