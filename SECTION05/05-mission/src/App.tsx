import Button from "./Button";

export default function App() {
  const handler = (message: string) => alert(message);

  return (
    <>
      <Button message="한형준" handler={handler}>
        JUN HAN
      </Button>
    </>
  );
}
