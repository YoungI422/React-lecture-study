export default function App() {
  // 기본 자료형
  const primitiveString = "Hello, World!";
  const primitiveNumber = 42;
  const primitiveBoolean = false;
  const primitiveUndefined = undefined;
  const primitiveNull = null;
  const primitiveSymbol = Symbol("mySymbol");
  const primitiveBigInt = 9007199254740991n;

  return (
    <>
      <h2>기본 자료형 출력</h2>
      <p>문자열: {}</p>
      <p>숫자: {}</p>
      <p>논리형: {}</p>
      <p>undefined: {}</p>
      <p>null: {} </p>
      <p>symbol: {}</p>
      <p>BigInt: {}</p>
    </>
  );
}
