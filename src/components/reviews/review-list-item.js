import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RatingBar from "../rating-bar/rating-bar";
import ReviewStats from "./review-stats";

const ReviewListItem = ({ review }) => {
  const navigate = useNavigate();
  const albumId = review.albumId;
  const authorInfo = review.authorInfo;
  // console.log(review);

  // TODO: Do this differently
  // Conditionally render information displayed if NOT on album page
  const url = window.location.href;
  const find = "album";
  const onAlbumPage = url.match(find);
  const numComments = review && review.numComments;

  // console.log(review);

  const goToUserProfile = () => {
    navigate(`/user/${authorInfo.authorId}`);
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
            src={`https://avatars.dicebear.com/api/pixel-art/${authorInfo.authorId}.svg`}
            className="rs-img-128 img-fluid rs-profile-pic"
            alt="Profile Picture"
            onClick={() => goToUserProfile()}
          />
        </div>
        <div
          className={`${!onAlbumPage ? "col-12" : "col-9 col-md-10 col-xl-11"}`}
        >
          <div>
            <Link
              className="review-list-item"
              to={`/user/${authorInfo.authorId}`}
            >
              <span className="text-muted me-1">Review by</span>
              <span>{authorInfo.authorName}</span>
              {(authorInfo.authorRole === "moderator") && <span className="badge bg-primary me-1 ms-1">Moderator</span>}
            </Link>
          </div>
          <Link
            className="review-list-item text-white"
            to={`/album/${albumId}/review/${review._id}`}
          >
            <div className={`${onAlbumPage ? "d-none" : "d-block"}`}>
              <Link className="review-list-item" to={`/album/${albumId}`}>
                <span className="text-muted">Album: </span>
                <span>{review && review.albumName}</span>
              </Link>
            </div>

            <RatingBar rating={review.rating.rating} />

            <div>{review.content}</div>
          </Link>
          <ReviewStats review={review} numComments={numComments} />
        </div>
      </div>
    </li>
  );
};
export default ReviewListItem;
