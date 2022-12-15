import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";
export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const CartItemsNumber = cartCtx.items.reduce((prev, item) => {
    return prev + item.amount;
  }, 0);

  return (
    <button
      type="button"
      onClick={props.onClick}
      className="mr-3 flex items-center space-x-4 rounded-3xl bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
    >
      <FontAwesomeIcon icon={faCartShopping} />
      <div>Your Cart</div>
      <span className="mr-2 ml-3 rounded bg-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-900 dark:bg-gray-900 dark:text-gray-200">
        {CartItemsNumber}
      </span>
    </button>
  );
}
