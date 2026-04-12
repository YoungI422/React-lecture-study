import { useState } from "react";

export default function App() {
  const [userInfo, setUserInfo] = useState({
    name: "jack",
    age: 20,
    gender: "male",
    contact: {
      email: "jack@example.com",
      phone: "123-456-7890",
    },
    address: {
      home: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001",
      },
      office: {
        street: "456 Business Ave",
        city: "New York",
        zipCode: "10002",
      },
    },
  });

  const handleUpdateUserInfo = () => {};

  return (
    <>
      <p>name: {userInfo.name}</p>
      <p>age: {userInfo.age}</p>
      <p>gender: {userInfo.gender}</p>
      <button onClick={handleUpdateUserInfo}>UpdateUserInfo</button>
    </>
  );
}
