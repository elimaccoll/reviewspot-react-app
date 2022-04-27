import React from "react";
import { useDispatch } from "react-redux";

const ReviewStats = ({ review }) => {
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
      <span>Replies: {review && review.replies.length}</span>
    </div>
  );
};
export default ReviewStats;
