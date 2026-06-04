import { useState } from "react";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
    const { register } = useAuth();

    const [email, setEmail] = useState("");
    
    const [password, setPassword] = useState("");
 
    const [confirm, setConfirm] = useState("");
    
    const [name, setName] = useState("");

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (password !== confirm) {
            alert("Password do not match");
            return;
        }

        register(email, password);
        alert("Account created!");

        setEmail("");
        setPassword("");
        setPassword("");
        setName("");
    };

    return(
        <div className={styles.registerPage}>
            <div className={styles.registerCard}>
                <h1>Create Account</h1>
                <p>Register to continue shopping</p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input 
                    type="text"  
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                    <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <input 
                    type="password" 
                    placeholder="Confirm Password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                     />

                    <button type="submit">Register</button>
                     
                </form>

                <span className={styles.loginText}>
                    Already have an account? {" "}
                   <Link to="/login">Login</Link>
                </span>

            </div>

        </div>
    );
}