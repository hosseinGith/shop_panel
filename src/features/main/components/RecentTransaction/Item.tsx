import type { ReactNode } from "react";

export default function Item({
  children,
  type,
  date,
  amount,
  bgColor,
  classNameDate = `text-(--low-text-color)`,
  isHaveAmmountColor = false,
}: {
  type: string;
  date: string;
  bgColor: string;
  children: ReactNode;
  amount: number;
  classNameDate?: string;
  isHaveAmmountColor?: boolean;
}) {
  return (
    <div className="flex justify-between items-center gap-4 py-2 ">
      <div className="flex gap-4">
        <div
          style={{ backgroundColor: bgColor }}
          className=" rounded-full  w-13.75 h-13.75 grid justify-center items-center"
        >
          <div>{children}</div>
        </div>
        <div>
          <p>{type}</p>
          <p className={classNameDate}>{date}</p>
        </div>
      </div>
      <p
        className={`${
          isHaveAmmountColor
            ? amount < 0
              ? "text-(--danger-text)"
              : "text-(--success-text)"
            : ""
        }`}
      >
        {isHaveAmmountColor && amount < 0 && "-"}$
        {Math.abs(amount).toLocaleString()}
      </p>
    </div>
  );
}
