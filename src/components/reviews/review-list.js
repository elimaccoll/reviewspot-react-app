import React from "react";
import ReviewListItem from "./review-list-item";
import { useSelector } from "react-redux";

// TODO: Pass in list of review to list (from user or album)
const ReviewList = () => {
  // TODO: Currently displaying all reviews for testing
  const reviews = useSelector((state) => state.reviews);

  const prev = true; // If previous page
  const next = true; // If next page

  const loadNext = () => {
    return;
  };
  const loadPrev = () => {
    return;
  };

  return (
    <ul className="list-group mt-2">
      {reviews.map((review) => {
        return <ReviewListItem review={review} />;
      })}
      <div className="bg-light d-flex justify-content-around">
        <i
          className={`rs-dark clickable fas fa-arrow-left fa-2x ${
            prev ? "d-flex" : "d-none"
          }`}
          onClick={() => {
            loadPrev();
          }}
        ></i>
        <i
          className={`rs-dark clickable fas fa-arrow-right fa-2x ${
            next ? "d-flex" : "d-none"
          }`}
          onClick={() => {
            loadNext();
          }}
        ></i>
      </div>
    </ul>
  );
};
export default ReviewList;
