import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavsLi({ to, text }: { to: string; text: string }) {
  const [activeState, setActiveState] = useState<boolean>(false);
  return (
    <li className="pt-1">
      <NavLink
        to={to}
        className={({ isActive }) => {
          setActiveState(isActive);
          return `pl-4 py-2 block transition relative hover:bg-(--background2) ${
            isActive ? "bg-(--background2)" : ""
          }`;
        }}
      >
        <div
          className={`bg-(--primery) rounded-l-2xl  absolute h-full w-1 top-0 left-0 transition ${
            !activeState ? "opacity-0" : ""
          }`}
        ></div>
        {text}
      </NavLink>
    </li>
  );
}
