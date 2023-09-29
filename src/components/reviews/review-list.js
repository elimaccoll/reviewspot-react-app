import React from "react";
import ReviewListItem from "./review-list-item";
import { useSelector } from "react-redux";

const ReviewList = ({ reviews }) => {
  // console.log(reviews);
  const reviewsList = reviews ? reviews.reviews : [];

  const prev = reviews && reviews.prev; // If previous page
  const next = reviews && reviews.next; // If next page
  const limit = reviews && reviews.limit;
  const offset = reviews && reviews.offset;
  const loadNext = () => {
    return;
  };
  const loadPrev = () => {
    return;
  };
  return (
    <div>
      <ul className="list-group mt-2">
        {reviewsList &&
          reviewsList.map((review, ind) => {
            return <ReviewListItem review={review} key={ind} />;
          })}
      </ul>
    </div>
  );
};
export default ReviewList;
