import { useState } from "react";
import accordianData from "./accordianData";

function Accordian() {
  const [activeId, setActiveId] = useState(null);

  const accordians = accordianData.map((element) => {
    const style =
      activeId === element.id
        ? {
            border: "border-green-700 border-t-4",
            text: "text-green-700",
          }
        : { border: "", text: "" };
    return (
      <div
        key={element.id}
        onClick={() => {
          if (element.id === activeId) {
            setActiveId(null);
            return;
          }
          setActiveId(element.id);
        }}
        className={`${style.border} mb-8 rounded-md grid gap-y-4 gap-x-1 grid-cols-[minmax(0,_1fr)_minmax(0,_9fr)_minmax(0,_0.5fr)] justify-items-center items-center  bg-white px-4 py-4  shadow-md last:mb-0 `}
      >
        <span
          className={`${style.text} text-gray-400   text-xl font-medium  tracking-widest`}
        >
          {element.number}
        </span>
        <span
          className={`${style.text} text-gray-800 justify-self-start font-bold tracking-wide text-xl inline-block w-4/5`}
        >
          {element.faq}
        </span>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`${style.text} w-6 h-6 inline-block `}
          >
            <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        {activeId === element.id && (
          <>
            <p className=" col-start-2 text-lg ">{element.heading}</p>
            <ul className="col-start-2 list-disc list-outside justify-self-start  ">
              {element.summary.map((item, index) => {
                return (
                  <li key={index} className="text-gray-800 ">
                    {item}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    );
  });
  return (
    <div className="bg-slate-200 min-h-screen w-screen flex items-center justify-center ">
      <div className="w-4/5 h-4/5 bg-slate-100 flex flex-col my-4 ">
        {accordians}
      </div>
    </div>
  );
}

export default Accordian;
