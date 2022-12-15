import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <div className="h-screen bg-gray-200 dark:bg-gray-900">
        <Header />
        <main>
          <MealsSummary />
          <Meals />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
