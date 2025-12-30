import Pagination from "../main/components/Pagination";
import Table from "./components/Table";
import TypeItem from "./components/TypeItem";

export default function Transactions() {
  return (
    <div className="space-y-8">
      <h1 className="title">Recent Transactions</h1>
      <div className="flex gap-3">
        <TypeItem active text="All Transactions" />
        <TypeItem text="Income" />
        <TypeItem text="Expense" />
      </div>
      <div className="bg-(--background2) shadow whitespace-nowrap min-w-120 overflow-auto rounded-4xl">
        <Table />
      </div>
      <div className="flex justify-end">
        <div className="">
          <Pagination pagesLength={4} />
        </div>
      </div>
    </div>
  );
}
