// EmployeePerformancePage.jsx
import React from "react";
import TrainingProgressByDepartmentChart from "../components/charts/TrainingProgressByDepartmentChart";
import TrainingProgressByProgramsChart from "../components/charts/TrainingProgressByProgramsChart";
import CertificateDistribution from "../components/charts/CertificateDistribution";
import TopSkillsChart from "../components/charts/TopSkills";

const EmployeeDevelopmentPage = () => {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-800">
        Employee Development Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TrainingProgressByDepartmentChart />
        <TrainingProgressByProgramsChart />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CertificateDistribution />
        <TopSkillsChart />
      </div>
    </div>
  );
};

export default EmployeeDevelopmentPage;

