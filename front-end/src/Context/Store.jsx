import { createContext } from "react";
import { useReducer } from "react";
import { storeReducer } from "../Reducers/StoreReducer";

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: localStorage.getItem("paymentMethod")
      ? JSON.parse(localStorage.getItem("paymentMethod"))
      : "",
  },

  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const body = {
    state,
    dispatch,
  };

  return <Store.Provider value={body}>{props.children}</Store.Provider>;
}
