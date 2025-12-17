import { Link } from "react-router-dom";
import NavsParent from "./components/aside/NavsParent";

export default function Aside() {
  return (
    <div
      className="overflow-auto bg-(--background2) lg:block hidden shadow-[#ffffff11] shadow pb-7"
      dir="rtl"
    >
      <aside dir="ltr" className="pt-8 *:h-max ">
        <div className="px-9 flex itmes-center gap-4 flex-col">
          {/* logo */}
          <div className="flex justify-between w-full items-center mb-5">
            <Link to="" className=" h-max rounded-full p-2">
              <img src="/images/logo.png" width={100} alt="miradig" />
            </Link>
          </div>

          {/* navs */}
          <NavsParent />
        </div>
      </aside>
    </div>
  );
}
