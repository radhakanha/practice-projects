import { useState } from "react";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function AppEatAndSplit() {
  const [friendData, setFriendData] = useState(initialFriends);
  const addFriend = (friend) => {
    setFriendData((prev) => [...prev, friend]);
  };
  const updateBalanceById = (splitData) => {
    const updatedFriendData = friendData.map((friend) => {
      if (friend.id === splitData.id) {
        return {
          ...friend,
          balance: friend.balance + splitData.expense,
        };
      } else return friend;
    });
    // console.log(updatedFriendData);
    setFriendData(updatedFriendData);
  };
  return (
    <div className="flex flex-col mt-6 gap-4 items-center min-w-md">
      <FriendList
        friends={friendData}
        onSplitBill={updateBalanceById}
      ></FriendList>
      <AddFriend onAddFriend={addFriend}></AddFriend>
      {/* <BillSplit></BillSplit> */}
    </div>
  );
}

export default AppEatAndSplit;
