import styles from "../page.module.css";

export default function FloatingButton(props) {
  return (
    <button onClick={props.onclick} className={styles.floating_button}>
      {props.children}
    </button>
  );
}
