import useCartContext from "../../contexts/useCartContext";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import { formatCurreny } from "../../helpers/formatCurrency";

function Cart() {
  const { handleCloseCart, cart, totalAmount } = useCartContext();

  const showOrderButton = cart.length !== 0;
  return (
    <Modal>
      <ul className="m-0 max-h-80 list-none overflow-auto p-0">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      {showOrderButton && (
        <div className="mx-0 my-4 flex items-center justify-between text-2xl font-bold">
          <span>Total Amount</span>{" "}
          <span>{formatCurreny(Number(totalAmount))}</span>
        </div>
      )}
      {!showOrderButton && (
        <p className="text-center text-xl">There is no item in your cart</p>
      )}

      <div className="text-right">
        <Button style="alt" onClick={handleCloseCart}>
          Cancel
        </Button>
        {showOrderButton && <Button style="basic">Order</Button>}
      </div>
    </Modal>
  );
}

export default Cart;
