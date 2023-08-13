function CartItemButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="m-1 ml-4 w-12 rounded-md border border-[#8a2b06] bg-transparent text-center text-xl font-bold text-[#8a2b06] duration-300 hover:bg-[#8a2b06] hover:text-white active:bg-[#8a2b06] active:text-white "
    >
      {children}
    </button>
  );
}

export default CartItemButton;
