import React, { useCallback, useRef, useState } from "react";
import Input from "../UI/Input";

export default function MealItemForm(props) {
  /* --------------------------------- States --------------------------------- */
  const [amountIsValid, setAmountIsValid] = useState(true);
  /* ---------------------------------- Refs ---------------------------------- */
  const amountInputRef = useRef();
  /* -------------------------------- Callbacks ------------------------------- */
  const onSubmitHandler = useCallback((event) => {
    event.preventDefault();
    const entredAmount = amountInputRef.current.value;
    const entredAmountNumber = +entredAmount;
    if (
      entredAmount.trim().length === 0 ||
      entredAmountNumber < 1 ||
      entredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(entredAmountNumber);
    setAmountIsValid(true);
  }, []);

  return (
    <form className="flex flex-col gap-1" onSubmit={onSubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amout"
        inputProps={{
          id: `amount-${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className=" rounded-3xl bg-amber-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-amber-700 dark:bg-amber-800 dark:hover:bg-amber-700 dark:focus:ring-gray-700">
        Add
      </button>
      {!amountIsValid && <p>Please entre a valid amount (1-5).</p>}
    </form>
  );
}
