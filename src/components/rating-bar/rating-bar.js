import React from "react";

const RatingBar = ({ rating }) => {
  console.log(rating);
  return (
    <div className="d-flex align-items-center">
      <div className="rs-rating-bar me-2">
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
            role="progressbar"
            style={{ width: `${rating}%` }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      {rating / 10} / 10
    </div>
  );
};
export default RatingBar;
