export default function SecondCount({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>; //dispatch 형태 다름 강의랑
}) {
  return (
    <>
      <h1>SecondCount Component: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
    </>
  );
}
