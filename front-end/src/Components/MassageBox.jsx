import React from "react";
import { Alert } from "react-bootstrap";

function MassageBox({ children, variant }) {
  return (
    <div className="text-center">
      <Alert variant={variant || "info"}>{children}</Alert>
    </div>
  );
}

export default MassageBox;
