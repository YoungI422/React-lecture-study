import StatusMessage from "./StatusMessage";

export default function App() {
  const status = "loading";
  return (
    <>
      <StatusMessage status={status} />
    </>
  );
}
