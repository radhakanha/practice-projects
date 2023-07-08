import BillSplit from "./BillSplit";

function Friend({
  friendData,
  selectedId,
  setSelectedId,
  onSplitBill,
}) {
  const { id, name, image, balance } = friendData;

  const createAmountText = (balance) => {
    if (balance === 0)
      return {
        text: `You and ${name} are even `,
        color: "text-grey-50",
      };

    if (balance > 0)
      return {
        text: `${name} owes you ${Math.abs(balance)} Rs.`,
        color: "text-[#32CD30]",
      };

    if (balance < 0)
      return {
        text: `You owe ${name} ${Math.abs(balance)} Rs.`,
        color: "text-rose-700",
      };
  };

  const balanceText = createAmountText(balance);
  return (
    <>
      <div
        className={`flex items-center gap-4  px-4 py-4 ${
          selectedId === id ? "bg-[#fff4e6] rounded-lg" : ""
        }  hover:bg-[#fff4e6] hover:rounded-lg `}
      >
        <img
          src={image}
          alt={name}
          className="w-12 rounded-full"
        ></img>
        <div className="w-64">
          <p className="text-black text-lg font-bold">{name}</p>
          {/* {console.log(`text-${balanceText.color}`)} */}
          <p className={`${balanceText.color} font-medium`}>
            {balanceText.text}
          </p>
        </div>
        <button
          className="bg-[#ff922b] text-gray-900 font-bold py-2 px-4 rounded-lg "
          onClick={() =>
            id === selectedId
              ? setSelectedId(null)
              : setSelectedId(id)
          }
        >
          {id === selectedId ? "Close" : "Select"}
        </button>
        <br></br>
      </div>
      {/* BillSplit with selected friend */}
      {id === selectedId && (
        <BillSplit
          id={id}
          friendName={name}
          onSubmitBill={setSelectedId}
          onSplitBill={onSplitBill}
        ></BillSplit>
      )}
    </>
  );
}

export default Friend;
