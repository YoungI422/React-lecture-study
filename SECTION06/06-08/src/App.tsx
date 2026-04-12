import { useState } from "react";

export default function App() {
  /*const [name, setName] = useState("jack");
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState("male");*/
  const [userInfo, setUserInfo] = useState({
    name: "jack",
    age: 20,
    gender: "male",
  });

  const handleUpdateInfo = () => {
    setUserInfo((userInfo) => ({
      //userInfo.name = "rose", // 상태 변수를 직접 참조해서 변경하게되면 리렌더링이 발생하지 않음
      //name: "rose", // 이렇게 하면 name 속성만 남는 객체가 됨

      ...userInfo, // 기존 객체의 속성을 모두 복사해서 새로운 객체를 만듦 -> 현재 상태값을 참조하는 업데이트임!! 그래서 함수형 업데이트로 작성해야함
      name: "rose", // 복사한 객체에서 name 속성만 덮어쓰기
    }));
  };

  return (
    <>
      <p>name: {userInfo.name}</p>
      <p>age: {userInfo.age}</p>
      <p>gender: {userInfo.gender}</p>
      <button onClick={handleUpdateInfo}>Update Info</button>
    </>
  );
}
