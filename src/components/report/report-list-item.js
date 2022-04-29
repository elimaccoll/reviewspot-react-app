import React from "react";

const ReportListItem = ({ report }) => {
  const handleBan = () => {
    return;
  };
  const handleDismiss = () => {
    return;
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-6">{report.username}</div>
        <div className="col-6">Link: {report.review}</div>
      </div>
      <div className="row">
        <div className="col-12">Reason: {report.reason}</div>
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
