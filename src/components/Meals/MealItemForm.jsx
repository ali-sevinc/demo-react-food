import { useState } from "react";
import Input from "../UI/Input";
import useCartContext from "../../contexts/useCartContext";

function MealItemForm({ meal }) {
  const [amount, setAmount] = useState("1");
  const [isInputValid, setIsInputValid] = useState(true);
  const { addItem } = useCartContext();

  const { name, price, id } = meal;

  function submitHandler(e) {
    e.preventDefault();
    setIsInputValid(true);
    if (amount.trim().length === 0 || amount < 1 || amount > 5)
      return setIsInputValid(false);
    const item = {
      id,
      name,
      price,
      amount: Number(amount),
    };
    addItem(item);
  }
  function changeHandler(e) {
    setAmount(e.target.value);
  }

  return (
    <form onSubmit={submitHandler} className="text-right">
      <Input
        id={id}
        label="Amount"
        input={{
          min: 1,
          max: 5,
          type: "number",
          value: amount,
          onChange: changeHandler,
        }}
      />
      <button className="cursor-pointer rounded-3xl border border-[#8a2b06] bg-[#8a2b06] px-8 py-1 font-bold text-white duration-300 hover:border-[#641e03] hover:bg-[#641e03] ">
        +Add
      </button>
      {!isInputValid && (
        <p className="text-xs text-red-500">
          Please enter a valid number (1-5)
        </p>
      )}
    </form>
  );
}

export default MealItemForm;
