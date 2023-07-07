import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getViewer = createAsyncThunk("auth/getViewer", async () => {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({
      query: `{
          viewer {
            login
            avatarUrl
          }
        }`,
    }),
  });
  const data = await response.json();

  return data.data.viewer;
});

const initialState: any = {
  token: null,
  isAuth: false,
  user: null,
  repos: [],
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
      state.user = null;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [getViewer.fulfilled as any]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  setToken,
  removeToken,
  setIsAuth,
  removeIsAuth,
  logOut,
  setUser,
} = authSlice.actions;

export default authSlice.reducer;
