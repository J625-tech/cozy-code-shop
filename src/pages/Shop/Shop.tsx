import { useState, useEffect } from "react";
import  axios from "axios";
import type { Product } from "../../types/product";

import  ProductCard  from "../../components/ProductCard";
import Pagination from "../../components/Pagination/Pagination";



const Shop = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [editingProduct,setEditingProduct] = useState<Product | null>(null);

    const productsPerPage = 2;

    const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:3000/products");
            setProducts(res.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    const deleteProduct = async (id: string) => {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);

            setProducts((prev) => prev.filter((p) => p._id !== id));

            const newTotalPages = Math.ceil(
                (products.length - 1) / productsPerPage);

                if (page > newTotalPages) {
                    setPage(newTotalPages || 1);
                }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleEdit = (product: Product) => {
        setEditingProduct(product);
    };

    const handleUpdate = async () => {
        if (!editingProduct) return;
        try {
            const res = await axios.patch(`http://localhost:3000/products/${editingProduct._id}`,
                editingProduct
            );

            setProducts((prev) => 
                prev.map((p) => 
                    p._id === editingProduct._id ? res.data : p
                )
            );

            setEditingProduct(null);
        } catch (error){
            console.error("Update error:", error);
        }
    }


    const totalPages = Math.ceil(products.length / productsPerPage);

    const start = (page - 1) * productsPerPage;
    
    const end = start + productsPerPage;

const visibleProducts = products.slice(start, end);

    return (
        <div>
            <h1>Shop</h1>

            <div style={{ 
                display: "grid", 
                gridTemplateColumns:"repeat(auto-fit,minmax(220px, 1fr))",
                gap: "20px",
                padding: "20px",
                justifyItems: "center",
                }}
                >
                {visibleProducts.map((product) => (
                    <ProductCard 
                    key={product._id} 
                    product={product}
                    onDelete={deleteProduct}
                    onEdit={handleEdit}
                />
            ))}
        </div>

            <Pagination
                page={page}
                totalPages={totalPages}
                onChange={setPage}
                />
                {editingProduct && (
                    <div style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(0,0,0,0,5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    >
                        <div style={{
                            background: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            width: "300px",
                        }}
                        > 
                        <h3>Edit Product</h3>

                        <input 
                        value={editingProduct.name}
                        onChange={(e) => 
                            setEditingProduct({
                                ...editingProduct,
                                name: e.target.value,
                            })
                        } 
                        placeholder="name"
                        />
                        <input 
                        value={editingProduct.price}
                        onChange={(e) => 
                            setEditingProduct({
                                ...editingProduct,
                                price: Number(e.target.value),
                            })
                        } 
                        placeholder="price"
                        />
                        <button onClick={handleUpdate}>
                            Save
                        </button>

                        <button onClick={() => setEditingProduct(null)}
                            > Cancel 
                        </button>

                        </div>

                    </div>
                )}
        </div>
    );
};

export default Shop;
