import React from "react";
import kpiData from "../../data/kpi.json";
import KPITile from "../widgets/KPITile.jsx";
const KPISection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {kpiData.map((kpi) => {
       return <KPITile label={kpi.label} value={kpi.value} icon={kpi.icon} />;
      })}
    </div>
  );
};

export default KPISection;
