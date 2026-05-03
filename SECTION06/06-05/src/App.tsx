import { useState } from "react";
import HJ from "./Gk9dIwLW4AACU2y.jpg";
import JH from "./news-p.v1.20250317.c2aac8c6a7f24e36b315493bc15a6c2c_P1.jpg";

export default function App() {
  const [name, setName] = useState("한형준");
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState("female");
  const [pic, setPic] = useState(HJ);
  const setProfile = () => {
    setName("Jun Han");
    setAge(18);
    setGender("male");
    setPic(JH);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>
        <img src={pic} alt="Profile" style={{ width: "200px" }} />
      </p>

      <button onClick={setProfile}>Update Profile</button>
    </div>
  );
}
