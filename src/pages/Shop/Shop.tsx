import { useState } from "react";
import { products } from "../../mock/products";
import  ProductCard  from "../../components/ProductCard";
import Pagination from "../../components/Pagination/Pagination";


const Shop = () => {
    const [page, setPage] = useState(1);

    const productsPerPage = 2;
     
    const totalPages = Math.ceil(
        products.length / productsPerPage
    );


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
                    key={product.id} 
                    product={product}
                    
                />
            ))}
        </div>

            <Pagination
                page={page}
                totalPages={totalPages}
                onChange={setPage}
                />
        </div>
    );
};

export default Shop;
