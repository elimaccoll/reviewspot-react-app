import React from "react";

const RatingBar = ({ rating }) => {
  return (
    <div className="d-flex align-items-center">
      <div className={`${rating ? "d-block" : "d-none"}`}>
        <div className="rs-rating-bar me-2">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
              role="progressbar"
              style={{ width: `${rating && rating}%` }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div className={`${rating ? "d-block" : "d-none"}`}>
        {rating.toFixed(0) / 10} / 10
      </div>
    </div>
  );
};
export default RatingBar;
