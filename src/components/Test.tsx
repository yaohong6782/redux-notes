import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface AppState {
  counter: { count: number };
  username: { username: string };
}
const Test = () => {
  const count = useSelector((state: AppState) => state.counter.count);
  const username = useSelector((state: AppState) => state.username.username);
  console.log("im from test.tsx count", count);
  console.log("from test.tsx", username);
  return <div>{"hi"}</div>;
};

export default Test;
