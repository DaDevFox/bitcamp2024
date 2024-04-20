import styles from "../page.module.css";

export default function Placement(props) {
  return (
    <div className={styles.placement_container}>
      <div className={styles.leaderboard_item}>
        <p></p>
        <p className={styles.placement_building}>
          {props.buildingname}Ellicott
        </p>
        <p className={styles.placement_points}>{props.position}5</p>
      </div>
    </div>
  );
}
