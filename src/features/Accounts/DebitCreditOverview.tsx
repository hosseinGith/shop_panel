export default function DebitCreditOverview() {
  return (
    <div className="space-y-8 w-full">
      <h1 className="title">Debit & Credit Overview</h1>
      <div className="bg-(--background2) p-4">
        <div className="flex justify-between">
          <p className="text-(--low-text-color) *:mx-1 *:inline-block">
            <span className="font-bold text-gray-500">$7,560</span>
            Debited &<span className="font-bold text-gray-500">$5,420</span>
            Credited in this Week
          </p>
          <div className="flex *:flex *:items-center *:gap-2 gap-4">
            <div>
              <div className="w-4 h-4 rounded bg-[#1A16F3]"></div>
              Debit
            </div>
            <div>
              <div className="w-4 h-4 rounded bg-[#FCAA0B]"></div>
              Credit
            </div>
          </div>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}
