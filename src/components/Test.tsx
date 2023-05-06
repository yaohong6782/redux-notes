import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Test = () => {
  const count = useSelector((state: any) => state.count);
  console.log("im from test.tsx count", count);
  return <div>{count}</div>;
};

export default Test;
