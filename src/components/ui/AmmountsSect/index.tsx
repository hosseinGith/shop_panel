import type { ReactNode } from "react";
import Item from "./Item";

export default function AmmountsSect({
  contents,
}: {
  contents: {
    amount: number | string;
    svg: ReactNode;
    bgColor: string;
    type: string;
  }[];
}) {
  return (
    <div className="gap-4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] ">
      {contents.map((item, i) => {
        return (
          <Item key={i} {...item}>
            {item.svg}
          </Item>
        );
      })}
    </div>
  );
}
