import Navbar from "../Navdar/Navbar";
import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  const isAuth = true;
  return (
    <div className={styles.header}>
      <div className={styles.auth}>
        <button className={styles.btn}>{isAuth ? "Выйти" : "Войти"}</button>
      </div>
      <div className={styles.links}>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
