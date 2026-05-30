import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Admin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin = () => {
        if (email === "admin@gmail.com" && password === "123456") {
            navigate("/admin/dashboard");
        } else {
            alert("wrong email or password");
        }
    };

    return (
        <div style={{ padding: "40px", color: "white" }}>
            <h1>Admin Login</h1>
            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br />
            <br />

            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    )};
