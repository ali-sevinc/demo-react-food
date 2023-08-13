import { formatCurreny } from "../../helpers/formatCurrency";
import MealItemForm from "./MealItemForm";

function MealItem({ meal }) {
  const { name, description, price } = meal;
  return (
    <li className="m-4 flex justify-between border-b border-[#ccc] pb-4">
      <div>
        <h3 className="mb-1 text-2xl">{name}</h3>
        <div className="italic">{description}</div>
        <div className="mt-1 text-xl font-bold text-[#ad5502] ">
          {formatCurreny(price)}
        </div>
      </div>
      <div>
        <MealItemForm meal={meal} />
      </div>
    </li>
  );
}

export default MealItem;
