import { configureStore, Action, combineReducers } from "@reduxjs/toolkit";

interface AppState {
  counter: number;
}

const initialState: AppState = {
  counter: 0,
};

const initialUsername = {
  username: "",
};
interface AppAction extends Action {
  payload: string;
  type: string;
}

function reducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function reducerUsername(state = initialUsername, action: AppAction) {
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
  count: reducer,
  username: reducerUsername,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
