
import React from "react";
import GenderRatioChart from "../components/charts/GenderRatioChart"
import DepartmentHeadcountChart from "../components/charts/DepartmentHeadcountChart";
import LocationWiseChart from "../components/charts/LocationWiseChart";
import AgeTenureChart from "../components/charts/AgeTenureChart";
import RoleWiseChart from "../components/charts/RoleWiseChart";

const DemographicsPage = () => {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-800">
        Workforce Demographics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GenderRatioChart />
        <DepartmentHeadcountChart />
        <LocationWiseChart />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AgeTenureChart />
        <RoleWiseChart />
      </div>
    </div>
  );
};

export default DemographicsPage;

