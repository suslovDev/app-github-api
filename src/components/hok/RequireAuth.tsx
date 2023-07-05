import { ReactNode } from "react";
import { useSelector } from "react-redux";

const RequireAuth = ({ children }: { children: ReactNode }): JSX.Element => {
  const { isAuth } = useSelector((state: any) => state.auth);

  console.log(isAuth);

  if (!isAuth) {
    return (
      <>Вы не авторизованны! Нажмите `Войти в левом верхнем углу страницы`</>
    );
  }

  return <>{children}</>;
};

export default RequireAuth;
