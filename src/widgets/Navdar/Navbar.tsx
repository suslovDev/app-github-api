import { Link, useMatch } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = (): JSX.Element => {
  const { isAuth } = useSelector((state: any) => state.auth);

  const matchFavorites = useMatch(`/favorites`);
  const matchHome = useMatch(`/`);

  if (!isAuth) {
    return <></>;
  }

  return (
    <nav className={styles.navbar}>
      <Link to={"/favorites"} className={matchFavorites ? styles.active : ""}>
        Избранное
      </Link>
      <Link to={"/"} className={matchHome ? styles.active : ""}>
        Домой
      </Link>
    </nav>
  );
};

export default Navbar;

//Вынести компонеты итемы
