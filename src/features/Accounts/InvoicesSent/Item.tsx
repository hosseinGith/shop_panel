import type { ReactNode } from "react";

export default function Item({
  children,
  type,
  date,
  amount,
  bgColor,
}: {
  type: string;
  date: string;
  bgColor: string;
  children: ReactNode;
  amount: number;
}) {
  return (
    <div className="flex justify-between items-center gap-4 ">
      <div className="flex gap-4 items-center">
        <div
          style={{ backgroundColor: bgColor }}
          className=" rounded-2xl  w-15 h-15 grid justify-center items-center *:size-7"
        >
          {children}
        </div>
        <div>
          <p className="text-(--low-text-color)">{type}</p>
          <p className="text-[#718EBF]">{date}</p>
        </div>
      </div>
      <p className={`text-[#718EBF]`}>${Math.abs(amount).toLocaleString()}</p>
    </div>
  );
}
