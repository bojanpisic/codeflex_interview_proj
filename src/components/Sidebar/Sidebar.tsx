import NavBar from "components/NavBar/NavBar";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles["sidebar"]}>
      <NavBar />
    </div>
  );
};

export default Sidebar;
