import { useState } from "react";

export default function App() {
  const [fruits, setFruits] = useState(["banana", "apple", "grape"]);
  const handleAddFruit = () => {
    // 배열요소를 참조해야 하기 때문에 함수로 만들어야 한다.
    // setFruits((fruits) => [...fruits, "orange"]); // 배열의 마지막에 요소 추가
    //setFruits((fruits) => ["mango", ...fruits]); // 배열의 처음에 요소 추가
    //setFruits((fruits) =>
    //  fruits.map((fruits) => (fruits === "banana" ? "strawberry" : fruits)),
    //); // 배열의 요소 변경 map 함수
    setFruits((fruits) => [...fruits.slice(0, 1), "mango", ...fruits.slice(1)]); // 배열의 요소 추가
  };
  return (
    <>
      <p> {fruits.join(", ")} </p>
      <button onClick={handleAddFruit}> Add Fruit </button>
    </>
  );
}
