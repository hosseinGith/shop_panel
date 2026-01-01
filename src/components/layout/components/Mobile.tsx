import { useLocation } from "react-router-dom";
import Aside from "./Aside";
import { useRef } from "react";

export default function Mobile() {
  const location = useLocation();
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target === ref.current) window.location.hash = "";
      }}
      className={`transition bg-[#00000057] fixed left-0 z-50 top-0 w-full h-full lg:hidden ${
        location.hash !== "#menu-mobile"
          ? "pointer-events-none -translate-x-full opacity-0"
          : ""
      }`}
    >
      <div className="w-[90%] max-w-100 h-full">
        <Aside />
      </div>
    </div>
  );
}
