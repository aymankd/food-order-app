import React from "react";

export default function CartItem(props) {
  return (
    <li className="flex flex-row items-center justify-between py-2">
      <div className="flex flex-1 flex-col gap-4">
        <div className="text-2xl font-bold text-gray-600">{props.name}</div>
        <div className="flex flex-row justify-between">
          <div className="text-lg font-bold text-amber-800">${props.price}</div>
          <div className="h-8 list-none rounded-xl border-2 border-gray-500 bg-white px-5 text-center text-xl font-extrabold leading-6  text-gray-500">
            {"x " + props.amount}
          </div>
        </div>
      </div>
      <div className="flex h-1/6 flex-2 justify-end gap-2 p-1.5">
        <button className="rounded-xl border-2 border-amber-800 bg-white px-5 text-center text-3xl font-bold text-amber-800 hover:bg-gray-100">
          -
        </button>
        <button className="rounded-xl border-2 border-amber-800 bg-white px-5 text-center text-2xl font-bold text-amber-800 hover:bg-gray-100">
          +
        </button>
      </div>
    </li>
  );
}
