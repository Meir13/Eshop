import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Title from "../shared/Title";
import Rating from "../Rating";

const ProductDescription = ({ title, description, rating, price }) => {
  return (
    <ListGroup>
      <ListGroupItem>
        <Title title={title} />
        <h1>{title}</h1>
      </ListGroupItem>

      <ListGroupItem>
        <Rating rating={rating.rate} numReviews={rating.count}></Rating>
      </ListGroupItem>

      <ListGroupItem>Price: ${price}</ListGroupItem>

      <ListGroupItem>
        <p className="lead">Description: {description}</p>
      </ListGroupItem>
    </ListGroup>
  );
};

export default ProductDescription;
