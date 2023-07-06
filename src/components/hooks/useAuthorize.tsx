import { useDispatch } from "react-redux";

import { setIsAuth, setToken } from "../../store/slices/authSlice";

const useAuthorize = () => {
  const dispatch = useDispatch();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const codeParam = urlParams.get("code");

  const savedToken = localStorage.getItem("accessToken");
  if (savedToken) {
    dispatch(setToken(savedToken));
    dispatch(setIsAuth());

    return;
  }

  if (codeParam) {
    const getTokenSetAuth = async () => {
      await fetch("http://localhost:4000/getAccessToken?code=" + codeParam, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem("accessToken", data.access_token);
            dispatch(setToken(data.access_token));
            dispatch(setIsAuth());
          }
        })
        .catch((e) => {
          throw new Error(e);
        });
    };
    getTokenSetAuth();
  }
};

export default useAuthorize;
