import Button from "./Button";
import { useState } from "react";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const friendExpense = billValue ? billValue - yourExpense : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!billValue || !yourExpense) return;
    onSplitBill(whoIsPaying === "user" ? friendExpense : yourExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>Bill value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      ></input>

      <label>Your expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > billValue
              ? yourExpense
              : Number(e.target.value)
          )
        }
      ></input>

      {/* friend's expense */}
      <label>{selectedFriend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled></input>

      <label>Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
