export default function App() {
  // 참조 자료형 예제
  const referenceArray = [1, 2, 3, 4];
  const referenceObject = { name: "John", age: 30 };
  const referenceFunction = () => "함수의 리턴 값";
  const referenceDate = new Date();
  const referenceRegExp = /react/i;
  const referenceMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
  ]);
  const referenceSet = new Set([1, 2, 3, 4]);

  return (
    <>
      <h2>참조 자료형 출력</h2>
    </>
  );
}
