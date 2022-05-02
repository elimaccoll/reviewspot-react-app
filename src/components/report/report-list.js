import React from "react";
import ReportListItem from "./report-list-item";

const ReportList = ({ reports }) => {
  const prev = reports && reports.prev;
  const next = reports && reports.next;
  const total = reports && reports.total;
  return (
    <ul className="list-group">
      {reports.reports &&
        reports.reports.map((report) => {
          return <ReportListItem report={report} />;
        })}
    </ul>
  );
};
export default ReportList;
