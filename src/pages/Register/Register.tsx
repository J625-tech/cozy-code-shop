import styles from "./Register.module.scss";
import { Link } from "react-router-dom";

export default function Register() {
    return(
        <div className={styles.registerPage}>
            <div className={styles.registerCard}>
                <h1>Create Account</h1>
                <p>Register to continue shopping</p>

                <form className={styles.form}>
                    <input type="text"  placeholder="Full Name"/>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />

                    <button type="submit">Register</button>
                     
                </form>

                <span className={styles.loginText}>
                    Already have an account? {" "}
                   <Link to="./login">Login</Link>
                </span>

            </div>

        </div>
    );
}