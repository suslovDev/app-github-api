import { Link, useMatch } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = (): JSX.Element => {
  const matchFavorites = useMatch(`/favorites`);
  const matchAuthorization = useMatch(`/authorization`);
  const matchHome = useMatch(`/`);

  return (
    <nav className={styles.navbar}>
      <Link to={"/favorites"} className={matchFavorites ? styles.active : ""}>
        Избранное
      </Link>
      <Link
        to={"/authorization"}
        className={matchAuthorization ? styles.active : ""}
      >
        Авторизация
      </Link>
      <Link to={"/"} className={matchHome ? styles.active : ""}>
        Домой
      </Link>
    </nav>
  );
};

export default Navbar;

//Вынести компонеты итемы
