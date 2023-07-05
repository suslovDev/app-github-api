import { useDispatch } from "react-redux";
import Routing from "./pages";
import { useEffect } from "react";
import { setIsAuth, setToken } from "./store/slices/authSlice";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

    if (codeParam) {
      const getAccessToken = async () => {
        await fetch("http://localhost:4000/getAccessToken?code=" + codeParam, {
          method: "GET",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.access_token) {
              dispatch(setToken(data.access_token));
              dispatch(setIsAuth());
            }
          });
      };
      getAccessToken();
    }
  }, []);
  return <Routing />;
};

export default App;
