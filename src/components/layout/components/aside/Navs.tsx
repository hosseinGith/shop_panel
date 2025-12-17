import { Link, useLocation } from "react-router-dom";
import Use from "../../../ui/Use";

export default function Navs({
  title,
  iconId,
  href = "",
}: {
  title: string;
  iconId: string;
  href?: string;
}) {
  const location = useLocation();
  const active = location.pathname.split("/")[1] === href.replace("/", "");
  return (
    <Link
      to={href}
      className={`space-y-2  ${!active ? "hover:opacity-50" : ""} `}
    >
      <div className="cursor-pointer flex items-center justify-between py-1">
        <div
          className={`flex items-center gap-2 font-bold ${
            active ? "text-(--primery)" : "text-(--low-text-color)"
          }`}
        >
          <Use id={iconId} className="stroke-inherit size-4" />

          {title}
        </div>
      </div>
    </Link>
  );
}
