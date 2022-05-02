import React, { useEffect } from "react";
import AlbumList from "../album/album-list";
import ReviewList from "../reviews/review-list";
import { useDispatch, useSelector } from "react-redux";
import { findHomeAlbums } from "../../actions/albums-actions";
import { isLoggedIn } from "../../actions/user-actions";
import {
  findPopularReviews,
  findUserReviews,
} from "../../actions/reviews-actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => isLoggedIn(dispatch), []);
  const userInfo = useSelector((state) => state.user);
  const loggedIn = userInfo.loggedIn;

  useEffect(() => findHomeAlbums(dispatch), []);
  const albums = useSelector((state) => state.albums);

  const reviewState = useSelector((state) => state.reviews);
  const popularReviews = reviewState.reviews && reviewState.reviews.reviews;
  useEffect(() => findPopularReviews(dispatch), []);

  return (
    <div className="mt-2">
      <div className="row">
        <div className="col-12 col-lg-8">
          <AlbumList albums={albums} />
        </div>
        <div className="col-lg-4 mt-lg-0 mt-3">
          <h3 className="text-center">&#128293; Hottest Takes &#128293;</h3>
          {
            popularReviews && popularReviews.length > 0 ? 
              <ReviewList reviews={popularReviews} /> :
              <h4 className="text-center text-muted">No reviews to show.</h4>
          }
        </div>
      </div>
    </div>
  );
};
export default Home;
