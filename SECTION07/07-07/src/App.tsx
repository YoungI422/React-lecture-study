export default function App() {
  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn && <h1>Welcome back!</h1>}
      {!isLoggedIn && <h1>Please log in.</h1>}
    </>
  );
}
