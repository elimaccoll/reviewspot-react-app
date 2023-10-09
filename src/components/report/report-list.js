import React from "react";
import ReportListItem from "./report-list-item";

const ReportList = ({ reports }) => {
  const prev = reports && reports.prev;
  const next = reports && reports.next;
  const total = reports && reports.total;

  return (
    <ul className="list-group">
      {reports.reports &&
        reports.reports.map((report, ind) => {
          return <ReportListItem report={report} key={ind} />;
        })}
    </ul>
  );
};
export default ReportList;
