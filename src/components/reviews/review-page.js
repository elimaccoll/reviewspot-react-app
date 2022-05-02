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
  const authorInfo = reviewInfo && reviewInfo.authorInfo;
  const userIsAuthor = authorInfo && authorInfo.authorId === userInfo._id;

  const commentsInfo = useSelector((state) => state.comments);
  useEffect(() => findReviewComments(dispatch, reviewId, albumId), []);
  const comments = commentsInfo && commentsInfo.comments;
  const numComments = comments && comments.length;

  // TODO: Pull pagination info for comments
  // console.log(review);
  // console.log(comments);

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
      <CreateReportModal show={reportShow} onHide={() => hideReport()} />
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
                `https://avatars.dicebear.com/api/pixel-art/${authorInfo.authorId}.svg`
              }
              className="rs-img-128 img-fluid rs-profile-pic"
              alt="Profile Picture"
              onClick={() => goToUserProfile()}
            />
          </div>
          <div className="col-9 col-md-10 col-xl-11">
            <div className="d-flex justify-content-between">
              <Link
                className="review-list-item "
                to={authorInfo ? `/user/${authorInfo.authorId}` : "/"}
              >
                <span className="text-muted me-1">Review by</span>
                <span>{authorInfo && authorInfo.authorName}</span>
              </Link>
              <div>
                <i
                  className={`clickable fa-solid fa-edit me-3 ${
                    loggedIn && userIsAuthor ? "d-inline" : "d-none"
                  }`}
                  onClick={() => showEditModal()}
                />
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
                <i
                  className={`clickable fa-solid fa-flag me-3 ${
                    loggedIn ? "d-inline" : "d-none"
                  }`}
                  data-bs-toggle="modal"
                  data-bs-target="#create-report-modal"
                  onClick={() => showReport()}
                ></i>
              </div>
            </div>
            <Link
              className="review-list-item "
              to={albumData ? `/album/${albumData.id}` : "/"}
            >
              <span className="text-muted me-1">Album: </span>
              <span>{albumData && albumData.name}</span>
            </Link>
            <RatingBar
              rating={
                reviewInfo && reviewInfo.rating && reviewInfo.rating.rating
              }
            />
            <div id="review-content">{reviewInfo && reviewInfo.content}</div>
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
