import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const CommentListItem = ({ comment }) => {
  const { rid } = useParams();
  const navigate = useNavigate();

  // TODO: Get user info from author of comment
  // const author = get user data of author
  const author = {
    _id: "0",
    username: "Username",
    profile_pic: "https://picsum.photos/200/300?random=1",
  };

  // TODO: render 'edit' button if user is author
  const userIsAuthor = true;

  const goToUserProfile = () => {
    // TODO: Get user id of the profile pic that was clicked
    const uid = 0;
    navigate(`/user/${uid}`);
  };

  const dispatch = useDispatch();
  const deleteCommentHandler = () => {
    dispatch({ type: "delete-comment", reviewId: rid, comment: comment });
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3 col-md-2 col-xl-1 d-flex justify-content-center align-items-center">
          <img
            src={author.profile_pic}
            className="rs-img-128 img-fluid rs-profile-pic"
            alt="Profile Picture"
            onClick={() => goToUserProfile()}
          />
        </div>
        <div className="col-9 col-md-10 col-xl-11">
          <div className="d-flex justify-content-between">
            <Link className="comment-list-item" to={`/user/${author._id}`}>
              <span className="text-muted me-1">Comment by</span>
              <span>{author.username}</span>
            </Link>
            <div className={`${userIsAuthor ? "d-inline" : "d-none"}`}>
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

          <div>{comment}</div>
        </div>
      </div>
    </li>
  );
};
export default CommentListItem;
