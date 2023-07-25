import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Total = ({ cartItems, checkoutHandler }) => {
  return (
    <Card>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroupItem>
            <h3>
              Subtotal:{" "}
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items $
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </h3>
          </ListGroupItem>

          <ListGroupItem>
            <div className="d-grid">
              <Button
                type="button"
                variant="primary"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Checkout
              </Button>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Total;
