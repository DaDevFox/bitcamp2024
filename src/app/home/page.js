import styles from "../page.module.css";

import Podium from "./podium";

export default function Home(props) {
  return (
    <main className={styles.main}>
      <Podium title1="Easton" title2="Denton" title3="Elicott" />
    </main>
  );
}
