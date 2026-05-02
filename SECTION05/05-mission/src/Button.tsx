export default function Button({
  message,
  children,
  handler,
}: {
  message: string;
  children: React.ReactNode;
  handler: (message: string) => void;
}) {
  return (
    <>
      <button onClick={() => handler(message)}>{children}</button>
    </>
  );
}
