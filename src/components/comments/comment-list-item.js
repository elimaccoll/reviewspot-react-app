import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deleteCommentOnReview } from "../../actions/reviews-actions";
import CreateReportModal from "../report/create-report-modal";

const CommentListItem = ({ comment }) => {
  const { reviewId, albumId } = useParams();
  const navigate = useNavigate();

  const [reportShow, setReportShow] = useState(false);
  const hideReport = () => setReportShow(false);
  const showReport = () => setReportShow(true);

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
      <CreateReportModal
        show={reportShow}
        onHide={() => hideReport()}
        comment
        commentId={commentId}
      />

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
              {authorInfo && authorInfo.authorRole === "moderator" && (
                <span className="badge bg-primary me-1 ms-1">Moderator</span>
              )}
            </Link>
            <div className={`${loggedIn ? "d-inline" : "d-none"}`}>
              {/* <i
                className="clickable fa-solid fa-edit me-3"
                onClick={() => console.log("Edit comment")}
              /> */}
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
                  loggedIn && userIsAuthor ? "d-inline" : "d-none"
                }`}
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
