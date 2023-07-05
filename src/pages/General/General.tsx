import { Outlet } from "react-router";

import styles from "./General.module.css";
import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";

const General = (): JSX.Element => {
  return (
    <div className={styles.general}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default General;
