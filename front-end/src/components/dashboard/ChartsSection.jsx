import React, { useEffect } from "react";
import EmployeeByRoleChart from "../charts/EmployeeByRoleChart";
import EmployeesByLocationMap from "../charts/EmployeesByLocationMap";
import NewHiresVsTerminations from "../charts/NewHiresVsTerminations";
import CandidateInfoChart from "../charts/CandidateInfoChart";
import { useDispatch, useSelector } from "react-redux";
import { getAllDashboardCharts } from "../../redux/dashboardChartsSlice";

const ChartsSection = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.dashboardCharts
  );

  useEffect(() => {
    dispatch(getAllDashboardCharts());
  }, [dispatch]);

  if (loading) return <p>Loading charts...</p>;


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <EmployeeByRoleChart data={data?.roles} />
      <EmployeesByLocationMap locationData={data?.locations} />
      <NewHiresVsTerminations data={data?.newHiresVsTerminations} />
      <CandidateInfoChart data={data?.candidates} />
    </div>
  );
};

export default ChartsSection;
