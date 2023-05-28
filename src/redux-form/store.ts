import { configureStore, Action, combineReducers } from "@reduxjs/toolkit";

const initialUsername = {
  username: "",
};

function reducerUsername(state = initialUsername, action: any) {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
      };
    case "RESET":
      return initialUsername;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  username: reducerUsername,
});

const store = configureStore({
  reducer: rootReducer,
});


export default store;