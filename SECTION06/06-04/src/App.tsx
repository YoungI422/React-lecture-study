import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    /* setCount(count + 1) // count + 1이 0 + 1로 계산되어 1이 됨;
    setCount(count + 1) ; // count + 1이 0 + 1로 계산되어 1이 됨;
    setCount(count + 1); */ // count + 1이 0 + 1로 계산되어 1이 됨;

    setCount((count) => count + 1); // count + 1이 0 + 1로 계산되어 1이 됨;
    setCount((count) => count + 1); // count + 1이 1 + 1로 계산되어 2가 됨;
    setCount((count) => count + 1); // count + 1이 2 + 1로 계산되어 3이 됨;
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}
