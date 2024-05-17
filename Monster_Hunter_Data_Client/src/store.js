import { configureStore } from "@reduxjs/toolkit";
import weaponReducer from "./features/data/weaponData"
import itemReducer from "./features/data/itemData"
import armorReducer from "./features/data/armorData"

export const store = configureStore({
  reducer: {
    weapons: weaponReducer,
    items: itemReducer,
    armors: armorReducer
  },
});