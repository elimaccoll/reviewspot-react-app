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

  const album = useSelector((state) => state.albums);
  const reviewState = useSelector((state) => state.reviews);
  const reviews = reviewState.reviews ? reviewState.reviews : null;

  useEffect(() => findAlbum(dispatch, albumId), [albumId, reviewState]);
  useEffect(() => findAlbumReviews(dispatch, albumId), [albumId]);

  const numReviews =
    reviews && reviews.total
      ? reviews.total
      : reviews && reviews.reviews.length;

  const alreadyReviewed =
    reviews && reviews.reviews && loggedIn
      ? userAlreadyReviewedAlbum(reviews.reviews, userInfo._id)
      : false;

  // Remove user review from other user review list
  let otherReviews = reviews;
  if (alreadyReviewed) {
    const reviewsWithoutUserReview = reviews.reviews.filter(
      (review) => review !== alreadyReviewed
    );
    otherReviews = {
      ...reviews,
      reviews: reviewsWithoutUserReview,
      total: reviewsWithoutUserReview.length,
    };
  }

  return (
    <div>
      <AlbumInfo
        album={album}
        numReviews={numReviews}
        alreadyReviewed={alreadyReviewed}
      />
      <div className="mt-2">
        <ReviewList reviews={otherReviews} />
      </div>
    </div>
  );
};

export default AlbumPage;
