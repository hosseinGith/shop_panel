import { motion } from "motion/react";
import { Link } from "react-router-dom";

const transactions = [
  {
    description: "Spotify Subscription",
    transaction_ID: "#12548796",
    type: "Shopping",
    card: "1234 ****",
    date: "28 Jan, 12.30 AM",
    amount: 2500,
    receipt: "https://",
  },
  {
    description: "Freepik Sales",
    transaction_ID: "#12548796",
    type: "Transfer",
    card: "4321 ****",
    date: "25 Jan, 12.30 AM",
    amount: -150,
    receipt: "https://",
  },
  {
    description: "Freepik Sales",
    transaction_ID: "#12548796",
    type: "Transfer",
    card: "4321 ****",
    date: "25 Jan, 12.30 AM",
    amount: 250,
    receipt: "https://",
  },
];
export default function Table() {
  return (
    <table className="w-full ">
      <thead>
        <tr className="*:text-start *:p-4">
          <th>Description</th>
          <th>Transaction ID</th>
          <th>Type</th>
          <th>Card</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Receipt</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 divide-[#F2F4F7]">
        {transactions.map((tran, i) => (
          <motion.tr
            initial={{ translateY: "-100%" }}
            animate={{ translateY: 0 }}
            key={i}
            className="*:px-4 *:py-6"
          >
            <td>
              <div className="flex items-center gap-2">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  className={`${tran.amount < 0 ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="15"
                    cy="15"
                    r="14"
                    stroke="#718EBF"
                    strokeWidth="2"
                  />
                  <path
                    d="M15.5303 9.96967C15.2374 9.67678 14.7626 9.67678 14.4697 9.96967L9.6967 14.7426C9.40381 15.0355 9.40381 15.5104 9.6967 15.8033C9.98959 16.0962 10.4645 16.0962 10.7574 15.8033L15 11.5607L19.2426 15.8033C19.5355 16.0962 20.0104 16.0962 20.3033 15.8033C20.5962 15.5104 20.5962 15.0355 20.3033 14.7426L15.5303 9.96967ZM15.75 21L15.75 10.5L14.25 10.5L14.25 21L15.75 21Z"
                    fill="#718EBF"
                  />
                </svg>
                {tran.description}
              </div>
            </td>
            <td>{tran.transaction_ID}</td>
            <td>{tran.type}</td>
            <td>{tran.card}</td>
            <td>{tran.date}</td>
            <td
              className={`font-bold ${
                tran.amount < 0
                  ? "text-(--danger-text)"
                  : "text-(--success-text)"
              }`}
            >
              {tran.amount < 0 && "-"}${Math.abs(tran.amount).toLocaleString()}
            </td>
            <td>
              <Link
                to={tran.receipt}
                className="px-2 py-1 border-2 rounded-full hover:text-(--secondary2) transition"
              >
                Download
              </Link>
            </td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  );
}
