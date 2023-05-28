import React, { useReducer } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fieldChange } from "./action";

const ReduxForm = () => {
  const reduxDispatch = useDispatch();
//   const fields = useSelector((state: any) => state.fields);

  const initialState = { 
    name : "",
    phoneNumber: "",
  }

  function formReducer(state : any, action : any) {
    switch (action.type) {
      case "FIELD_CHANGE":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "RESET_FORM":
        return initialState;
      default:
        return state;
    }
  }

  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = event.target;
    // dispatch(fieldChange(name, value));

    const { name, value } = event.target;
    dispatch({ type: "FIELD_CHANGE", payload: { name, value } });
  };

  const formSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic
    Object.entries(formState).forEach(([field, value]: any) => {
        reduxDispatch(fieldChange(field, value));
    });
  };

  return (
    <Form onSubmit={formSubmission}>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          value={formState.username}
          onChange={handleFieldChange}
        />

        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone number"
          name="phoneNumber"
          value={formState.phoneNumber}
          onChange={handleFieldChange}
        />
      </Form.Group>

      {/* Add more input fields here as needed */}

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ReduxForm;
