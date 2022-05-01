import React, { useEffect } from "react";
import AlbumInfo from "./album-info";
import ReviewList from "../reviews/review-list";
import { useParams } from "react-router-dom";
import { findAlbumReviews } from "../../actions/reviews-actions";
import { findAlbum } from "../../actions/albums-actions";
import { useDispatch, useSelector } from "react-redux";
import { userAlreadyReviewedAlbum } from "../helpers/album";

const AlbumPage = () => {
  const { albumId } = useParams();

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.user);
  const loggedIn = userInfo.loggedIn;

  // TODO: Check if album is in state (use id) before refetching
  useEffect(() => findAlbum(dispatch, albumId), [albumId]);
  useEffect(() => findAlbumReviews(dispatch, albumId), [albumId]);
  const album = useSelector((state) => state.albums);
  const reviewState = useSelector((state) => state.reviews);
  const reviews = reviewState.reviews ? reviewState.reviews : null;
  const numReviews = reviews && reviews.total;
  console.log(numReviews);
  console.log(reviews);

  const alreadyReviewed =
    reviews && reviews.reviews && loggedIn
      ? userAlreadyReviewedAlbum(reviews.reviews, userInfo._id)
      : false;

  return (
    <div>
      <AlbumInfo
        album={album}
        numReviews={numReviews}
        alreadyReviewed={alreadyReviewed}
      />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default AlbumPage;
