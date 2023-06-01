import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavoriteItem: (state, action) => {
      var isExist = state.items.find((item) => item.id === action.payload.id);

      // add product to item if does not exist
      if (!isExist)
        state.items.push({
          ...action.payload,
        });
    },
    removeFavoriteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addFavoriteItem, removeFavoriteItem } = favoriteSlice.actions;

export default favoriteSlice.reducer;
