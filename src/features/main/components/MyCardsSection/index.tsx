export default function MyCardsSection() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold space-y-4">My Cards</h1>
      <div className="w-max  primery-gradient text-(--primery-text) space-y-6 rounded-2xl p-8">
        <div className="justify-between flex items-center">
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
        <div className="flex-col mx-auto *:justify-between ">
          <table>
            <tr className="text-(--low-text-color)">
              <th className="pr-15 font-normal">CARD HOLDER</th>
              <td className="">VALID THRU</td>
            </tr>
            <tr>
              <th className="pr-15 font-normal">Eddy Cusuma</th>
              <td>12/22</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
