import { configureStore } from "@reduxjs/toolkit";
import weaponReducer from "./features/data/weaponData"

export const store = configureStore({
  reducer: {
    weapons: weaponReducer
  },
});