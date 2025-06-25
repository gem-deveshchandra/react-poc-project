import React from "react";
import data from "./../../data/employeeRole";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import ChartCardWrapper from "./ChartCardWrapper";

const EmployeeByRoleChart = () => {
  const chart = (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="role" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#38a3a5" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );

  const table = (
    <div className="p-4">
      <table className="min-w-full border border-gray-200 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Role</th>
            <th className="p-2">Employee Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.role}>
              <td className="p-2">{row.role}</td>
              <td className="p-2">{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <ChartCardWrapper
      title="Employee Count by Role"
      chartContent={chart}
      tableContent={table}
    />
  );
};

export default EmployeeByRoleChart;
