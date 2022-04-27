import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ReviewStats from "./review-stats";

const ReviewListItem = ({ review }) => {
  const navigate = useNavigate();

  // TODO: Not completely sure how to do this
  const goToUserProfile = () => {
    // TODO: Get user id of the profile pic that was clicked
    const uid = 0;
    navigate(`/user/${uid}`);
  };

  const dispatch = useDispatch();
  const deleteReviewHandler = () => {
    dispatch({ type: "delete-review", review: review });
  };
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3 col-md-2 col-xl-1 d-flex justify-content-center align-items-center">
          <img
            src={review.profile_pic}
            className="rs-img-128 img-fluid"
            alt="Profile Picture"
            onClick={() => goToUserProfile()}
          />
        </div>
        <div className="col-9 col-md-10 col-xl-11">
          <div className="d-flex justify-content-between">
            <Link className="review-list-item " to={`review/${review._id}`}>
              <span className="text-muted me-1">Review by</span>
              <span>{review.username}</span>
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
                style={{ width: `${review.rating}%` }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div>{review.review}</div>
          <ReviewStats review={review} />
        </div>
      </div>
    </li>
  );
};
export default ReviewListItem;
