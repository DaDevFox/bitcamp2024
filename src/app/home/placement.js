import styles from "../page.module.css";

export default function Placement(props) {
  return (
    <div className={styles.placement_container}>
      <div className={styles.leaderboard_item}>
        <p className={styles.placement_text}>{props.buildingname}Ellicott</p>
      </div>
    </div>
  );
}
