import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  repos: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state: any, action: any) {
      state.repos.push(action.payload);
    },
  },
});

export const { addToFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
