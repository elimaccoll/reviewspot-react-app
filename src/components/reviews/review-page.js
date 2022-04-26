import React from "react";
import { useParams } from "react-router-dom";
import reviews from "../data/reviews.json";

const ReviewPage = () => {
  const { rid } = useParams();
  // TODO: get review with corresponding id
  const review = reviews[rid];
  return (
    <div>
      <h1>Review Page for Review #{rid}</h1>
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
                  onClick={() => console.log("close") /*deleteReviewHandler()*/}
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
                  onClick={() => console.log("like") /*likeReviewHandler()*/}
                ></i>
                {review.likes}
              </span>
              <span>Replies: {review.replies.length}</span>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};
export default ReviewPage;
