import { createContext, useContext, useState } from "react";
import type { Product } from "../types/product";


type CartContextType ={
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart((prev) => [...prev, product]);
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider 
        value={{ cart, 
                addToCart, 
                removeFromCart }}>
        {children}
        </CartContext.Provider>

    );
    };

    export const useCart = () => {
        const context  = useContext(CartContext);
        if (!context) {
            throw new Error("useCart must be used inside CartProvider");

        }
        return context;
    };
    


