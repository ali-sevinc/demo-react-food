import { createContext, useReducer } from "react";

const initialStates = {
  isCartShown: false,
  cart: [],
  totalAmount: 0,
};

const CartContext = createContext(initialStates);

function reducerFn(state, action) {
  let existingItem;
  let updateCartItem;
  let updateTotalAmount;
  switch (action.type) {
    //SHOW CART MODAL
    case "cart/showCart":
      return {
        ...state,
        isCartShown: true,
      };

    //CLOSE CART MODAL
    case "cart/closeCart":
      return {
        ...state,
        isCartShown: false,
      };

    //ADD ITEM TO CART
    //INCREASE CART ITEM AMOUNT
    case "cart/addItem":
      existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        const updateExistingItemAmount = state.cart.map((item) =>
          item.id === existingItem.id
            ? { ...item, amount: item.amount + action.payload.amount }
            : item,
        );

        updateCartItem = [...updateExistingItemAmount];
        updateTotalAmount =
          state.totalAmount + action.payload.price * action.payload.amount;
      } else {
        updateCartItem = [...state.cart, action.payload];
        updateTotalAmount =
          state.totalAmount + action.payload.price * action.payload.amount;
      }
      return {
        ...state,
        cart: updateCartItem,
        totalAmount: updateTotalAmount,
      };

    //REMOVE ITEM FROM CART
    case "cart/deletItem":
      existingItem = state.cart.find((item) => item.id === action.payload);
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        totalAmount:
          state.totalAmount - existingItem.amount * existingItem.price,
      };

    //DECREASE CART ITEM AMOUNT
    case "cart/decreaseItem":
      existingItem = state.cart.find((item) => item.id === action.payload);
      if (existingItem.amount === 1) {
        updateCartItem = state.cart.filter(
          (item) => item.id !== action.payload,
        );
      } else {
        updateCartItem = state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount - 1 }
            : item,
        );
      }
      return {
        ...state,
        cart: updateCartItem,
        totalAmount: state.totalAmount - existingItem.price,
      };

    case "cart/clearCart":
      return {
        ...state,
        cart: [],
        totalAmount: 0,
      };

    default:
      throw new console.error("Unkown action");
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFn, initialStates);
  const { isCartShown, cart, totalAmount } = state;

  function handleCloseCart() {
    dispatch({ type: "cart/closeCart" });
  }
  function handleShowCart() {
    dispatch({ type: "cart/showCart" });
  }

  function handleAddItemToCart(item) {
    dispatch({ type: "cart/addItem", payload: item });
  }

  function handleDeleteItemFromCart(id) {
    dispatch({ type: "cart/deletItem", payload: id });
  }

  function handleDecreaseCartItem(id) {
    dispatch({ type: "cart/decreaseItem", payload: id });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalAmount,
        isCartShown,
        handleCloseCart,
        handleShowCart,
        addItem: handleAddItemToCart,
        deleteItem: handleDeleteItemFromCart,
        decreaseItem: handleDecreaseCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
export default CartContext;
