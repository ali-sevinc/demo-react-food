import { useContext } from "react";
import CartContext from "./cart-context";

function useCartContext() {
  const context = useContext(CartContext);
  return context;
}

export default useCartContext;
