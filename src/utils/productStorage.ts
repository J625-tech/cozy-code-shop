export type Product ={
    id: number;
    name: string;
    price: number;
    image?: string;
    category: string;
};

const KEY = "products";

export const getProducts = (): Product[] => {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
};

export const saveProducts = (products: Product[]) => {
    localStorage.setItem(KEY, JSON.stringify(products));
};
