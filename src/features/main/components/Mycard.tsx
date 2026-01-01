export default function Mycard({
  card,
  bgCalass,
}: {
  card: string;
  bgCalass: string;
}) {
  return (
    <div
      className={`w-full *:px-8 shadow ${bgCalass} text-(--primery-text) pt-4 space-y-6 rounded-2xl `}
    >
      <div className=" justify-between flex items-center">
        <div>
          <p className="text-sm">Balance</p>
          <span className="text-xl">$5,756</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>
        </div>
      </div>
      <div className=" flex-col mx-auto *:justify-between ">
        <table>
          <tbody>
            <tr className="text-(--low-text-color)">
              <th className="pr-15 font-normal">CARD HOLDER</th>
              <td className="">VALID THRU</td>
            </tr>
            <tr>
              <th className="pr-15 font-normal">Eddy Cusuma</th>
              <td>12/22</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-linear-to-b flex justify-between  py-4 from-[#ffffff42] to-[#ffffff00]">
        <p className="text-lg">
          {card.split(" ").map((nums, i) => (
            <span key={i}>{nums} </span>
          ))}
        </p>
        <svg
          width="44"
          height="30"
          viewBox="0 0 44 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="15" fill="white" fillOpacity="0.5" />
          <circle cx="29" cy="15" r="15" fill="white" fillOpacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
