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

const certificateData = [
  { category: "Technical", total: 120 },
  { category: "Behavioural", total: 45 },
  { category: "Functional", total: 60 },
  { category: "Compliance", total: 32 },
];

const chart = (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={certificateData}
      margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" interval={0} angle={-25} textAnchor="end" tick={{ fontSize: 10 }}    />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Bar dataKey="total" fill="#2196f3" name="Total Certificates" />
    </BarChart>
  </ResponsiveContainer>
);

const table = (
  <div className="overflow-auto">
    <table className="min-w-full border border-gray-200 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-3 py-2 text-left">Category</th>
          <th className="border px-3 py-2 text-right">Total Certificates</th>
        </tr>
      </thead>
      <tbody>
        {certificateData.map((item, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            <td className="border px-3 py-2">{item.category}</td>
            <td className="border px-3 py-2 text-right">{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CertificateDistribution = () => {
  return (
    <ChartCardWrapper
      title="Certificate Distribution"
      chartContent={chart}
      tableContent={table}
      defaultView = "table"
    />
  );
};

export default CertificateDistribution;
