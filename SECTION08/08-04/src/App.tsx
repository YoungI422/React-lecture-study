import classNames from "classnames/bind";
import styles from "./App.module.css";
export default function App() {
  const isLoggedIn = true;
  const cx = classNames.bind(styles);
  return (
    <>
      <h1 className={styles.title}>Class Names</h1>
      <button className={`${styles.btn} ${styles["is-active"]}`}>버튼</button>
      <button className={cx("btn", "is-active")}>버튼</button>

      {/* 조건부로 클래스 이름을 적용할 때 */}

      <button
        className={`${styles.btn} ${isLoggedIn ? styles["is-active"] : ""}`}
      >
        버튼
      </button>
      <button className={cx("btn", { "is-active": isLoggedIn })}>버튼</button>
    </>
  );
}
