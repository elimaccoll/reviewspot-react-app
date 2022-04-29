import React from "react";
import ReportList from "./report-list";

const ReportDashboard = () => {
  // TODO: get reports from backend
  const reports = [
    {
      username: "reporter username",
      review: "review that was reported",
      reason:
        "reason why review was reported reason why review was reported reason why review was reported reason why review was reported",
    },
    {
      username: "reporter username",
      review: "review that was reported",
      reason:
        "reason why review was reported reason why review was reported reason why review was reported reason why review was reported",
    },
    {
      username: "reporter username",
      review: "review that was reported",
      reason:
        "reason why review was reported reason why review was reported reason why review was reported reason why review was reported",
    },
  ];
  return (
    <div>
      <ReportList reports={reports} />
    </div>
  );
};
export default ReportDashboard;
