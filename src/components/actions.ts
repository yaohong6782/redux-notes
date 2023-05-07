import { Action } from "redux";

export const increment = (): Action => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = (): Action => {
  return {
    type: "DECREMENT",
  };
};

export const reset = (): Action => {
  return {
    type: "RESET",
  };
};

interface SetUsernameAction extends Action {
  type: "SET_USERNAME";
  payload: string;
}

export const setUsername = (username: string): SetUsernameAction => {
  return {
    type: "SET_USERNAME",
    payload: username,
  };
};
