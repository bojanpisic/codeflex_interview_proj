import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <main className={styles["main"]}>
      <Header />
      <Sidebar />
      <div className={styles["content"]}>
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
