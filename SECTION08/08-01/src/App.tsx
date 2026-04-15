import Inline from "./Inline";

export default function App() {
  const paragraphStyle = {
    color: "red",
    fontSize: "18px",
  };
  const isLoggedIn = false;
  return (
    <>
      <h1 style={{ color: isLoggedIn ? "blue" : "green", fontSize: "24px" }}>
        Inline style
      </h1>
      <p style={paragraphStyle}>This is a paragraph.</p>
      <Inline paragraphStyle={paragraphStyle} />
    </>
  );
}
