import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "./action";

const ReduxForm = () => {
  const dispatch = useDispatch();
  const [username1, setUsername1] = useState("");
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(setUsername(event.target.value));
    setUsername1(event.target.value);
  };

  const formSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const username = e.currentTarget.username.value;
    dispatch(setUsername(username1));
  };

  return (
    <Form onSubmit={formSubmission}>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleUsernameChange}
        />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ReduxForm;
