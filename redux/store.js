import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./slices/cart";
import favoriteSliceReducer from "./slices/favourites";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// configure the store

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  cart: cartSliceReducer,
  favorites: favoriteSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
