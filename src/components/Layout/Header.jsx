import CartButton from "../Cart/CartButton";
import HeadImage from "./HeadImage";

function Header() {
  return (
    <>
      <header className="drop-shadow-[0 2px 8px rgba(0, 0, 0, 0.25)] fixed left-0 top-0 z-10 flex h-[6rem] w-[100%] flex-col items-center justify-between bg-[#8a2b06]  px-[10%] py-0 text-white sm:h-20 sm:flex-row ">
        <h1 className="text-3xl font-bold">ReactMeals</h1>
        <CartButton />
      </header>

      <HeadImage />
    </>
  );
}

export default Header;
