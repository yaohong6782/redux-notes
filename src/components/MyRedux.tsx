import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, setUsername } from "./actions";

function MyRedux() {
  interface AppState {
    count: { counter: number };
  }
  interface AppUsernameState {
    username: { username: string };
  }

  const count = useSelector((state: AppState) => state.count.counter);
  const username = useSelector(
    (state: AppUsernameState) => state.username.username
  );
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const resetCount = () => {
    dispatch(reset());
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(event.target.value));
  };

  return (
    <div>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default MyRedux;
