import { useState, useMemo } from "react";

const fibonacci = (n) => {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoizedFib = () => {
  const [number, setNumber] = useState(1);
  const fibResult = useMemo(() => fibonacci(number), [number]);

  return (
    <div>
      <h2>Memoized Fibonacci</h2>
      <p>
        Fibonacci of {number} is {fibResult}
      </p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(0)}>Reset</button>
    </div>
  );
};

export default MemoizedFib;
