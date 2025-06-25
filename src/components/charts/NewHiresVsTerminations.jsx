import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useMediaQuery } from "@mui/material";
import ChartCardWrapper from "./ChartCardWrapper"; // Adjust the path as needed
import data from '../../data/newHireTerminationData.json'


const NewHiresVsTerminations = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const chart = (
    <ResponsiveContainer width="100%" height={isMobile ? 300 : 250}>
      <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" tick={{ fontSize: isMobile ? 10 : 12 }} />
        <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
        <Tooltip />
        <Legend
          verticalAlign={isMobile ? "bottom" : "top"}
          layout={isMobile ? "vertical" : "horizontal"}
          align="center"
          height={isMobile ? 60 : 36}
          wrapperStyle={{ fontSize: isMobile ? "10px" : "12px" }}
        />
        <Line
          type="monotone"
          dataKey="newHires"
          stroke="#3b82f6"
          strokeDasharray="3 4"
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="terminations"
          stroke="#ef4444"
          strokeDasharray="3 4"
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="totalEmployees"
          stroke="#10b981"
          strokeDasharray="3 4"
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  const table = (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-3 py-2 text-left border">Month</th>
            <th className="px-3 py-2 text-right border">New Hires</th>
            <th className="px-3 py-2 text-right border">Terminations</th>
            <th className="px-3 py-2 text-right border">Total Employees</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ month, newHires, terminations, totalEmployees }) => (
            <tr key={month} className="hover:bg-gray-50">
              <td className="px-3 py-2 border">{month}</td>
              <td className="px-3 py-2 text-right border">{newHires}</td>
              <td className="px-3 py-2 text-right border">{terminations}</td>
              <td className="px-3 py-2 text-right border">{totalEmployees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <ChartCardWrapper
      title="New Hires Vs Terminations"
      chartContent={chart}
      tableContent={table}
    />
  );
};

export default NewHiresVsTerminations;
