import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./actions";

function MyRedux() {
  interface AppState {
    count: number;
  }

  const count = useSelector((state: AppState) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const resetCount = () => {
    dispatch(reset());
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default MyRedux;
