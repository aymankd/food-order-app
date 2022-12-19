import { useReducer } from "react";
import CarteContext from "./cart-context";

const defaulCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedTotalAmount =
        state.totalAmount + action.item.amount * action.item.price;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems = [...state.items];
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [...updatedItems, { ...action.item }];
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE_ITEM":
      return defaulCartState;
    default:
      return defaulCartState;
  }
}

const CartProvider = (props) => {
  const [carteState, dispatchCartAction] = useReducer(
    cartReducer,
    defaulCartState
  );

  const addItemHandler = (item) =>
    dispatchCartAction({
      type: "ADD_ITEM",
      item,
    });
  const removeItemHandler = (id) =>
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    });

  const cartContext = {
    items: carteState.items,
    totalAmount: carteState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CarteContext.Provider value={cartContext}>
      {props.children}
    </CarteContext.Provider>
  );
};

export default CartProvider;
