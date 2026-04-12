import { useReducer } from "react";

function reducer(count: number, action: { type: string }) {
  //타입 속성이 문자열인 객체?
  switch (action.type) {
    case "INCREMENT":
      return count + 1;
    case "DECREMENT":
      return count - 1;
    case "RESET":
      return 0;
    default:
      return count;
  }
}
export default function App() {
  const [count, countDispatch] = useReducer(reducer, 0); // 타입 지정이 까다롭기 때문에 자동 타입 추론
  return (
    <>
      <h1> Count: {count} </h1>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>초기화</button>
    </>
  );
}
