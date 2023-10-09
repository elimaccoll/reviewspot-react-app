import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReviewStats from "./review-stats";
import CommentList from "../comments/comment-list";
import CreateCommentModal from "../comments/create-comment-modal";
import CreateReportModal from "../report/create-report-modal";
import CreateReviewModal from "./create-review-modal";
import RatingBar from "../rating-bar/rating-bar";
import {
  findReviewById,
  deleteReview,
  findReviewComments,
} from "../../actions/reviews-actions";
import LoginModal from "../auth/login/login-modal";
import moment from "moment";

const ReviewPage = () => {
  const { albumId, reviewId } = useParams();

  // Write comment modal
  const [modalShow, setModalShow] = useState(false);
  const hideModal = () => setModalShow(false);
  const showModal = () => setModalShow(true);

  const [reportShow, setReportShow] = useState(false);
  const hideReport = () => setReportShow(false);
  const showReport = () => setReportShow(true);

  const [showLogin, setShowLogin] = useState(false);
  const hideLoginModal = () => setShowLogin(false);
  const showLoginModal = () => setShowLogin(true);

  const [showEdit, setShowEdit] = useState(false);
  const hideEditModal = () => setShowEdit(false);
  const showEditModal = () => setShowEdit(true);

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.user);
  const loggedIn = userInfo.loggedIn;
  const moderator = userInfo.role === "moderator";

  const reviewState = useSelector((state) => state.reviews);
  useEffect(() => findReviewById(dispatch, reviewId, albumId), []);
  const review = reviewState.length !== 0 ? reviewState.reviews : null;
  const albumData = review && review.albumData;
  const reviewInfo = review && review.reviews[0];
  const albumName =
    review && (albumData ? albumData.name : reviewInfo.albumName);
  const authorInfo = review && reviewInfo && reviewInfo.authorInfo;
  const userIsAuthor = authorInfo && authorInfo.authorId === userInfo._id;

  const commentsInfo = useSelector((state) => state.comments);
  useEffect(() => findReviewComments(dispatch, reviewId, albumId), []);
  const comments = commentsInfo && commentsInfo.comments;
  const numComments = comments && comments.length;
  const updated = reviewInfo && reviewInfo.updatedAt > reviewInfo.createdAt;

  // TODO: Pull pagination info for comments

  const navigate = useNavigate();
  const goToUserProfile = () => {
    navigate(`/user/${authorInfo.authorId}`);
  };

  const deleteReviewHandler = () => {
    deleteReview(dispatch, reviewId, albumId);
    navigate(`/album/${albumId}`);
  };

  const WriteCommentButton = () => {
    return (
      <button
        className="btn btn-block btn-info"
        onClick={() => {
          loggedIn ? showModal() : showLoginModal();
        }}
        data-bs-toggle="modal"
        data-bs-target="#create-comment-modal"
      >
        Write Comment
      </button>
    );
  };

  return (
    <div>
      <CreateCommentModal show={modalShow} onHide={() => hideModal()} />
      <CreateReviewModal
        show={showEdit}
        onHide={() => hideEditModal()}
        edit={true}
        rating={reviewInfo && reviewInfo.rating.rating}
        review={reviewInfo && reviewInfo.content}
      />
      <CreateReportModal show={reportShow} onHide={() => hideReport()} review />
      <LoginModal
        show={showLogin}
        onHide={() => hideLoginModal()}
        purpose={"Write a Comment"}
      />
      <li className="list-group-item">
        <div className="row">
          <div className="col-3 col-md-2 col-xl-1 d-flex justify-content-center align-items-center">
            <img
              src={
                authorInfo &&
                `https://api.dicebear.com/7.x/pixel-art/svg?seed=${authorInfo.authorId}`
              }
              className="rs-img-128 img-fluid rs-profile-pic"
              alt="Avatar"
              onClick={() => goToUserProfile()}
            />
          </div>
          <div className="col-9 col-md-10 col-xl-11">
            <div className="d-flex justify-content-between">
              <div>
                <Link
                  className="review-list-item me-3"
                  to={authorInfo ? `/user/${authorInfo.authorId}` : "/"}
                >
                  <span className="text-muted me-1">Review by</span>
                  <span>{authorInfo && authorInfo.authorName}</span>
                  {authorInfo && authorInfo.authorRole === "moderator" && (
                    <span className="badge bg-primary me-1 ms-1">
                      Moderator
                    </span>
                  )}
                </Link>
                <Link
                  className="review-list-item d-lg-inline d-none"
                  to={`/album/${albumId}`}
                >
                  <span className="text-muted me-1">Album: </span>
                  <span>{albumName && albumName}</span>
                </Link>
              </div>
              <div>
                <i
                  className={`clickable fa-solid fa-edit me-3 ${
                    loggedIn && userIsAuthor ? "d-inline" : "d-none"
                  }`}
                  onClick={() => showEditModal()}
                />
                <i
                  className={`clickable fa-solid fa-flag me-3 ${
                    loggedIn && !userIsAuthor ? "d-inline" : "d-none"
                  }`}
                  data-bs-toggle="modal"
                  data-bs-target="#create-report-modal"
                  onClick={() => showReport()}
                ></i>
                <i
                  className={`clickable fa-solid fa-close me-3 ${
                    loggedIn && (userIsAuthor || moderator)
                      ? "d-inline"
                      : "d-none"
                  }`}
                  onClick={() => {
                    if (loggedIn && (userIsAuthor || moderator))
                      deleteReviewHandler();
                  }}
                />
              </div>
            </div>
            <div>
              <span className="text-muted me-1">
                {updated ? "Updated" : "Created"}
              </span>
              <span>
                {reviewInfo &&
                  moment(
                    updated ? reviewInfo.updatedAt : reviewInfo.createdAt
                  ).format("MMMM Do, YYYY HH:mm:ss")}
              </span>
            </div>
            <Link
              className="review-list-item d-block d-lg-none"
              to={`/album/${albumId}`}
            >
              <span className="text-muted me-1">Album: </span>
              <span>{albumName && albumName}</span>
            </Link>
            <div id="review-content">
              <span className="text-muted me-1">Review:</span>
              <span>{reviewInfo && reviewInfo.content}</span>
            </div>
            <RatingBar
              rating={
                reviewInfo && reviewInfo.rating && reviewInfo.rating.rating
              }
            />
            <ReviewStats
              review={reviewInfo && reviewInfo}
              numComments={numComments}
              linkComments={false}
            />

            <div className="d-flex justify-content-end">
              {WriteCommentButton()}
            </div>
          </div>
        </div>
      </li>
      <CommentList comments={comments && comments} />
      <Link className="text-center" to={`/album/${albumId}`}>
        <h2 className="mt-3">Back to Album</h2>
      </Link>
    </div>
  );
};
export default ReviewPage;
