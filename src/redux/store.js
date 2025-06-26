import { configureStore } from "@reduxjs/toolkit";
import  employeeReducer  from "./employeeSlice";
import  dashboardChartReducer  from "./dashboardChartsSlice";
import dashboardDataReducer from "./dashboardDataSlice"
import demographicDataReducer from './demographicDataSlice';
export const store = configureStore(
    {reducer:{
        employees: employeeReducer,
        dashboardCharts: dashboardChartReducer,
        dashboardData : dashboardDataReducer,
        demographicData: demographicDataReducer,
    },}
)