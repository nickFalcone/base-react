import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <hr />
      <h2>Counter</h2>
      <p>{counter}</p>
      <button onClick={ () => setCounter(counter + 1) }>+</button>
      <button onClick={() => setCounter(counter - 1) }>-</button>
      <button onClick={ () => setCounter(0) }>Reset</button>
      <hr />
    </div>
  );
};

export default Counter;
