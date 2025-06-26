import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import ChartCardWrapper from "./ChartCardWrapper";

const mockDepartmentData = [
  {
    department: "HR",
    maleCompletion: 85,
    femaleCompletion: 90,
    malePrograms: 5,
    femalePrograms: 6,
    maleHours: 120,
    femaleHours: 130,
  },
  {
    department: "IT",
    maleCompletion: 78,
    femaleCompletion: 82,
    malePrograms: 6,
    femalePrograms: 5,
    maleHours: 100,
    femaleHours: 110,
  },
  {
    department: "Sales",
    maleCompletion: 80,
    femaleCompletion: 88,
    malePrograms: 4,
    femalePrograms: 5,
    maleHours: 95,
    femaleHours: 105,
  },
  {
    department: "Fullstack",
    maleCompletion: 90,
    femaleCompletion: 85,
    malePrograms: 7,
    femalePrograms: 6,
    maleHours: 140,
    femaleHours: 135,
  },
  {
    department: "DevOps",
    maleCompletion: 82,
    femaleCompletion: 78,
    malePrograms: 5,
    femalePrograms: 4,
    maleHours: 110,
    femaleHours: 100,
  },
  {
    department: "Python",
    maleCompletion: 88,
    femaleCompletion: 84,
    malePrograms: 6,
    femalePrograms: 5,
    maleHours: 130,
    femaleHours: 120,
  },
  {
    department: "Infrastructure",
    maleCompletion: 75,
    femaleCompletion: 70,
    malePrograms: 4,
    femalePrograms: 3,
    maleHours: 90,
    femaleHours: 85,
  },
  {
    department: ".NET",
    maleCompletion: 85,
    femaleCompletion: 80,
    malePrograms: 6,
    femalePrograms: 5,
    maleHours: 125,
    femaleHours: 115,
  },
];


const departmentChartData = mockDepartmentData.map((dept) => ({
  department: dept.department,
  totalCompletion: Math.round((dept.maleCompletion + dept.femaleCompletion) / 2),
}));

const chart = (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      layout="vertical"
      data={departmentChartData}
      margin={{ top: 20, right: 30, left: 60, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={[0, 100]} />
      <YAxis dataKey="department" type="category" interval={0}  textAnchor="end" tick={{ fontSize: 15 }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="totalCompletion" fill="#3f51b5" name="Overall Completion %" />
    </BarChart>
  </ResponsiveContainer>
);

const table = (
  <div className="overflow-auto">
    <table className="min-w-full border border-gray-200 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-3 py-2">Department</th>
          <th className="border px-3 py-2">Completion% (Male)</th>
          <th className="border px-3 py-2">Completion% (Female)</th>
          <th className="border px-3 py-2">Participants (Male)</th>
          <th className="border px-3 py-2">Participants (Female)</th>
          <th className="border px-3 py-2">Training Hours (Male)</th>
          <th className="border px-3 py-2">Training Hours (Female)</th>
        </tr>
      </thead>
      <tbody>
        {mockDepartmentData.map((dept, i) => (
          <tr key={i} className="hover:bg-gray-50">
            <td className="border px-3 py-2">{dept.department}</td>
            <td className="border px-3 py-2 text-right">{dept.maleCompletion}</td>
            <td className="border px-3 py-2 text-right">{dept.femaleCompletion}</td>
            <td className="border px-3 py-2 text-right">{dept.malePrograms}</td>
            <td className="border px-3 py-2 text-right">{dept.femalePrograms}</td>
            <td className="border px-3 py-2 text-right">{dept.maleHours}</td>
            <td className="border px-3 py-2 text-right">{dept.femaleHours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TrainingProgressByDepartmentChart = () => {
  return (
    <ChartCardWrapper
      title="Training Progress by Department"
      chartContent={chart}
      tableContent={table}
    />
  );
};

export default TrainingProgressByDepartmentChart;
