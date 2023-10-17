import React, { useState } from "react";
import { createArtistsString } from "../helpers/album";
import CreateReviewModal from "../reviews/create-review-modal";
import AlbumStats from "./album-stats";
import RatingBar from "../rating-bar/rating-bar";
import LoginModal from "../auth/login/login-modal";
import { useSelector } from "react-redux";
import ReviewList from "../reviews/review-list";

const AlbumInfo = ({ album, numReviews, alreadyReviewed = null }) => {
  const albumInfo = album.album;
  const userInfo = useSelector((state) => state.user);
  const loggedIn = userInfo.loggedIn;
  const userReview = alreadyReviewed ? [alreadyReviewed] : [];

  const [showReview, setShowReview] = useState(false);
  const hideReviewModal = () => setShowReview(false);
  const showReviewModal = () => setShowReview(true);

  const [showLogin, setShowLogin] = useState(false);
  const hideLoginModal = () => setShowLogin(false);
  const showLoginModal = () => setShowLogin(true);

  const WriteReviewButton = () => {
    return (
      <button
        className="btn btn-block btn-info"
        onClick={() => {
          loggedIn ? showReviewModal() : showLoginModal();
        }}
        data-bs-toggle="modal"
        data-bs-target="#create-review-modal"
      >
        {alreadyReviewed ? "Edit Review" : "Write Review"}
      </button>
    );
  };

  return (
    <div className="bg-dark p-2">
      <CreateReviewModal
        show={showReview}
        onHide={() => hideReviewModal()}
        edit={alreadyReviewed}
        rating={alreadyReviewed && alreadyReviewed.rating.rating}
        review={alreadyReviewed && alreadyReviewed.content}
        reviewId={alreadyReviewed && alreadyReviewed._id}
      />
      <LoginModal
        show={showLogin}
        onHide={() => hideLoginModal()}
        purpose={"Write a Review"}
      />
      <div className="row mb-2">
        <div className="col-5 col-md-3 d-flex justify-content-center align-items-center">
          <img
            src={albumInfo && albumInfo.images[0].url}
            alt="Album cover."
            className="img-fluid rounded"
          />
        </div>
        <div className="col-7 col-md-6">
          <div className="h1">{albumInfo && albumInfo.name}</div>
          <div className="h2">
            {albumInfo && createArtistsString(albumInfo.artists)}
          </div>
          <AlbumStats album={albumInfo} numReviews={numReviews} />
          {albumInfo && albumInfo.avgRating && albumInfo.avgRating >= 0 ? (
            <RatingBar rating={albumInfo.avgRating} />
          ) : (
            <span className="text-muted">No ratings available.</span>
          )}
          <div className={"d-md-none d-flex justify-content-end"}>
            {WriteReviewButton()}
          </div>
        </div>
        <div className="d-none d-md-flex col-3 d-flex flex-column justify-content-end">
          {WriteReviewButton()}
        </div>
      </div>
      <div className={`rounded ${alreadyReviewed ? "d-inline" : "d-none"}`}>
        <ReviewList reviews={{ reviews: userReview }} />
      </div>
    </div>
  );
};

export default AlbumInfo;
