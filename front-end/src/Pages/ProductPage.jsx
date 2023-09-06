import React, { useContext, useEffect, useReducer } from "react";
import Loading from "../Components/shared/Loading";
import { Col, Row } from "react-bootstrap";
import {
  ProductPageReducer,
  initialState,
} from "../Reducers/ProductPageReducer";
import { GET_FAIL, GET_REQUEST, GET_SUCCESS } from "../Reducers/Actions";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import MessageBox from "../Components/MessageBox";
import ProductDescription from "../Components/ProductPage/ProductDescription";
import CartDescription from "../Components/ProductPage/CartDescription";
import { Store } from "../Context/Store";
import addToCartHandler from "../Services/addToCartV2";

function ProductPage() {
  const params = useParams();
  const { token } = params;
  const navigate = useNavigate();

  const [{ loading, error, product }, dispatch] = useReducer(
    ProductPageReducer,
    initialState
  );

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const {
    cart: { cartItems },
  } = state;

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch({ type: GET_REQUEST });
      try {
        const response = await axios.get(`/products/token/${token}`);

        dispatch({ type: GET_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: GET_FAIL, payload: error });
      }
    };

    fetchProduct();
  }, [token]);

  const addToCartFromProductHandler = async () => {
    await addToCartHandler(product, cartItems, ctxDispatch);
    navigate("/cart");
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Row>
            <Col md={6}>
              <img
                src={`${product.image}`}
                alt={product.title}
                className="card-img-top card-image"
              />
            </Col>

            <Col md={3}>{<ProductDescription {...product} />}</Col>

            <Col md={3}>
              {
                <CartDescription
                  product={product}
                  addToCart={addToCartFromProductHandler}
                />
              }
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
