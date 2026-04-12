import { useState } from "react";

export default function App() {
  const [state, setState] = useState<number>(0); //useState를 활용하여 상태 데이터를 하나 정의함
  const handleSetToTen = () => {
    //state = 10; //상태 데이터는 직접적으로 수정할 수 없으므로 setState 함수를 이용하여 상태 데이터를 업데이트해야 함
    setState(10); // 그럼 얘도 함수 정의를 한건가?
  };
  return (
    <>
      <h1>현재 카운트: {state}</h1>
      <button onClick={handleSetToTen}> set To 10</button>
    </>
  );
}
