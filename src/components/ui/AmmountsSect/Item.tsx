import { motion } from "motion/react";
import type { ReactNode } from "react";

export default function Item({
  children,
  type,
  amount,
  bgColor,
}: {
  type: string;
  bgColor: string;
  children: ReactNode;
  amount: number | string;
}) {
  return (
    <motion.div
      transition={{ delay: 0.2 }}
      initial={{ translateY: "-100%", scale: 0.45 }}
      animate={{ translateY: 0, scale: 1 }}
      className="flex gap-4 bg-(--background2) w-full justify-center shadow items-center  py-8 rounded-2xl"
    >
      <div className="flex gap-4">
        <div
          style={{ backgroundColor: bgColor }}
          className=" rounded-full  w-13.75 h-13.75 grid justify-center items-center"
        >
          <div>{children}</div>
        </div>
        <div>
          <p className="text-(--low-text-color)">{type}</p>
          <p className="text-xl font-bold">
            {typeof amount === "number" && "$" + amount.toLocaleString()}
            {typeof amount === "string" && amount}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
