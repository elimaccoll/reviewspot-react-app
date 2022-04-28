import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

// TODO: Connect to a reducer to set/update new bio
const EditBioModal = (props) => {
  const [bio, setBio] = useState("");

  const dispatch = useDispatch();
  const editBioHandler = () => {
    // dispatch({ type: "create-review", review: review, rating: rating });
    setBio("");
    props.onHide();
  };

  const handleClose = () => {
    setBio("");
    props.onHide();
  };

  return (
    <Modal {...props} backdrop="static" keyboard={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Bio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          autoFocus
          className="form-control"
          name="edit-bio-text"
          id="edit-bio-text"
          cols="30"
          rows="3"
          placeholder="Write a bio..."
          value={bio}
          onChange={(event) => setBio(event.target.value)}
        ></textarea>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <button className="btn btn-danger" onClick={() => handleClose()}>
          Close
        </button>
        <button className="btn btn-success" onClick={() => editBioHandler()}>
          Confirm
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default EditBioModal;
