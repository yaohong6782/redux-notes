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
