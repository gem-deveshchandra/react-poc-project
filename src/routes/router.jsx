import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ProfilePage from "../pages/ProfilePage";
import EmployeeTable from "../pages/EmployeeTable";
import DemographicsPage from "../pages/DemographicsPage";
import EmployeeDevelopmentPage from "../pages/EmployeeDevelopment";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "employee-details",
        element: <EmployeeTable />,
        errorElement: <ErrorPage />,
      },
      {
        path: "demographics",
        element: <DemographicsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "employee-development",
        element: <EmployeeDevelopmentPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);
