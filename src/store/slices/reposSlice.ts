import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRepos = createAsyncThunk(
  "auth/getRepos",
  async (searchStr: string) => {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        query: `query {
          search(query: "${searchStr}", type: REPOSITORY, first: 10) {
            edges {
              node {
                ... on Repository {
                  name
                  id
                  primaryLanguage {
                    name
                  }
                  viewerHasStarred
                  url
                }
              }
            }
          }
        }`,
      }),
    });
    const data = await response.json();
    return data.data.search.edges;
  }
);

export const getFavoriteRepos = createAsyncThunk(
  "auth/getFavoriteRepos",
  async () => {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        query: `{
          viewer {
            starredRepositories(first: 10) {
              edges {
                node {
                  name
                  id
                  primaryLanguage {
                    name
                  }
                  viewerHasStarred
                  url
                }
              }
            }
          }
        }`,
      }),
    });
    const data = await response.json();
    return data.data.viewer.starredRepositories.edges;
  }
);

export const addToFavorite = createAsyncThunk(
  "auth/addToFavorite",
  async (repoId: string) => {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        query: `mutation {
          addStar(input:{starrableId: "${repoId}"}) {
        starrable {
              stargazers {
                totalCount
              }
            }
          }
        }`,
      }),
    });
    const data = await response.json();
    return data.data.viewer.starredRepositories.edges;
  }
);

export const removeFromFavorite = createAsyncThunk(
  "auth/removeFromFavorite",
  async (repoId: string) => {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        query: `mutation {
          removeStar(input:{starrableId:"${repoId}"}) {
            starrable {
              id
            }
          }
        }`,
      }),
    });
    const data = await response.json();
    return data.data.viewer.starredRepositories.edges;
  }
);

const initialState = {
  found: [],
  favorites: [],
};

const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    clearFound(state) {
      state.found = [];
    },
  },
  extraReducers: {
    [getRepos.fulfilled as any]: (state, { payload }) => {
      state.found = payload.map((item: any) => ({
        id: item?.node?.id,
        url: item?.node?.url,
        name: item?.node?.name,
        primaryLanguage: item?.node?.primaryLanguage?.name,
        viewerHasStarred: item?.node?.viewerHasStarred,
      }));
    },
    [getFavoriteRepos.fulfilled as any]: (state, { payload }) => {
      state.favorites = payload.map((item: any) => ({
        id: item?.node?.id,
        url: item?.node?.url,
        name: item?.node?.name,
        primaryLanguage: item?.node?.primaryLanguage?.name,
        viewerHasStarred: item?.node?.viewerHasStarred,
      }));
    },
    [addToFavorite.fulfilled as any]: (state, { payload }) => {
      state.favorites = payload.map((item: any) => ({
        id: item?.node?.id,
        url: item?.node?.url,
        name: item?.node?.name,
        primaryLanguage: item?.node?.primaryLanguage?.name,
        viewerHasStarred: item?.node?.viewerHasStarred,
      }));
    },
    [removeFromFavorite.fulfilled as any]: (state) => {
      state.favorites = [];
    },
  },
});

export const { clearFound } = reposSlice.actions;

export default reposSlice.reducer;
