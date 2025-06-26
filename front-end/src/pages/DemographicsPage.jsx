
import React, { useEffect } from "react";
import GenderRatioChart from "../components/charts/GenderRatioChart";
import DepartmentHeadcountChart from "../components/charts/DepartmentHeadcountChart";
import LocationWiseChart from "../components/charts/LocationWiseChart";
import AgeTenureChart from "../components/charts/AgeTenureChart";
import RoleWiseChart from "../components/charts/RoleWiseChart";
import { useDispatch, useSelector } from "react-redux";
import { getAllDemographicData } from "../redux/demographicDataSlice";
const DemographicsPage = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state) => state.demographicData
  );
  useEffect(() => {
    dispatch(getAllDemographicData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-semibold text-[#38a3a5]" e>
        Workforce Demographics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GenderRatioChart data={data.genderRatio} />
        <DepartmentHeadcountChart data={data.departmentHeadcount} />
        <LocationWiseChart data={data.locationsData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AgeTenureChart data={data.ageTenureData} />
        <RoleWiseChart data={data.rolesData} />
      </div>
    </div>
  );
};

export default DemographicsPage;

