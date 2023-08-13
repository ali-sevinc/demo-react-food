import Card from "../UI/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
function AvailableMeals() {
  if (DUMMY_MEALS.length === 0)
    return (
      <h2 className="mt-10 text-center text-2xl text-white">
        There is no available meal
      </h2>
    );
  return (
    <section className="animate-mealsAppear mx-auto my-8 w-[90%] max-w-[60%] ">
      <Card>
        <ul className="m-0 list-none p-0">
          {DUMMY_MEALS.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
