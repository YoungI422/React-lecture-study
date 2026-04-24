import { twMerge } from "tailwind-merge";
export default function App() {
  const isRed = true;
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <button className="button">Click Me</button>
        <button
          className={twMerge("btns", isRed && "bg-red-500 hover:bg-red-600")}
        >
          Click Me
        </button>
      </div>
    </>
  );
}
