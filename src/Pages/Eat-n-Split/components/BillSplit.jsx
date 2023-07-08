import { useState } from "react";

function BillSplit({ id, friendName, onSubmitBill, onSplitBill }) {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [billPayer, setBillPayer] = useState(0);

  // console.log(billValue, yourExpense, billPayer);
  const billSplitHandler = () => {
    let billSplitData;
    if (billPayer === 0) {
      billSplitData = { id: id, expense: billValue - yourExpense };
    } else {
      billSplitData = { id: id, expense: yourExpense * -1 };
    }
    onSplitBill(billSplitData);
    onSubmitBill(null);
  };
  const formValidation = () => {
    if (billValue && yourExpense && yourExpense < billValue)
      return false;
    else return true;
  };
  return (
    <div className="bg-[#fff4e6] mt-6 px-10 py-6 rounded-md">
      <h2 className="font-bold text-lg uppercase mb-6">
        Split a bill with {friendName}
      </h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Input for Total Bill Value to Split: */}
        <div className="flex justify-between items-center">
          <label htmlFor="bill-value" className="font-medium">
            💰 Bill Value
          </label>
          <input
            type="text"
            id="bill-value"
            className="w-28 h-8 rounded-md px-4 py-2"
            value={billValue}
            onChange={(e) => setBillValue(Number(e.target.value))}
          ></input>
        </div>
        {/* Input for My Expense out of total Bill: */}
        <div className="flex justify-between items-center">
          <label htmlFor="your-expense" className="font-medium">
            👨 Your Expense
          </label>
          <input
            type="text"
            id="bill-value"
            className="w-28 h-8 rounded-md px-4 py-2"
            value={yourExpense}
            onChange={(e) => setYourExpense(Number(e.target.value))}
          ></input>
        </div>
        {/* Friend's Expense */}
        <div className="flex justify-between items-center">
          <label htmlFor="your-expense" className="font-medium">
            👨 {friendName}'s Expense
          </label>
          <input
            type="text"
            id="bill-value"
            className="w-28 h-8 rounded-md px-4 py-2"
            disabled={true}
            placeholder={billValue - yourExpense}
          ></input>
        </div>
        {/* Who paid the Bill? :*/}
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="bill-paid-by" className="font-medium">
            🤑 Who is paying the bill?
          </label>
          <select
            value={billPayer}
            className="w-28 h-8 rounded-md px-4"
            onChange={(e) => setBillPayer(Number(e.target.value))}
          >
            <option value="0">You</option>
            <option value={id}>{friendName}</option>
          </select>
        </div>
        {/* Button - Split Bill */}
        <button
          onClick={billSplitHandler}
          disabled={formValidation()}
          className="bg-[#ffa94d] text-gray-900 font-bold  py-2 px-4 rounded-lg disabled:opacity-75 disabled:cursor-not-allowed"
        >
          Split Bill
        </button>
      </form>
    </div>
  );
}

export default BillSplit;
