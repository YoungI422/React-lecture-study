export default function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <button className="button">Primary</button>
        <button className="bg-green-500 text-white py-3 py-5 rounded border-none cursor-pointer hover:bg-green-600 transition-colors">
          Secondary
        </button>
      </div>
    </>
  );
}
