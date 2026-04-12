export default function Button() {
  const handleClick = () => alert("click!");
  return (
    <>
      {/* <button onClick={() => alert("click")}>클릭</button> */}
      <button onClick={handleClick}>클릭2</button>
      <button onClick={() => handleClick()}>클릭3</button>
    </>
  );
}
