import { useState } from "react";

export default function Radio() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleSelectedOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          name="option"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleSelectedOptionChange}
        />
        옵션 1
      </label>
      <label>
        <input
          type="radio"
          name="option"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleSelectedOptionChange}
        />
        옵션 2
      </label>
      <label>
        <input
          type="radio"
          name="option"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleSelectedOptionChange}
        />
        옵션 3
      </label>
    </div>
  );
}
