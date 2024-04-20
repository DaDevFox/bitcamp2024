import Link from "next/link";
import { GrAchievement } from "react-icons/gr";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <Link href="/">
        {" "}
        <GrAchievement className={styles.logo} />
      </Link>
      <Link href="/">
        <b>TerraPodium</b>
      </Link>
      <Link href="/" className={styles.login}>
        Log in
      </Link>
    </header>
  );
}
