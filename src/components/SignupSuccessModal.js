import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFetchDataQuery } from "../slice/api";

function SignupSuccessModal({ show, onClose }) {
  const navigate = useNavigate();
  const {refetch } = useFetchDataQuery(); // Initialize the useFetchDataQuery hook

  const handleOk = () => {
    refetch();

    navigate("/login");
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Signup Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Your signup was successful! You can now log in using your credentials.
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            onClose();
            handleOk();
          }}
        >
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignupSuccessModal;
