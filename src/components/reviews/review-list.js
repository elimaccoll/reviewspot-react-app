import React from "react";
import ReviewListItem from "./review-list-item";
import { useSelector } from "react-redux";

const ReviewList = () => {
  const reviews = useSelector((state) => state.reviews);
  return (
    <ul className="list-group mt-2">
      {reviews.map((review) => {
        return <ReviewListItem review={review} />;
      })}
    </ul>
  );
};
export default ReviewList;
