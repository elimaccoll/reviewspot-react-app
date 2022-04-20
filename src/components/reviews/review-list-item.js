import React from "react";
import { useDispatch } from "react-redux";

const ReviewListItem = ({ review }) => {
  const dispatch = useDispatch();
  const deleteReviewHandler = () => {
    dispatch({ type: "delete-review", review: review });
  };
  const likeReviewHandler = () => {
    dispatch({ type: "like-review", review: review });
  };
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3 col-md-2 col-xl-1">
          <img
            src={review.profile_pic}
            className="rs-img-128 img-fluid"
            alt="Profile Picture"
          />
        </div>
        <div className="col-9 col-md-10 col-xl-11">
          <div className="d-flex justify-content-between">
            <div>
              <span className="text-muted me-1">Review by</span>
              <span>{review.username}</span>
            </div>
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
          <div>
            <span className="me-2">
              <i
                className="text-danger clickable fa-solid fa-heart me-1"
                onClick={() => likeReviewHandler()}
              ></i>
              {review.likes}
            </span>
            <span>Replies: {review.replies.length}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
export default ReviewListItem;
