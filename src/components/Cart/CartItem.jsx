import useCartContext from "../../contexts/useCartContext";
import { formatCurreny } from "../../helpers/formatCurrency";
import CartItemButton from "./CartItemButton";

function CartItem({ item }) {
  const { name, amount, price, id } = item;
  const { decreaseItem, deleteItem, addItem } = useCartContext();

  function handleIncreaseItem() {
    const item = {
      id,
      price,
      name,
      amount: 1,
    };
    addItem(item);
  }

  return (
    <li className="mx-0 my-4 flex items-center justify-between border-b-2 border-b-[#8a2b06] px-2 py-4">
      <div>
        <h2 className="m-0 mb-2 text-2xl text-[#363636]">{name}</h2>
        <div className="flex w-40 items-center justify-between">
          <span className="font-bold text-[#8a2b06]">
            {formatCurreny(price)}
          </span>
          <span className="rounded-md border border-[#ccc] px-3 py-1 font-bold text-[#363636] ">
            x {amount}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <CartItemButton onClick={() => decreaseItem(id)}>-</CartItemButton>
          <span className="ml-2 font-bold text-[#363636] ">x{amount}</span>
          <CartItemButton onClick={handleIncreaseItem}>+</CartItemButton>
        </div>

        <button
          onClick={() => deleteItem(id)}
          className=" ml-4 mt-2  rounded-full  bg-red-200 px-5 py-1 text-xs text-[#8a2b06] duration-300 hover:bg-[#8a2b06] hover:text-white "
        >
          Remove Item
        </button>
      </div>
    </li>
  );
}

export default CartItem;
