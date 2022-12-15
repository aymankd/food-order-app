import React from "react";

export default function CartItem(props) {
  return (
    <li className="flex flex-row justify-between p-2">
      <div>{props.name}</div>
      <div className="flex w-auto gap-2">
        <button className="flex-1 rounded-xl border-2 border-amber-800 bg-white px-5 text-center align-middle text-3xl font-bold text-amber-800 hover:bg-gray-100">
          -
        </button>
        <button className="flex-1 rounded-xl border-2 border-amber-800 bg-white px-5 text-center align-middle text-2xl font-bold text-amber-800 hover:bg-gray-100">
          +
        </button>
      </div>
    </li>
  );
}
