import React from "react";

const ReviewListItem = ({ review }) => {
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
          <div>
            <span className="text-muted me-1">Review by</span>
            <span>{review.user_name}</span>
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
              <i className="text-danger fa-solid fa-heart"></i> {review.likes}
            </span>
            <span>Replies: {review.replies}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
export default ReviewListItem;
