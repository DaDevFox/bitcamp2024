import styles from "../page.module.css";

import Podium from "./podium";

export default function Home(props) {
  var titles = ["Easton", "Denton", "Elicott", "Hello"];

  return (
    <main className={styles.main}>
      <Podium titles={titles} />
    </main>
  );
}
