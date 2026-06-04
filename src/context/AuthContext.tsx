import { createContext, useContext, useEffect, useState } from "react";

type User = {
    email: string;
    password: string;
}

type AuthContextType = {
    user: User | null;
    register: (email: string, password: string) => void;
    login: (email: string, password: string) => boolean;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);
const KEY = "users";

export const AuthProvider = ({ children }: {children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const data = localStorage.getItem(KEY);
        if (data) 
            {setUser(JSON.parse(data));
            }
    }, []);

    const register = (email: string, password: string) => {
        const newUser = { email, password };

        localStorage.setItem(KEY,JSON.stringify(newUser));

        setUser(newUser);
    };

    const login = (email: string, password: string) => {
        const data = localStorage.getItem(KEY);

        if (!data) return false;

        const savedUser: User = JSON.parse(data);

        if (
            savedUser.email === email && 
            savedUser.password === password
        ) {
            setUser(savedUser);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem(KEY);
        setUser(null);
    };

    return (
        <AuthContext.Provider 
        value={{ user, register, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
    "useAuth must be used inside AuthProvider"
    );
}

return context;
};
