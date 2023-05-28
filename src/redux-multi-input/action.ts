import { Action } from "redux";

export interface FieldChangeAction extends Action {
  type: "FIELD_CHANGE";
  payload: {
    field: string;
    value: string;
  };
}

export const fieldChange = (field: string, value: string): FieldChangeAction => {
  return {
    type: "FIELD_CHANGE",
    payload: {
      field,
      value,
    },
  };
};
