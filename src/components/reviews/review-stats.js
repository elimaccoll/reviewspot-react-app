import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ReviewStats = ({ review, linkComments = true }) => {
  const dispatch = useDispatch();

  const likeReviewHandler = () => {
    dispatch({ type: "like-review", review: review });
  };
  return (
    <div className="user-select-none">
      <span className="me-2">
        <i
          className="text-danger clickable fa-solid fa-heart me-1"
          onClick={() => likeReviewHandler()}
        ></i>
        {review && review.likes}
      </span>
      <Link
        className={`review-list-item ${linkComments ? "d-inline" : "d-none"}`}
        to={`review/${review._id}`}
      >
        <span>Comments: {review && review.comments.length}</span>
      </Link>
      <span className={`${linkComments ? "d-none" : "d-inline"}`}>
        Comments: {review && review.comments.length}
      </span>
    </div>
  );
};
export default ReviewStats;
