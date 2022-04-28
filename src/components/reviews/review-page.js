import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReviewStats from "./review-stats";
import CommentList from "../comments/comment-list";
import CreateCommentModal from "../comments/create-comment-modal";
import RatingBar from "../rating-bar/rating-bar";

const ReviewPage = () => {
  const { aid, rid } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const hideModal = () => setModalShow(false);
  const showModal = () => setModalShow(true);

  // TODO: get review with corresponding id from db
  const reviews = useSelector((state) => state.reviews);
  const review = reviews.filter((r) => {
    if (r._id === rid) {
      return r;
    }
  })[0];

  // TODO: Get author of review
  const author = { _id: "0" };
  // TODO: render 'edit' button if user is author
  const userIsAuthor = true;

  const navigate = useNavigate();
  const goToUserProfile = () => {
    // TODO: Get user id of the profile pic that was clicked
    const uid = 0;
    navigate(`/user/${uid}`);
  };

  const dispatch = useDispatch();
  const deleteReviewHandler = () => {
    dispatch({ type: "delete-review", review: review });
    navigate(`/album/${aid}`);
  };

  const WriteCommentButton = () => {
    return (
      <button
        className="btn btn-block btn-info"
        onClick={() => showModal()}
        data-bs-toggle="modal"
        data-bs-target="#create-comment-modal"
      >
        Write Comment
      </button>
    );
  };

  return (
    <div>
      <CreateCommentModal show={modalShow} onHide={() => hideModal()} />
      <li className="list-group-item">
        <div className="row">
          <div className="col-3 col-md-2 col-xl-1 d-flex justify-content-center align-items-center">
            <img
              src={review && review.profile_pic}
              className="rs-img-128 img-fluid rs-profile-pic"
              alt="Profile Picture"
              onClick={() => goToUserProfile()}
            />
          </div>
          <div className="col-9 col-md-10 col-xl-11">
            <div className="d-flex justify-content-between">
              <Link className="review-list-item " to={`/user/${author._id}`}>
                <span className="text-muted me-1">Review by</span>
                <span>{review && review.username}</span>
              </Link>
              <div className={`${userIsAuthor ? "d-inline" : "d-none"}`}>
                <i
                  className="clickable fa-solid fa-edit me-3"
                  onClick={() => console.log("Edit review")}
                />
                <i
                  className="clickable fa-solid fa-close"
                  onClick={() => deleteReviewHandler()}
                />
              </div>
            </div>
            <RatingBar rating={review.rating} />
            <div>{review && review.review}</div>
            <ReviewStats review={review} linkComments={false} />
          </div>
        </div>
        <div className="d-flex justify-content-end">{WriteCommentButton()}</div>
      </li>
      <CommentList comments={review.comments} />
      <Link className="text-center" to={`/album/${aid}`}>
        <h2 className="mt-3">Back to Album</h2>
      </Link>
    </div>
  );
};
export default ReviewPage;
