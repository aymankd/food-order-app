import React from "react";
import { DUMMY_MEALS } from "./DummyMeals";
import MealItem from "./MealItem";
export default function Meals() {
  const MealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <div
      href="#"
      className="mx-auto my-12 block w-f90 max-w-screen-xl rounded-lg border border-gray-700 bg-gray-800 p-6 text-center shadow-md  dark:border-gray-200 dark:bg-white "
    >
      <h5 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-gray-900">
        List of Meals
      </h5>
      <ul className="list-none divide-y text-left ">{MealsList}</ul>
    </div>
  );
}
