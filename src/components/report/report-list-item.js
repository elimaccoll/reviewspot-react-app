import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { dismissReport, getCommentByURI } from "../../actions/reports-actions";
import { useDispatch, useSelector } from "react-redux";
import { banUser } from "../../actions/reports-actions";

const ReportListItem = ({ report }) => {
  const dispatch = useDispatch();

  const handleDismiss = () => {
    dismissReport(dispatch, report._id);
  };

  const contentType = report && report.contentType;

  const handleBan = () => {
    banUser(dispatch, "Ban Hammer", report.authorId);
  };

  useEffect(() => {
    if (contentType === "comment") getCommentByURI(dispatch, report.uri);
  }, []);
  const reportState = useSelector((state) => state.reports);
  const commentContent = report.commentContent;

  return (
    <li className="list-group-item">
      <div>Reporter ID: {report && report.submittedBy} </div>
      <div>
        Reason: <span className="text-muted">{report && report.reason}</span>
      </div>
      <div
        className={`${
          contentType && contentType === "review" ? "d-block" : "d-none"
        }`}
      >
        <Link to={`${report && report.uri ? report.uri : "/"}`}>
          View Reported Content
        </Link>
      </div>
      <div
        className={`${
          contentType && contentType === "comment" ? "d-block" : "d-none"
        }`}
      >
        <span className="me-1">Comment Content: </span>
        <span className="text-muted">{commentContent && commentContent}</span>
      </div>
      <div>
        <span className="me-1">Submitted: </span>
        {report && moment(report.createdAt).format("MMMM Do, YYYY HH:mm:ss")}
      </div>
      <div className="row">
        <div className="d-flex justify-content-end">
          <button className="btn btn-info me-2" onClick={() => handleDismiss()}>
            Dismiss
          </button>
          <button className="btn btn-danger" onClick={() => handleBan()}>
            Ban User
          </button>
        </div>
      </div>
    </li>
  );
};
export default ReportListItem;
