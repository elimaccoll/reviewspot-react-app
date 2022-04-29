import React from "react";
import ReviewListItem from "./review-list-item";
import { useSelector } from "react-redux";

// TODO: Pass in list of review to list (from user or album)
const ReviewList = () => {
  // TODO: Currently displaying all reviews for testing
  const reviews = useSelector((state) => state.reviews);

  const loggedIn = true;
  const prev = true; // If previous page
  const next = true; // If next page

  const reviewsColHeading = loggedIn ? "Top Reviews" : "Your Recent Reviews";

  const loadNext = () => {
    return;
  };
  const loadPrev = () => {
    return;
  };

  return (
    <div>
      {/* <h3 className="text-center">{reviewsColHeading}</h3> */}
      <ul className="list-group mt-2">
        {reviews.map((review) => {
          return <ReviewListItem review={review} />;
        })}
      </ul>
    </div>
  );
};
export default ReviewList;
