import React from "react";
import ReportListItem from "./report-list-item";

const ReportList = ({ reports }) => {
  return (
    <ul className="list-group">
      {reports.map((report) => {
        return <ReportListItem report={report} />;
      })}
    </ul>
  );
};
export default ReportList;
