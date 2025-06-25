import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import profile from "../../assets/profile/profile-1.jpg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableIcon from "@mui/icons-material/TableChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const menuItems = [
  { label: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { label: "Employee Data", icon: <TableIcon />, path: "/employee-details" },
  { label: "Demographics", icon: <BarChartIcon />, path: "/demographics" },
  {
    label: "Employee Development",
    icon: <TableIcon />,
    path: "/employee-development",
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`h-full bg-[#202a38] text-white flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-60"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h2 className="text-xl font-bold">HR Dashboard</h2>}
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="text-white"
        >
          {collapsed ? (
            <KeyboardDoubleArrowRightIcon />
          ) : (
            <KeyboardDoubleArrowLeftIcon />
          )}
        </button>
      </div>

      <div className="flex flex-col items-center border-b border-[#4e4e4e] pb-4 px-2">
        <img
          className="rounded-full h-16 w-16 border-2 mb-2"
          src={profile}
          alt="profile"
        />
        {!collapsed && (
          <>
            <p
              className="font-bold text-sm hover:underline cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              Test Hr
            </p>{" "}
            <p className="text-xs text-gray-400">HR</p>
          </>
        )}
      </div>

      <nav className="flex flex-col gap-1 mt-4 px-2">
        {menuItems.map(({ label, icon, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded ${
                isActive
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-gray-300 hover:bg-[#2a3243]"
              }`
            }
          >
            {icon}
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
