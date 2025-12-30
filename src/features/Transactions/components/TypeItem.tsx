export default function TypeItem({
  text,
  active,
}: {
  active?: boolean;
  text: string;
}) {
  return (
    <div
      className={`px-2 cursor-pointer ${
        active ? "text-(--secondary2) " : "text-(--low-text-color)"
      }`}
    >
      {text}
      <div
        className={`h-0.75 rounded-t-2xl ${active ? "bg-(--secondary2) " : ""}`}
      ></div>
    </div>
  );
}
