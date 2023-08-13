import { useEffect, useState } from "react";
import useCartContext from "../../contexts/useCartContext";
import CartIcon from "./CartIcon";
function CartButton() {
  const [isBumped, setIsBumped] = useState(false);
  const { handleShowCart, cart } = useCartContext();

  const totalItemNumber = cart.reduce((cur, item) => cur + item.amount, 0);

  useEffect(
    function () {
      if (totalItemNumber === 0) return;
      setIsBumped(true);
      const timer = setTimeout(() => {
        setIsBumped(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    },
    [totalItemNumber],
  );

  return (
    <button
      onClick={handleShowCart}
      className={`${
        isBumped ? "animate-bump" : ""
      } group flex cursor-pointer items-center justify-around rounded-3xl bg-[#4d1601] px-12 py-3 font-bold  text-white duration-300 hover:bg-[#2c0d00] active:bg-[#2c0d00] `}
    >
      <span className="mr-2 h-[1.35rem] w-[1.35rem] ">
        <CartIcon />
      </span>
      <p>Your Cart</p>
      <span className="ml-4 rounded-3xl bg-[#b94517] px-4 py-1 font-bold duration-300 group-hover:bg-[#92320c] group-active:bg-[#92320c] ">
        {totalItemNumber}
      </span>
    </button>
  );
}

export default CartButton;
