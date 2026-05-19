import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  // 컴포넌트가 화면에 나타날 때마다 실행되는 사이드 이펙트

  useEffect(() => {
    console.log("Count 컴포넌트가 화면에 나타났습니다.");
  }, []);
  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
