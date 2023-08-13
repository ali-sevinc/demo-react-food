function Button({ style, children, onClick }) {
  const buttonStyles = {
    basic:
      "ml-4 rounded-3xl border border-[#8a2b06] bg-[#8a2b06] px-8 py-2 text-white duration-300 hover:border-[#5a1a01] hover:bg-[#5a1a01]  active:border-[#5a1a01] active:bg-[#5a1a01] active:text-[#5a1a01] ",
    alt: "ml-4 rounded-3xl border border-[#8a2b06] bg-transparent px-8 py-2 text-[#8a2b06] duration-300 hover:border-[#5a1a01] hover:bg-[#5a1a01]  hover:text-white active:border-[#5a1a01] active:bg-[#5a1a01] active:text-[#5a1a01] ",
  };

  return (
    <button onClick={onClick} className={buttonStyles[style]}>
      {children}
    </button>
  );
}

export default Button;
