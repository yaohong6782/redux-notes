import {Action} from "redux";

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