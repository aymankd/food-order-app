import React, { useCallback, useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

export default function Cart(props) {
  /* -------------------------------- Contexts -------------------------------- */
  const cartCtx = useContext(CartContext);

  /* -------------------------------- Callbacks ------------------------------- */
  const cartItemRemoveHandler = useCallback(() => {}, []);
  const cartItemAddHandler = useCallback(() => {}, []);

  const cartitems = (
    <ul className="max-h-80 list-none divide-y-2 divide-amber-800 overflow-auto">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const hasItems = cartCtx.items.length > 0;

  const totalAmount = `$${cartCtx.totalAmount?.toFixed(2)}`;
  return (
    <Modal onClickOutside={props.onClose}>
      {cartitems}
      <div className="flex flex-row justify-between text-xl font-bold">
        <div>Total Amount</div>
        <div className="text-amber-800">{totalAmount}</div>
      </div>
      <div className="flex flex-row justify-end gap-4">
        <button
          onClick={props.onClose}
          className="rounded-3xl border-2 border-amber-800 bg-white px-5 py-2.5 text-sm font-medium text-amber-800 hover:bg-gray-100"
        >
          Cancle
        </button>
        <button
          disabled={!hasItems}
          className="rounded-3xl bg-amber-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-900 focus:bg-amber-700 disabled:bg-gray-500"
        >
          Order
        </button>
      </div>
    </Modal>
  );
}
