import React from "react";
import AlbumList from "../album/album-list";
import ReviewList from "../reviews/review-list";

const Home = () => {
  // TODO: Conditionally render depending on loggedIn
  // - LOGGED IN
  // -- show user's recent reviews
  // - NOT LOGGED IN
  // -- show no recent review OR show recent reviews in general/top reviews
  const loggedIn = true;

  // TODO: Not sure if this is how we would actually do this, but gets the point across
  const loadUserRecentReviews = () => {
    return;
  };
  const loadGlobalRecentReviews = () => {
    return;
  };

  // TODO: Pass this into ReviewList
  const reviewsToRender = loggedIn
    ? loadUserRecentReviews()
    : loadGlobalRecentReviews();

  return (
    <div className="mt-2">
      <div className="row">
        <div className="col-12 col-md-8">
          <AlbumList />
        </div>
        <div className="col-md-4 mt-md-0 mt-3">
          <ReviewList />
        </div>
      </div>
    </div>
  );
};
export default Home;
