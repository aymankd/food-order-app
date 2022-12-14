import React from "react";

export default function MealCard(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="p-3">
      <div className="flex flex-col gap-1">
        <h3>{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="text-orange-600">{price}</div>
      </div>
      <div></div>
    </li>
  );
}
