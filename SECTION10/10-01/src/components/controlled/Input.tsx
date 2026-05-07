import { useState } from "react";
export default function Input() {
  // 각 input의 value관리
  const [input, setInput] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const [pw, setPw] = useState("");
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  // 한번에 여러 input의 value관리하기
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form>
        <h1>
          Input: {input} / Password: {pw}
        </h1>
        <input type="text" value={input} onChange={handleInputChange} />
        <input type="text" value={pw} onChange={handlePwChange} />
      </form>
      {/* 한번에 여러 input의 value관리하기 */}
      <form>
        <input
          type="text"
          value={form.email}
          name="email"
          onChange={handleFormChange}
        />
        <input
          type="text"
          value={form.password}
          name="password"
          onChange={handleFormChange}
        />
      </form>
    </>
  );
}
