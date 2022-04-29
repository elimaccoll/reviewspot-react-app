import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const CreateReportModal = (props) => {
  const [reason, setReason] = useState("");
  const { rid } = useParams();

  const dispatch = useDispatch();
  const createReportHandler = () => {
    // dispatch({ type: "report-content", reviewId: rid, reason: reason });
    // TODO: Dispatch that indicates comment or review?
    setReason("");
    props.onHide();
  };

  const handleClose = () => {
    setReason("");
    props.onHide();
  };

  return (
    <Modal {...props} backdrop="static" keyboard={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Report Review/Comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          autoFocus
          className="form-control"
          name="create-report-text"
          id="create-report-text"
          cols="30"
          rows="3"
          placeholder="Give your reason..."
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        ></textarea>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button className="btn btn-danger" onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button
          className="btn btn-success"
          onClick={() => createReportHandler()}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreateReportModal;
