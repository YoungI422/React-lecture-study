import { useState } from "react";

export default function FirstCount() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>FirstCount Component: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
