import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReports } from "../../actions/reports-actions";
import ReportList from "./report-list";

const ReportDashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => getReports(dispatch), [dispatch]);
  const reports = useSelector((state) => state.reports);
  const noReports = !reports || (reports && reports.total === 0);
  return (
    <div>
      <div className={`${noReports ? "d-none" : "d-block"}`}>
        <ReportList reports={reports && reports} />
      </div>
      <div className={`${noReports ? "d-block" : "d-none"} text-center mt-5`}>
        <h2>No Active Reports</h2>
      </div>
    </div>
  );
};
export default ReportDashboard;
