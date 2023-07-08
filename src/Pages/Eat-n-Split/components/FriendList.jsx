import { useState } from "react";
import Friend from "./Friend";

function FriendList({ friends, onSplitBill }) {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="flex flex-col justify-center max-w-md bg-white shadow-lg">
      {friends.map((friend) => {
        return (
          <Friend
            key={friend.id}
            friendData={friend}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            onSplitBill={onSplitBill}
          ></Friend>
        );
      })}
    </div>
  );
}

export default FriendList;
