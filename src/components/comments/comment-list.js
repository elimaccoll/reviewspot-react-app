import React from "react";
import CommentListItem from "./comment-list-item";

const CommentList = ({ comments }) => {
  return (
    <ul className="list-group mt-2">
      {comments.map((comment) => {
        return <CommentListItem comment={comment} />;
      })}
    </ul>
  );
};
export default CommentList;
