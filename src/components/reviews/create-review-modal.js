import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { useDispatch } from "react-redux";
import { createReview, editReview } from "../../actions/reviews-actions";
import { useNavigate, useParams } from "react-router-dom";
import { bannedRedirect } from "../helpers/auth";

const CreateReviewModal = (props) => {
  const { albumId, reviewId } = useParams();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const loadRating = props.rating ? props.rating : 0;
  const loadReview = props.review ? props.review : "";

  useEffect(() => {
    setRating(loadRating);
    setReview(loadReview);
  }, [loadRating, loadReview]);

  const handleRating = (userRating) => {
    setRating(userRating);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createReviewHandler = () => {
    if (props.edit) {
      if (reviewId) {
        editReview(dispatch, review, rating, reviewId, albumId).catch(
          (error) => {
            const permissionDenied =
              error.response && error.response.status === 403;
            if (permissionDenied) {
              bannedRedirect(navigate);
            } else {
              //TODO: Render a toast message on this
            }
          }
        );
      } else {
        editReview(dispatch, review, rating, props.reviewId, albumId).catch(
          (error) => {
            const permissionDenied =
              error.response && error.response.status === 403;
            if (permissionDenied) {
              bannedRedirect(navigate);
            } else {
              //TODO: Render a toast message on this
            }
          }
        );
      }
    } else {
      createReview(dispatch, review, rating, albumId).catch((error) => {
        const permissionDenied =
          error.response && error.response.status === 403;
        if (permissionDenied) {
          bannedRedirect(navigate);
        } else {
          //TODO: Render a toast message on this
        }
      });
    }

    setReview("");
    setRating(0);
    props.onHide();
  };

  const handleClose = () => {
    setReview("");
    setRating(0);
    props.onHide();
  };

  return (
    <Modal {...props} backdrop="static" keyboard={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.edit ? "Edit Review" : "Write Review"}</Modal.Title>
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
          value={review}
          onChange={(event) => setReview(event.target.value)}
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
        <button className="btn btn-danger" onClick={() => handleClose()}>
          Close
        </button>
        <button
          className="btn btn-success"
          onClick={() => createReviewHandler()}
        >
          {props.edit ? "Save" : "Create"}
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreateReviewModal;
