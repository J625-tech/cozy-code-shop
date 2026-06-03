import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/products", {
                name,
                price: Number(price),
                image,
                category,
            });
            alert ("Product added successfuly!");
            setName("");
            setPrice("");
            setImage("");
            setCategory("");
        } catch (err) {
            console.error(err);
        }
            };

            return (
                <div style={{ padding: "20px", color: "white"}}>
                    <h1>Add Product (Admin)</h1>

                    <form onSubmit={handleSubmit}>
                        <input placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                         />
                         <br />
              <input placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                         />

                         <br />

                          <input placeholder="image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                         />

                         <br />

                          <input placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                         />
                         <br />

                         <button type="submit">Add Product</button>

                        </form>

                </div>
            );
        };

        export default AddProduct;