import { useState } from "react";

export default function App() {
  const [name, setName] = useState("jack");
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState("male");

  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>gender: {gender}</p>
    </>
  );
}
