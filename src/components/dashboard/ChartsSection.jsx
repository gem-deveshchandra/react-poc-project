import React from "react";
import EmployeeByRoleChart from "../charts/EmployeeByRoleChart";
import EmployeesByLocationMap from "../charts/EmployeesByLocationMap";
import NewHiresVsTerminations from "../charts/NewHiresVsTerminations";
import CandidateInfoChart from "../charts/CandidateInfoChart";
const ChartsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <EmployeeByRoleChart />
      <EmployeesByLocationMap />
      <NewHiresVsTerminations />
      <CandidateInfoChart/>
    </div>
  );
};

export default ChartsSection;
