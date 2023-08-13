import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import useCartContext from "./contexts/useCartContext";

function App() {
  const { isCartShown } = useCartContext();

  return (
    <>
      {isCartShown && <Cart />}

      <Header />

      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
