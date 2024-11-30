import Navigation from "../Navigation/Navigation";
import clsx from "clsx";
import styles from "./Aside.module.css";

function Aside() {
  return (
    <div className={styles.aside}>
      <Navigation />
    </div>
  );
}

export default Aside;
