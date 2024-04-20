import styles from "../page.module.css";
import Placement from "./placement";

export default function Leaderboard(props) {
  var buildings = [
    {
      name: "Easton",
      total_score: 100,
      people: 452,
      latest_event: {
        name: "MPR Study Session",
        score_contribution: 40,
      },
    },
    {
      name: "Denton",
      total_score: 80,
      people: 502,
      latest_event: {
        name: "Barbecue",
        score_contribution: 40,
      },
    },
  ];

  var buildings_element = buildings.map((obj, index) => {
    return <Placement key={index} />;
  });

  return <div className={styles.leaderboard}>{buildings_element}</div>;
}
