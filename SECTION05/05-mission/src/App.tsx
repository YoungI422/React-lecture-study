import Button from "./Button";

export default function App() {
  const handler = (message: string) => {
    alert(message);
  };
  return (
    <>
      <Button message="Click me!" handler={handler}>
        ボタン
      </Button>
    </>
  );
}
