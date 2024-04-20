import styles from "../page.module.css";

import Podium from "./podium";

export default function Home(props) {
  return (
    <main className={styles.main}>
      <Podium />
    </main>
  );
}
