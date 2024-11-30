import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Navigation.module.css";

function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.nav__link, isActive && styles.active);
  };
  return (
    <nav>
      <NavLink to="/daily" className={buildLinkClass}>
        Daily
      </NavLink>
      <NavLink to="/weekly" className={buildLinkClass}>
        Weekly
      </NavLink>
      <NavLink to="/monthly" className={buildLinkClass}>
        Monthly
      </NavLink>
    </nav>
  );
}

export default Navigation;
