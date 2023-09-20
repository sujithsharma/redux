import React from "react";
import { Modal, Button } from "react-bootstrap";

function LoginErrorModal({ show , onClose}) {
 

  return (
    <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>Login Failed</Modal.Title>
      </Modal.Header>
      <Modal.Body>Enter correct username and password. If You are a new user signup</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginErrorModal;
