import { useState } from "react";
import Button from "../UI/Button";

function Form({ onClose, onAdd }) {
  const [friendName, setFriendName] = useState("");
  //   const [imageUrl, setImageUrl] = useState("");

  const addButtonHandler = () => {
    const randomId = Math.floor(Math.random() * 100000 + 1000);

    const generateImageURL = () => {
      return `https://i.pravatar.cc/48?u=${randomId}`;
    };
    const imageURL = generateImageURL();
    const newFriend = {
      id: randomId,
      name: friendName,
      image: imageURL,
      balance: 0,
    };
    onAdd(newFriend);
    setFriendName("");
    onClose();
  };
  return (
    <form
      className="bg-[#ffe8cc] w-full  p-4 rounded-lg mt-4"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Input Friend Name */}
      <div className="flex gap-4 items-center mb-6">
        <label htmlFor="friend-name" className="font-medium text-lg">
          👨🏾‍🤝‍👨🏼 Friend name
        </label>
        <input
          type="text"
          id="friend-name"
          value={friendName}
          className="border-2 border-[#ffa94d] h-10 rounded p-2"
          onChange={(e) => setFriendName(e.target.value)}
        ></input>
      </div>
      {/* AutoGenerate random Avatar URL */}
      {/* <div>
        <label htmlFor="avatar-url">Image URL</label>
        <input type="text" id="avatar-url" disabled>
          {imageURL}
        </input>
      </div> */}
      {/* Form Control Buttons */}
      <div className="flex justify-around  ">
        <button
          className="bg-[#ffa94d] text-gray-900 font-bold py-2 px-4 rounded-lg disabled:opacity-75 "
          onClick={addButtonHandler}
          disabled={friendName.trim() ? false : true}
        >
          Add
        </button>
        <button
          className="bg-[#ffa94d] text-gray-900 font-bold py-2 px-4 rounded-lg "
          onClick={() => onClose(false)}
        >
          Close
        </button>
        {/* <Button onClose={onClose}>Close</Button> */}
      </div>
    </form>
  );
}

export default Form;
