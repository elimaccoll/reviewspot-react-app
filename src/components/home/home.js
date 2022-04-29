import React, { useEffect } from "react";
import AlbumList from "../album/album-list";
import ReviewList from "../reviews/review-list";
import { useDispatch, useSelector } from "react-redux";
import { findHomeAlbums, findAlbum } from "../../actions/albums-actions";
import testAlbums from "../data/albums.json";

const Home = () => {
  // TODO: Conditionally render depending on loggedIn
  // - LOGGED IN
  // -- show user's recent reviews
  // - NOT LOGGED IN
  // -- show top reviews
  const loggedIn = true;

  // Load albums -- manually loading 1 for testing
  const album1 = useSelector((state) => state.albums);
  const dispatch = useDispatch();
  // useEffect(() => findHomeAlbums(dispatch), []);
  useEffect(() => findAlbum(dispatch, testAlbums[0].id), []);
  const albums = [];
  if (!Array.isArray(album1)) {
    albums.push(album1);
  }

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
          <AlbumList albums={albums} />
        </div>
        <div className="col-md-4 mt-md-0 mt-3">
          <ReviewList />
        </div>
      </div>
    </div>
  );
};
export default Home;
