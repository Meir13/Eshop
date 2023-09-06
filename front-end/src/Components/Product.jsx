import { React, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./Product.css";
import { Store } from "../Context/Store";
import addToCartHandler from "../Services/addToCartV2";

const Product = ({ product }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
    <Card className="product-card">
      <Link to={`/product/${product.token}`}>
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          className="card-image-page"
        ></Card.Img>
        <Card.Body className="card-body">
          <Card.Title className="text-shortener">{product.title}</Card.Title>
          <Rating
            rating={product.rating.rate}
            numReviews={product.rating.count}
          ></Rating>
          <Card.Text>{product.price}$</Card.Text>

          {product.countInStock === 0 ? (
            <Button variant="light" disable="true">
              Out Of Stock
            </Button>
          ) : (
            <Button
              onClick={() => addToCartHandler(product, cartItems, ctxDispatch)}
              className="btn-primary"
            >
              Add To Cart
            </Button>
          )}
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Product;
