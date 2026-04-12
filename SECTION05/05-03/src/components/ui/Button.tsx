export default function Button() {
  const handleClick = () => alert("클릭 이벤트 발생");
  return (
    <>
      <button onClick={handleClick}>클릭</button>
    </>
  );
}
