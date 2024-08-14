import { createStore } from "redux";
import rootReducer from "./reducers";
import { loadState, saveState } from "./utils/localStorage";

// Load the initial state from localStorage
const preloadedState = loadState();

// Create the Redux store
const store = createStore(rootReducer, preloadedState);

// Save the state to localStorage whenever it changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
