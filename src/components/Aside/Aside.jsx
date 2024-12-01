import Navigation from "../Navigation/Navigation";
import User from "../User/User";
import styles from "./Aside.module.css";

function Aside() {
  return (
    <div className={styles.aside}>
      <User name="Jeremy Robson" />
      <Navigation />
    </div>
  );
}

export default Aside;
