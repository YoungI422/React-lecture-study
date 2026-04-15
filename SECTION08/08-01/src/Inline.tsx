export default function Inline({
  paragraphStyle,
}: {
  paragraphStyle: React.CSSProperties;
}) {
  return (
    <>
      <h1>inline Component</h1>
      <p style={paragraphStyle}>This is a paragraph.</p>
    </>
  );
}
