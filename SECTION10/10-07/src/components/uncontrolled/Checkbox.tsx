import { useRef } from "react";

export default function Checkbox() {
  const privacyRef = useRef<HTMLInputElement>(null);
  const termRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const privacy = privacyRef.current?.checked;
    if (!privacy) {
      alert("개인정보에 동의해주세요.");
    }
    const term = termRef.current?.checked;
    if (!term) {
      alert("약관에 동의해주세요.");
    }
    console.log(privacyRef.current?.checked);
    console.log(termRef.current?.checked);
  };

  const fruitsRef = useRef<HTMLInputElement[]>([]);

  const selectedFruits = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedFruits = fruitsRef.current
      .filter((fruit) => fruit.checked)
      .map((fruit) => fruit.value);
  };
  console.log(selectedFruits);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="checkbox" ref={privacyRef} />
          <label>개인정보동의</label>
        </div>
        <div>
          <input type="checkbox" ref={termRef} />
          <label>약관 동의</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"사과"}
            ref={(el) => {
              fruitsRef.current[0] = el!;
            }}
          />
          <label>사과</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"바나나"}
            ref={(el) => {
              fruitsRef.current[1] = el!;
            }}
          />
          <label>바나나</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"오렌지"}
            ref={(el) => {
              fruitsRef.current[2] = el!;
            }}
          />
          <label>오렌지</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
