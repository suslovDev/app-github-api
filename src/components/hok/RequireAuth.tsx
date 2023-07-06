import { ReactNode } from "react";
import { useSelector } from "react-redux";

import NotAuthorized from "../NotAuthorized/NotAuthorized";

const RequireAuth = ({ children }: { children: ReactNode }): JSX.Element => {
  const { isAuth } = useSelector((state: any) => state.auth);

  if (!isAuth) {
    return (
      <NotAuthorized text="Похоже, что вы не авторизованы! Нажмите `Войти`" />
    );
  }

  return <>{children}</>;
};

export default RequireAuth;
