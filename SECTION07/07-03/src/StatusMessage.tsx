export default function StatusMessage({ status }: { status: string }) {
  /*if (status === "login") return <h1>로그인 중...</h1>;
  else if (status === "success") return <h1>성공!</h1>;
  else if (status === "error") return <h1>에러!</h1>;
  else return <h1>알 수 없는 상태</h1>;*/

  switch (status) {
    case "login":
      return <h1>로그인 중...</h1>;
    case "success":
      return <h1>성공!</h1>;
    case "error":
      return <h1>에러!</h1>;
    default:
      return <h1>알 수 없는 상태</h1>;
  }
}
