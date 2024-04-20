import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.login}>
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="Email" className={styles.text} />
        <input type="text" placeholder="Password" className={styles.text} />
        <span>
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className={styles.check}
          />
          <label htmlFor="remember" className={styles.check}>
            {" "}
            Remember me
          </label>
        </span>
        <button>Log in</button>
        <a href="#" className={styles.forgot}>
          Forgot Password?
        </a>
        <p>
          Don&rsquo;t have an account?&ensp;
          <Link href="/register" style={{ textDecoration: "underline" }}>
            {""}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
