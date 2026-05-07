import { use, useState } from "react";

export default function UserInfoForm() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [gender, setGender] = useState("남성");
  const [skillsState, setSkillsState] = useState({
    JavaScript: false,
    React: false,
    "Node.js": false,
  });
  const [bio, setBio] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setemail(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillsState((skillsState) => ({
      ...skillsState,
      [e.target.value]: e.target.checked,
    }));
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  return (
    <div className="user-info">
      <h1 className="user-info__title">User Information</h1>
      <form className="user-info__form">
        <div className="form-group">
          <label className="form-group__label" htmlFor="name">
            이름:
          </label>
          <input
            className="form-group__input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => handleNameChange(e)}
          />
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="email">
            이메일:
          </label>
          <input
            className="form-group__input"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="form-group form-group--radio">
          <label className="form-group__label">성별:</label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="male"
              value="남성"
              checked={gender === "남성"}
              onChange={handleGenderChange}
            />
            남성
          </label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="female"
              value="여성"
              checked={gender === "여성"}
              onChange={handleGenderChange}
            />
            여성
          </label>
        </div>

        <div className="form-group form-group--checkbox">
          <label className="form-group__label">기술 관심:</label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="JavaScript"
              checked={skillsState.JavaScript}
              onChange={handleSkillsChange}
            />
            JavaScript
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="React"
              checked={skillsState.React}
              onChange={handleSkillsChange}
            />
            React
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="Node.js"
              checked={skillsState["Node.js"]}
              onChange={handleSkillsChange}
            />
            Node.js
          </label>
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="bio">
            자기소개:
          </label>
          <textarea
            className="form-group__textarea"
            id="bio"
            placeholder="자기소개를 작성해주세요"
          ></textarea>
        </div>

        <button className="user-info__submit" type="submit">
          제출
        </button>
      </form>

      <div className="preview">
        <h2 className="preview__title">실시간 입력값</h2>
        <p className="preview__item">이름: {name}</p>
        <p className="preview__item">이메일: {email}</p>
        <p className="preview__item">성별: {gender}</p>
        <p className="preview__item">기술 관심: {skillsState.join(", ")}</p>
        <p className="preview__item">자기소개: {bio}</p>
      </div>
    </div>
  );
}
