import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deleteCommentOnReview } from "../../actions/reviews-actions";

const CommentListItem = ({ comment }) => {
  const { reviewId, albumId } = useParams();
  const navigate = useNavigate();
  // console.log(comment);

  const commentId = comment && comment._id;
  const authorInfo = comment && comment.authorInfo;

  const userInfo = useSelector((state) => state.user);
  const loggedIn = userInfo.loggedIn;
  const userIsAuthor = authorInfo && authorInfo.authorId === userInfo._id;
  const moderator = userInfo.role === "moderator";

  const goToUserProfile = () => {
    navigate(`/user/${authorInfo.authorId}`);
  };

  const dispatch = useDispatch();
  const deleteCommentHandler = () => {
    deleteCommentOnReview(dispatch, reviewId, albumId, commentId);
  };

  return (
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
              className="comment-list-item"
              to={`/user/${authorInfo.authorName}`}
            >
              <span className="text-muted me-1">Comment by</span>
              <span>{comment && authorInfo.authorName}</span>
            </Link>
            <div
              className={`${loggedIn && userIsAuthor ? "d-inline" : "d-none"}`}
            >
              <i
                className="clickable fa-solid fa-edit me-3"
                onClick={() => console.log("Edit comment")}
              />
              <i
                className="clickable fa-solid fa-close"
                onClick={() => deleteCommentHandler()}
              />
            </div>
          </div>
          <span className="text-muted me-1">Created</span>
          <span>
            {comment &&
              moment(comment.createdAt).format("MMMM Do, YYYY HH:mm:ss")}
          </span>
          <div>{comment && comment.content}</div>
        </div>
      </div>
    </li>
  );
};
export default CommentListItem;
