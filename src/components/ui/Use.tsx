export default function Use({
  className = "",
  id,
}: {
  className?: string;
  id: string;
}) {
  return (
    <svg className={className}>
      <use className="w-full h-full" href={id}></use>
    </svg>
  );
}
