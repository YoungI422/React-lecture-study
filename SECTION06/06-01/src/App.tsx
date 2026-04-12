export default function App() {
  let name = "영희";
  let age = 20;
  const handleClick = () => {
    name = "철수";
    age = 30;
    console.log(name, age);
  };
  return (
    <>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <button onClick={handleClick}> change </button>
    </>
  );
}
