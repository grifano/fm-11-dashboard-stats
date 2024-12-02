import styles from "./Dashboard.module.css";
import Aside from "../Aside/Aside";
import CardsList from "../CardsList/CardsList";
import { useParams } from "react-router-dom";

function Dashboard() {
  const { dashobardName } = useParams();
  const finalDashboardName = dashobardName || "daily";

  return (
    <div className={styles.dashboard}>
      <Aside />
      <CardsList forData={finalDashboardName} />
    </div>
  );
}

export default Dashboard;
