import { useReducer } from "react";
import CarteContext from "./cart-context";

const defaulCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedItems = [...state.items, action.item];
      const updatedTotalAmount =
        state.totalAmount + action.item.amount * action.item.price;
      console.log("action.item: ", action.item);
      console.log("state.totalAmount: ", state.totalAmount);
      console.log("updatedTotalAmount: ", updatedTotalAmount);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE_ITEM":
      return defaulCartState;
    default:
      return defaulCartState;
  }
};

const CartProvider = (props) => {
  const [carteState, dispatchCartAction] = useReducer(
    cartReducer,
    defaulCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    });
  };

  console.log("carteState: ", carteState);

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
