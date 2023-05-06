import { configureStore, Action } from "@reduxjs/toolkit";

interface AppState {
  count: number;
}

const initialState: AppState = {
  count: 0,
};

interface AppAction extends Action {
  type: string;
}

function reducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    case "RESET":
      return initialState
    default:
      return state;
  }
}

const store = configureStore({
  reducer: reducer,
});

export default store;
