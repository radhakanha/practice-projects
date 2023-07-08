import { useState } from "react";
import Form from "./Form";
function AddFriend({ onAddFriend }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex justify-end px-4">
      <button
        className={`${
          showForm ? "hidden" : ""
        } bg-[#ff922b] text-gray-900 font-bold py-2 px-4 rounded-md `}
        onClick={() => setShowForm(true)}
      >
        Add Friend
      </button>
      {showForm && (
        <Form onClose={setShowForm} onAdd={onAddFriend}></Form>
      )}
    </div>
  );
}

export default AddFriend;
