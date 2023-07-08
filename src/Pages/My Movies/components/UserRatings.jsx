import { useState } from "react";
import Star from "./Star";

function UserRatings({ onAdd }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(null);
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex gap-2 items-center justify-center font-semibold text-xl">
        <div>
          {Array.from({ length: 10 }, (_, i) => (
            <Star
              key={i}
              onRating={() => setRating(i + 1)}
              onHover={() => setTempRating(i + 1)}
              onLeave={() => setTempRating(null)}
              filled={
                tempRating ? tempRating >= i + 1 : rating >= i + 1
              }
              // hoverFill={tempRating >= i + 1}
            ></Star>
          ))}
        </div>
        <span className="text-[#FEC20C]">
          {tempRating || rating || ""}
        </span>
      </div>
      {rating > 0 && (
        <button
          onClick={() => onAdd(rating)}
          className="w-1/2 tracking-wide bg-violet-500 px-4 py-2 rounded-full text-md font-semibold"
        >
          + Add to list
        </button>
      )}
    </div>
  );
}

export default UserRatings;
