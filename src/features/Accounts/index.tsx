import Mycard from "../main/components/Mycard";
import AmmountsSect from "./AmmountsSect";
import DebitCreditOverview from "./DebitCreditOverview";
import InvoicesSent from "./InvoicesSent";
import LastTransaction from "./LastTransaction";

export default function Accounts() {
  return (
    <div className="space-y-8">
      <AmmountsSect />
      <div className=" grid md:grid-cols-[0.7fr_0.3fr] gap-8 w-full">
        <LastTransaction />
        <div className="flex flex-col gap-4 min-w-full ">
          <h1 className="title">My card</h1>
          <Mycard bgCalass="primery-gradient-2" card="5892 **** **** 1011" />
        </div>
      </div>
      <div className="gap-8 grid md:grid-cols-[0.7fr_0.3fr]  overflow-hidden">
        <DebitCreditOverview />
        <InvoicesSent />
      </div>
    </div>
  );
}
