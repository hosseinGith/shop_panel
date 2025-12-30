import Mycard from "../main/components/Mycard";
import AmmountsSect from "./AmmountsSect";
import DebitCreditOverview from "./DebitCreditOverview";
import LastTransaction from "./LastTransaction";

export default function Accounts() {
  return (
    <div className="space-y-8">
      <AmmountsSect />
      <div className="flex justify-between gap-8">
        <LastTransaction />
        <div className="flex justify-between flex-col gap-4">
          <h1 className="title">My card</h1>
          <Mycard bgCalass="primery-gradient-2" card="5892 **** **** 1011" />
        </div>
      </div>
      <div className="flex justify-between gap-8">
        <DebitCreditOverview />
      </div>
    </div>
  );
}
