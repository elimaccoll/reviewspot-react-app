import React, { useState } from "react";
import { createArtistsString } from "../helpers/album";
import CreateReviewModal from "../reviews/create-review-modal";
import AlbumStats from "./album-stats";
import AlbumRatingBar from "./album-rating-bar";
import LoginModal from "../auth/login/login-modal";

const AlbumInfo = ({ album }) => {
  // TODO: replace with logged in state
  const loggedIn = false;
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
        Write Review
      </button>
    );
  };

  return (
    <div className="bg-dark p-2">
      <CreateReviewModal show={showReview} onHide={() => hideReviewModal()} />
      <LoginModal show={showLogin} onHide={() => hideLoginModal()} />
      <div className="row mb-2">
        <div className="col-5 col-md-3 d-flex justify-content-center align-items-center">
          <img
            src={album.images[0].url}
            alt="Album cover."
            className="img-fluid rounded"
          />
        </div>
        <div className="col-7 col-md-6">
          <div className="h1">{album.name}</div>
          <div className="h2">{createArtistsString(album.artists)}</div>
          <AlbumStats album={album} />
          <AlbumRatingBar album={album} />
          <div className="d-md-none d-flex justify-content-end">
            {WriteReviewButton()}
          </div>
        </div>
        <div className="d-none d-md-flex col-3 d-flex flex-column justify-content-end">
          {WriteReviewButton()}
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
