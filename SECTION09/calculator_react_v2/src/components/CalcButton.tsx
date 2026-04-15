interface CalcButtonProps {
  className?: string;
  value: string;
  onClick: React.MouseEventHandler<HTMLInputElement>;
}
export default function CalcButton({
  className,
  value,
  onClick,
}: CalcButtonProps) {
  return (
    <>
      <input
        type="button"
        className={className}
        value={value}
        onClick={onClick}
      />
    </>
  );
}
