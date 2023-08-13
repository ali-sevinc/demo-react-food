import headImage from "../../assets/meals.jpg";
function HeadImage() {
  return (
    <div className="z-0 h-[25rem] w-[100%] overflow-hidden ">
      <img
        src={headImage}
        alt="Meal"
        className="h-[100%] w-[110%] translate-x-[-1rem] translate-y-[-4rem] rotate-[-5deg] scale-110 object-cover"
      />
    </div>
  );
}

export default HeadImage;
