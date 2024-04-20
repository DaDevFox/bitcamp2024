import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.login}>
      <h1>Register</h1>
      <input type="text" placeholder="Email" className={styles.text} />
      <input type="password" placeholder="Password" className={styles.text} />
      <button>Register</button>
      <p>Already have an account?</p>
      <Link href="/login" style={{ textDecoration: "underline" }}>
        Login
      </Link>
    </div>
  );
}
