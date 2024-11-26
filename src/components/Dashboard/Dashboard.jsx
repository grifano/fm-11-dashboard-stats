import styles from "./Dashboard.module.css";
import Aside from "../Aside/Aside";
import CardsList from "../CardsList/CardsList";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Aside />
      <CardsList />
    </div>
  );
}

export default Dashboard;
