import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  return (
    <div className="h-screen bg-gray-200 dark:bg-gray-900">
      <Header />
      <main>
        <MealsSummary />
        <Meals />
      </main>
    </div>
  );
}

export default App;
