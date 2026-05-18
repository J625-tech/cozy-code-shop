type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
        </div>
    )
}

export default ProductCard;
