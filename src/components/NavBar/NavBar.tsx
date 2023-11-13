import { NavLink } from "react-router-dom";
import { PATH_CONSTANTS } from "routes/pathConstants";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles["nav-bar"]}>
      <NavLink
        to={PATH_CONSTANTS.CATEGORIES}
        className={({ isActive }) =>
          `${styles["nav-link"]} ${isActive ? styles["nav-link--active"] : ""}`
        }
      >
        Categories
      </NavLink>
      <NavLink
        to={PATH_CONSTANTS.PRODUCTS}
        className={({ isActive }) =>
          `${styles["nav-link"]} ${isActive ? styles["nav-link--active"] : ""}`
        }
      >
        Products
      </NavLink>
      <NavLink
        to={PATH_CONSTANTS.USERS}
        className={({ isActive }) =>
          `${styles["nav-link"]} ${isActive ? styles["nav-link--active"] : ""}`
        }
      >
        Users
      </NavLink>
    </nav>
  );
};

export default NavBar;
