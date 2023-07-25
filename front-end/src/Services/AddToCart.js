import axios from "axios";
import { toast } from "react-toastify";
import { ADD_TO_CART, GET_FAIL } from "../Reducers/Actions";

export const addToCartHandler = async (product, cartItems, ctxDispatch) => {
  const existingItems = cartItems.find((item) => item._id === product._id);
  const quantity = existingItems ? existingItems.quantity + 1 : 1;
  console.log(existingItems);

  try {
    const { data } = await axios.get(`/products/id/${product._id}`);

    if (data.countInStock < quantity) {
      toast.error("Out of stock");
      return;
    }
    ctxDispatch({ type: ADD_TO_CART, payload: { ...product, quantity } });
  } catch (error) {
    ctxDispatch({ type: GET_FAIL, payload: error.message });
  }
};
