import React from "react";
import { useDispatch, useSelector } from "react-redux";

const RetrieveForm = () => {
  const username = useSelector((state: any) => state.username.username);

  return <div>{username}</div>;
};

export default RetrieveForm;
