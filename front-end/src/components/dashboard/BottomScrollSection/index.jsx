
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDashboardData } from "../../../redux/dashboardDataSlice";
import TodaysMeetings from "./TodaysMeetings";
import PostedJobs from "./PostedJobs";
import CandidateStatus from "./CandidateStatus";
import UpcomingSection from "./UpcomingSection";
import HiredSection from "./HiredSection";


const BottomScrollSection = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.dashboardData);
  useEffect(() => {
    dispatch(getAllDashboardData());
  }, [dispatch]);
  if (loading) return <p>Loading data...</p>;

  return (
    <section className="w-full mt-6 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <TodaysMeetings meetings={data.todaysMeetings} />
          <PostedJobs jobList={data.postedJobs} />
          <CandidateStatus candidateData={data.candidateStatus} />
        </div>

        <div className="lg:col-span-1 space-y-6">
          <UpcomingSection interviewList={data.upcomingInterviews} />
          <HiredSection hiringList={data.hiredCandidates} />
        </div>
      </div>
    </section>
  );
};

export default BottomScrollSection;
