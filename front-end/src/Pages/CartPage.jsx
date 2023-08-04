import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Components/shared/Title";
import { Store } from "../Context/Store";
import { Col, Row } from "react-bootstrap";
import Cart from "../Components/Cart";
import { ADD_TO_CART, GET_FAIL, REMOVE_FROM_CART } from "../Reducers/Actions";
import axios from "axios";
import Total from "../Components/Total";
import { toast } from "react-toastify";

const CartPage = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;

  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };

  const updateCartHandler = async (item, quantity) => {
    try {
      const { data } = await axios.get(`/products/id/${item._id}`);

      if (data.countInStock < quantity) {
        toast.error("Sorry, we don't have that many in stock");
        return;
      }

      ctxDispatch({ type: ADD_TO_CART, payload: { ...item, quantity } });
    } catch (error) {
      ctxDispatch({ type: GET_FAIL, payload: error.message });
    }
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: REMOVE_FROM_CART, payload: item });
  };

  return (
    <div>
      <Title title="Shopping Cart"></Title>
      <Row>
        <Col md={8}>
          <Cart
            cartItems={cartItems}
            updateCartHandler={updateCartHandler}
            removeItemHandler={removeItemHandler}
          ></Cart>
        </Col>

        <Col md={4}>
          <Total
            cartItems={cartItems}
            checkoutHandler={checkoutHandler}
          ></Total>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
