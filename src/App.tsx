import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useAuthorize from "./components/hooks/useAuthorize";
import Routing from "./pages";
import { getViewer } from "./store/slices/authSlice";

const App = (): JSX.Element => {
  const dispatch: any = useDispatch();
  useAuthorize();

  const { isAuth } = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(getViewer());
  }, [isAuth, dispatch]);

  return <Routing />;
};

export default App;
