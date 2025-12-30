import { useSearchParams } from "react-router-dom";

export default function Pagination({ pagesLength }: { pagesLength: number }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "";
  return (
    <div className="flex gap-2 justify-between">
      <button
        onClick={() => {
          const targetPage = String(Number(page || 1) - 1);
          if (Number(targetPage) > 0) setSearchParams({ page: targetPage });
        }}
        className="flex cursor-pointer gap-2 items-center text-(--secondary2)"
      >
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.41418 12.7072L1.41418 6.70715L7.41418 0.707153"
            stroke="#1814F3"
            strokeWidth="2"
          />
        </svg>
        Previous
      </button>
      <div className="flex gap-2">
        {Array(pagesLength)
          .fill("")
          .map((_, i) => {
            const index = i + 1;
            return (
              <button
                key={i}
                onClick={() => {
                  setSearchParams({ page: String(index) });
                }}
                className={`px-4 py-2 transition text-(--secondary2) rounded-lg cursor-pointer ${
                  Number(page) == index || (!page && index === 1)
                    ? "bg-(--secondary2) text-(--secondary2-text)"
                    : "hover:bg-[#bbb] "
                }`}
              >
                {index}
              </button>
            );
          })}
      </div>
      <button
        onClick={() => {
          const targetPage = String(Number(page || 1) + 1);
          if (Number(targetPage) <= pagesLength)
            setSearchParams({ page: targetPage });
        }}
        className="flex gap-2 cursor-pointer items-center text-(--secondary2)"
      >
        Next
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.707031 12.7072L6.70703 6.70715L0.707031 0.707153"
            stroke="#1814F3"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  );
}
