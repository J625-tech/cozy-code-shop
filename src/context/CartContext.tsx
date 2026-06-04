import { createContext, useContext, useState, useEffect } from "react";
import type { Product } from "../types/product";
import type { CartItem } from "../types/cart";

type CartContextType ={
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: CartItem["_id"]) => void;
    increase: (id: CartItem["_id"]) => void;
    decrease: (id: CartItem["_id"]) => void;
    clearCart: () => void;

};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existingItem = prev.find(item => item._id === product._id);

            if (existingItem) {
                return prev.map(item => 
                    item._id === product._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
            }
            return [...prev, { ...product, quantity: 1}];
        });
    };

    const removeFromCart = (id: CartItem["_id"]) => {
        setCart((prev) => 
            prev.filter((item) => item._id !== id)
    );
    };

    const increase = (id: CartItem["_id"]) => {
        setCart((prev) =>
            prev.map((item) => 
                item._id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
   );
};
    const decrease = (id: CartItem["_id"]) => {
        setCart((prev) =>
            prev
                .map((item) => 
                    item._id === id  
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
   );
};

const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
};
    return (
        <CartContext.Provider 
        value={{ cart, 
                addToCart, 
                removeFromCart,
                increase,
                decrease,
                clearCart,
             }}>

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
    


