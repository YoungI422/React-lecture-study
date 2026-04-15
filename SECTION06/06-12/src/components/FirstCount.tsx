export default function FirstCount({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>; //dispatch 형태 다름 강의랑
}) {
  return (
    <>
      <h1>FirstCount Component: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
    </>
  );
}
