import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RatingBar from "../rating-bar/rating-bar";
import ReviewStats from "./review-stats";

const ReviewListItem = ({ review }) => {
  const navigate = useNavigate();

  // Conditionally render information displayed if NOT on album page
  const url = window.location.href;
  const find = "album";
  const onAlbumPage = url.match(find);

  // TODO: Get album id that this review is for
  // -- needed for linking to review from pages besides the album page (e.g., user profile page who wrote it)
  const album = { _id: 0, title: "Album Title" };

  const goToUserProfile = () => {
    // TODO: Get user id of the profile pic that was clicked
    const uid = 0;
    navigate(`/user/${uid}`);
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div
          className={`col-3 col-md-2 col-xl-1 justify-content-center align-items-center ${
            !onAlbumPage ? "d-none" : "d-flex"
          }`}
        >
          <img
            src={review.profile_pic}
            className="rs-img-128 img-fluid rs-profile-pic"
            alt="Profile Picture"
            onClick={() => goToUserProfile()}
          />
        </div>
        <div
          className={`${!onAlbumPage ? "col-12" : "col-9 col-md-10 col-xl-11"}`}
        >
          <div>
            <Link className="review-list-item " to={`review/${review._id}`}>
              {/*to={`/album/${albumId}/review/${review._id}`}*/}
              <span className="text-muted me-1">Review by</span>
              <span>{review.username}</span>
            </Link>
          </div>
          <div className={`${onAlbumPage ? "d-none" : "d-block"}`}>
            <Link className="review-list-item" to={`/album/${album._id}`}>
              <span className="text-muted">Album: </span>
              <span>{album.title}</span>
            </Link>
          </div>

          <RatingBar rating={review.rating} />

          <div>{review.review}</div>
          <ReviewStats review={review} />
        </div>
      </div>
    </li>
  );
};
export default ReviewListItem;
