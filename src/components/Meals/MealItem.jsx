import React, { useCallback, useContext } from "react";
import CarteContext from "../../store/cart-context";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  /* -------------------------------- Contexts -------------------------------- */
  const cartCtx = useContext(CarteContext);
  /* -------------------------------- Callbacks ------------------------------- */
  const AddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };

  return (
    <li className="flex justify-between p-3">
      <div className="flex flex-col gap-1">
        <h3>{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="text-orange-600">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={AddToCartHandler} />
      </div>
    </li>
  );
}
