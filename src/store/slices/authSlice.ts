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

export const getRepos = createAsyncThunk("auth/getRepos", async (searchStr: string) => {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({
      query: `query MyQuery {
        search(type: REPOSITORY, first: 10, query: "${searchStr}") {
          edges {
            node {
              ... on Repository {
                id
                name
              }
            }
          }
        }
      }`,
    }),
  });
  const data = await response.json();

  return data.data.search.edges;
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
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [getViewer.fulfilled as any]: (state, action) => {
      state.user = action.payload;
    },
    [getRepos.fulfilled as any]: (state, { payload }) => {
      state.repos = payload;
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
