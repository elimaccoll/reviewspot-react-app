import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editBio } from "../../actions/user-actions";

const EditBioModal = (props) => {
  const { userId } = useParams();
  const userBio = useSelector((state) => state.user.bio);

  const [bio, setBio] = useState(userBio);
  const dispatch = useDispatch();
  const handleEditBio = () => {
    editBio(dispatch, userId, bio);
    setBio("");
    props.onHide();
  };

  const handleConfirm = () => {
    document.getElementById("user-bio").textContent = bio;
    handleEditBio();
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
        <button className="btn btn-success" onClick={() => handleConfirm()}>
          Confirm
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default EditBioModal;
