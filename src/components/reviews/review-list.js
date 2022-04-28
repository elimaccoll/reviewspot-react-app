import React from "react";
import ReviewListItem from "./review-list-item";
import { useSelector } from "react-redux";

// TODO: Pass in list of review to list (from user or album)
const ReviewList = () => {
  // TODO: Currently displaying all reviews for testing
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
