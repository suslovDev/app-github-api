import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    removeToken(state) {
      state.token = null;
    },
    setIsAuth(state) {
      state.isAuth = true;
    },
    removeIsAuth(state) {
      state.isAuth = false;
    },
    logOut(state) {
      state.isAuth = false;
      state.token = null;
    },
  },
});

export const { setToken, removeToken, setIsAuth, removeIsAuth, logOut } =
  authSlice.actions;

export default authSlice.reducer;
