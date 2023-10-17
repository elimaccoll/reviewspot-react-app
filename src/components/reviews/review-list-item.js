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
  const onAlbumPage = url.match("album");
  const numComments = review && review.numComments;

  const goToUserProfile = () => {
    navigate(`/user/${authorInfo.authorId}`);
  };

  return (
    <li className="list-group-item">
      {/* On album page */}
      <div
        className={`${
          onAlbumPage ? "d-flex" : "d-none"
        } align-items-center justify-content-start gap-3`}
      >
        <img
          src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${authorInfo.authorId}`}
          className="rs-img-128 img-fluid rs-profile-pic"
          alt="Avatar"
          onClick={() => goToUserProfile()}
        />
        <div>
          <div>
            <Link
              className="text-decoration-none"
              to={`/user/${authorInfo.authorId}`}
            >
              <span className="text-muted me-1">Review by</span>
              <span>{authorInfo.authorName}</span>
              {authorInfo.authorRole === "moderator" && (
                <span className="badge bg-primary me-1 ms-1">Moderator</span>
              )}
            </Link>
          </div>
          <RatingBar rating={review.rating.rating} />
          <div>{review.content}</div>
          <ReviewStats review={review} numComments={numComments} />
          <div>
            <Link className="" to={`/album/${albumId}/review/${review._id}`}>
              Go to Review
            </Link>
          </div>
        </div>
      </div>
      {/* On user page*/}
      <div
        className={`${
          !onAlbumPage ? "d-flex" : "d-none"
        } align-items-center justify-content-start gap-3`}
      >
        <div>
          <div>
            <Link
              className="text-decoration-none"
              to={`/user/${authorInfo.authorId}`}
            >
              <span className="text-muted me-1">Review by</span>
              <span>{authorInfo.authorName}</span>
              {authorInfo.authorRole === "moderator" && (
                <span className="badge bg-primary me-1 ms-1">Moderator</span>
              )}
            </Link>
          </div>
          <div>
            <Link className="text-decoration-none" to={`/album/${albumId}`}>
              <span className="text-muted">Album: </span>
              <span>{review && review.albumName}</span>
            </Link>
          </div>
          <RatingBar rating={review.rating.rating} />
          <div>{review.content}</div>
          <ReviewStats review={review} numComments={numComments} />
          <div>
            <Link className="" to={`/album/${albumId}/review/${review._id}`}>
              Go to Review
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};
export default ReviewListItem;
