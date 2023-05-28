import { configureStore, Action, combineReducers } from "@reduxjs/toolkit";

const initialFields = {
  username: "",
  // Add more fields here as needed
};

function fieldReducer(state = initialFields, action: any) {
  switch (action.type) {
    case "FIELD_CHANGE":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "RESET":
      return initialFields;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  fields: fieldReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
