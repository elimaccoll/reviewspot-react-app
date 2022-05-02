import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReports } from "../../actions/reports-actions";
import ReportList from "./report-list";

const ReportDashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => getReports(dispatch), [dispatch]);
  const reports = useSelector((state) => state.reports);
  return (
    <div>
      <ReportList reports={reports && reports} />
    </div>
  );
};
export default ReportDashboard;
