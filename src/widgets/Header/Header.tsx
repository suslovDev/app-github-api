import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LoginButton } from "../../components/UI/LoginButton";
import { CLIENT_ID } from "../../const/clientId";
import { logOut } from "../../store/slices/authSlice";
import { Navbar } from "../Navdar";
import { UserLogo } from "../UserLogo";
import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  const { token, user } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginWhithGithub = () => {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" +
        CLIENT_ID +
        "&scope=public_repo"
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
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
      <> {user && <UserLogo {...user} />}</>
      <div className={styles.links}>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
