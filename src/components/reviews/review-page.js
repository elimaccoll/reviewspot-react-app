import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import ReviewStats from "./review-stats";

const ReviewPage = () => {
  const { aid, rid } = useParams();
  // TODO: get review with corresponding id from db
  const reviews = useSelector((state) => state.reviews);
  const review = reviews.filter((r) => {
    if (r._id === rid) {
      return r;
    }
  })[0];
  // TODO: Get author of review
  const author = { _id: "0" };

  const dispatch = useDispatch();
  const deleteReviewHandler = () => {
    dispatch({ type: "delete-review", review: review });
  };
  const likeReviewHandler = () => {
    dispatch({ type: "like-review", review: review });
  };
  return (
    <div>
      <h1>Review Page for Review #{rid}</h1>
      <div className={`${review ? "d-none" : "d-block"}`}>
        <h1>Review Deleted</h1>
      </div>
      <li className={`list-group-item ${review ? "d-block" : "d-none"}`}>
        <div className="row">
          <div className="col-3 col-md-2 col-xl-1 d-flex justify-content-center align-items-center">
            <img
              src={review && review.profile_pic}
              className="rs-img-128 img-fluid"
              alt="Profile Picture"
            />
          </div>
          <div className="col-9 col-md-10 col-xl-11">
            <div className="d-flex justify-content-between">
              <Link className="review-list-item " to={`/user/${author._id}`}>
                <span className="text-muted me-1">Review by</span>
                <span>{review && review.username}</span>
              </Link>
              <div>
                <i
                  className="clickable fa-solid fa-close"
                  onClick={() => deleteReviewHandler()}
                />
              </div>
            </div>

            <div className="w-50">
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                  role="progressbar"
                  style={{ width: `${review && review.rating}%` }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div>{review && review.review}</div>
            <ReviewStats review={review} />
          </div>
        </div>
      </li>
      <Link to={`/album/${aid}`}>
        <h1>Back to Album</h1>
      </Link>
    </div>
  );
};
export default ReviewPage;
