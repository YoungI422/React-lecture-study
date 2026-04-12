import { useState } from "react";

export default function FirstCount({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <h1>FirstCount Component: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
    </>
  );
}
