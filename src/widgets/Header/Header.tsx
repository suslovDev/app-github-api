import { useDispatch, useSelector } from "react-redux";
import LoginButton from "../../components/UI/LoginButton/LoginButton";
import Navbar from "../Navdar/Navbar";
import styles from "./Header.module.css";
import { logOut } from "../../store/slices/authSlice";
import { CLIENT_ID } from "../../const/clientId";
import { useNavigate } from "react-router-dom";

const Header = (): JSX.Element => {
  const { token } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginWhithGithub = () => {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
    );
  };

  const handleLogout = () => {
    navigate("/");
    dispatch(logOut());
  };

  return (
    <div className={styles.header}>
      <div className={styles.auth}>
        {!token ? (
          <LoginButton onClick={handleLoginWhithGithub}>Войти</LoginButton>
        ) : (
          <LoginButton onClick={handleLogout}>Выйти</LoginButton>
        )}
      </div>
      <div className={styles.links}>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
