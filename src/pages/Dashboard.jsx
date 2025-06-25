import KPISection from "../components/dashboard/KPISection";
import ChartsSection from "../components/dashboard/ChartsSection";
import BottomScrollSection from "../components/dashboard/BottomScrollSection";
const Dashboard = () => {
  return (
    <div className="p-4 space-y-6 min-h-screen">
      <KPISection />
      <ChartsSection />

      <BottomScrollSection/>
    </div>
  );
};

export default Dashboard;
