import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

// Displayed when user tries to write a review but is not logged in
const LoginModal = (props) => {
  const handleClose = () => {
    props.onHide();
  };

  return (
    <Modal {...props} backdrop="static" keyboard={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login to Write a Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Link to="/login/">
          <button className="btn btn-success">Login/Register</button>
        </Link>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <button className="btn btn-danger" onClick={() => handleClose()}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default LoginModal;
