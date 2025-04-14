import React, { useState, useReducer } from "react";

// useState Example
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>useState Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

// useReducer Example
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h3>useReducer Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
    </div>
  );
};
