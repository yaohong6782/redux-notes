import React from "react";
import { useDispatch, useSelector } from "react-redux";

const RetrieveMultiForm = () => {
  const fields = useSelector((state: any) => state.fields);

  // Console.log all form values
  //   console.log(fields);
  return (
    <div>
      <label>Username : {fields.username}</label>
      <br />
      <label>Phone number : {fields.phoneNumber}</label>
    </div>
  );
};

export default RetrieveMultiForm;
