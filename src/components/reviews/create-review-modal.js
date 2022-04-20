import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const CreateReviewModal = (props) => {
  const [rating, setRating] = useState(0);
  const handleRating = (userRating) => {
    setRating(userRating);
  };

  return (
    <>
      <Modal {...props} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Write a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            autoFocus
            className="form-control"
            name="create-review-text"
            id="create-review-text"
            cols="30"
            rows="3"
            placeholder="Add a review..."
          ></textarea>
          <div className="mt-3">
            <div>Rating</div>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              allowHalfIcon={true}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button className="btn btn-danger" onClick={props.onHide}>
            Close
          </Button>
          <Button className="btn btn-success" onClick={props.onHide}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CreateReviewModal;
