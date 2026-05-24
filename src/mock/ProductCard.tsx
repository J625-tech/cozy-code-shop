import "./ProductCard.scss";

type ProductCardProps ={
    name: string;
    price: number;
    image: string;
    category: string;
};

const ProductCard = ({name, price,image, category}: ProductCardProps) => {
    return (
        <div className="product-card">
            <img src={image} alt={name}/>

            <h3>{name}</h3>
            <span>{category}</span>
            <p>${price}</p>

            <button>Add to cart</button>

        </div>
    );
};

export default ProductCard;
