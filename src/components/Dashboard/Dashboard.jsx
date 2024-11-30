import styles from "./Dashboard.module.css";
import Aside from "../Aside/Aside";
import CardsList from "../CardsList/CardsList";

function Dashboard({ dataset }) {
  return (
    <div className={styles.dashboard}>
      <Aside />
      <CardsList forData={dataset} />
    </div>
  );
}

export default Dashboard;
