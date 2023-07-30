import React from "react";
import { Badge, Button, Card, Col, ListGroup, Row } from "react-bootstrap";

const CartDescription = ({ product, addToCart }) => {
  return (
    <Card>
      <Card.Body>
        <ListGroup.Item>
          <Row>
            <Col>Price:</Col>

            <Col>${product.price}</Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item>
          <Row>
            <Col>Status:</Col>

            <Col>
              {product.countInStock > 0 ? (
                <Badge bg="success">In Stock</Badge>
              ) : (
                <Badge bg="danger">Out Of Stock</Badge>
              )}
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item>
          <Row>
            <Col>Quantity:</Col>

            <Col>{product.countInStock}</Col>
          </Row>
        </ListGroup.Item>

        {product.countInStock > 0 && (
          <Button variant="primary" onClick={addToCart}>
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default CartDescription;
