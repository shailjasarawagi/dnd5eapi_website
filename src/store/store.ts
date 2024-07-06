import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SpellReducer from "./spell"; // Importing the spell reducer from the reducer directory

// Combining reducers if there were more than one slice
const rootReducer = combineReducers({
  spells: SpellReducer, // Assigning the SpellReducer to the 'spells' slice
});

// Function to setup the Redux store, allowing preloaded state
export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer, // Using the combined rootReducer
    preloadedState, // Optionally passing preloaded state
  });
}

// Type definitions for the RootState, AppStore, and AppDispatch
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
