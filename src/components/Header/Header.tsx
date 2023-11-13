import { useAuth } from "hooks/useAuth";
import styles from "./Header.module.scss";
import BreadCrumb from "components/BreadCrumb/BreadCrumb";

const Header = () => {
  const { logOut } = useAuth();

  return (
    <div className={styles["header"]}>
      <BreadCrumb />
      <button onClick={logOut}>log out</button>
    </div>
  );
};

export default Header;
