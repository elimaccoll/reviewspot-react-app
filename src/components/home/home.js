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
  useEffect(() => findPopularReviews(dispatch), []);
  const popularReviews = reviewState.reviews;

  return (
    <div className="mt-2">
      <div className="row">
        <div className="col-12 col-lg-8">
          <AlbumList albums={albums} />
        </div>
        <div className="col-lg-4 mt-lg-0 mt-3">
          <h3 className="text-center">Hottest Takes</h3>
          <ReviewList reviews={popularReviews} />
        </div>
      </div>
    </div>
  );
};
export default Home;
