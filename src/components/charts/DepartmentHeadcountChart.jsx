import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import ChartCardWrapper from "./ChartCardWrapper"; // adjust import path if needed
const data = [
  { department: "Java", Male: 30, Female: 20 },
  { department: "Marketing", Male: 15, Female: 25 },
  { department: "HR", Male: 10, Female: 30 },
  { department: "Sales", Male: 25, Female: 15 },
  { department: "Finance", Male: 12, Female: 18 },
  { department: "Full Stack", Male: 22, Female: 28 },
  { department: "DevOps", Male: 18, Female: 12 },
  { department: "Python", Male: 20, Female: 25 },
  { department: "Infrastructure", Male: 17, Female: 13 },
  { department: ".NET", Male: 14, Female: 16 },
];


const chart = (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={data}
      margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="department" interval={0} angle={-25} textAnchor="end" tick={{ fontSize: 10 }}    />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Male" stackId="a" fill="#3B82F6" name="Male" radius={[4, 4, 0, 0]} />
      <Bar dataKey="Female" stackId="a" fill="#F472B6" name="Female" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

const table = (
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-3 py-2 text-left border">Department</th>
          <th className="px-3 py-2 text-right border">Male</th>
          <th className="px-3 py-2 text-right border">Female</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.department} className="hover:bg-gray-50">
            <td className="px-3 py-2 border">{row.department}</td>
            <td className="px-3 py-2 text-right border">{row.Male}</td>
            <td className="px-3 py-2 text-right border">{row.Female}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const DepartmentHeadcountChart = () => {
  return (
    <ChartCardWrapper
      title="Department-wise Headcount"
      chartContent={chart}
      tableContent={table}

    />
  );
};

export default DepartmentHeadcountChart;
