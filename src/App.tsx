import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./components/hooks/hooks";
import useAuthorize from "./components/hooks/useAuthorize";
import { getViewer } from "./store/slices/authSlice";
import Routing from "./pages";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);
  useAuthorize();

  useEffect(() => {
    dispatch(getViewer());
  }, [isAuth, dispatch]);

  return <Routing />;
};

export default App;
