import React from "react";
import ReviewListItem from "./review-list-item";
import reviews from "../data/reviews.json";

const ReviewList = () => {
  return (
    <ul className="list-group mt-2">
      {reviews.map((review) => {
        return <ReviewListItem review={review} />;
      })}
    </ul>
  );
};
export default ReviewList;
