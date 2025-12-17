export function Precent({ pcs, precent }: { pcs: string; precent: number }) {
  return (
    <>
      <span className="text-2xl">{pcs}</span>
      <span
        className={` p-1 rounded ${
          precent > 0
            ? "text-(--success-text) bg-(--success)"
            : "text-(--danger-text) bg-(--danger)"
        }`}
      >
        {Math.abs(precent)}%
      </span>
    </>
  );
}
