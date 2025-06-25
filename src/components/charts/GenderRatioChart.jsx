import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChartCardWrapper from "./ChartCardWrapper"; // Update path as needed

const data = [
  { name: "Male", value: 780 },
  { name: "Female", value: 340 },
];

const COLORS = ["#3B82F6", "#F472B6"];

const chart = (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={100}
        paddingAngle={3}
        dataKey="value"
        nameKey="name"
        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

const table = (
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-3 py-2 text-left border">Gender</th>
          <th className="px-3 py-2 text-right border">Count</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.name} className="hover:bg-gray-50">
            <td className="px-3 py-2 border">{row.name}</td>
            <td className="px-3 py-2 text-right border">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const GenderRatioChart = () => {
  return (
    <ChartCardWrapper
      title="Gender Ratio"
      chartContent={chart}
      tableContent={table}
    
    />
  );
};

export default GenderRatioChart;
