export default function App() {
  const fruits = ["apple", "banana", "orange"];
  const item = [];
  /*for (let i = 0; i < fruits.length; i++) {
    item.push(<li>{fruits[i]}</li>);
  }*/ // 반복 렌더링을 사용할 때는 key라는 props를 꼭 넣어줘야 한다. key는 고유한 값이어야 한다. 보통은 배열의 index를 넣어준다.
  for (let i = 0; i < fruits.length; i++) {
    item.push(<li key={i}>{fruits[i]}</li>);
  }
  return (
    <>
      <p>Fruits Lists</p>
      {fruits}
      <ul>{item}</ul>
    </>
  );
}
