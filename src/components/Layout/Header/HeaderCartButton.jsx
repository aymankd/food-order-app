import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function HeaderCartButton() {
  return (
    <button
      type="button"
      className="mr-3 flex items-center space-x-4 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
    >
      <FontAwesomeIcon icon={faCartShopping} />
      <div>Your Cart</div>
      <span class="mr-2 ml-3 rounded bg-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-900 dark:bg-gray-900 dark:text-gray-200">
        5.0
      </span>
    </button>
  );
}