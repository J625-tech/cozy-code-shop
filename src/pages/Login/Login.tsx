import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const success= login(email, password);

        if (success) {
            alert("Login successful");
            navigate("/");
        } else {
            alert("Wrong email or password");
        }
    };
    return (
        <div style={{padding: "40px"}}>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <br />

                <button type="submit">
                    Login
                </button>
            </form>

        </div>
    );
}