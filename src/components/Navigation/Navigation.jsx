import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Navigation.module.css";

function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.nav__link, isActive && styles.active);
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__linkList}>
        <li>
          <NavLink to="/daily" className={buildLinkClass}>
            Daily
          </NavLink>
        </li>
        <li>
          <NavLink to="/weekly" className={buildLinkClass}>
            Weekly
          </NavLink>
        </li>
        <li>
          <NavLink to="/monthly" className={buildLinkClass}>
            Monthly
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
