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
import ChartCardWrapper from "./ChartCardWrapper"; // adjust path if needed



const LocationWiseChart = ({ data }) => {
  const chart = (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="location"
          interval={0}
          angle={-25}
          textAnchor="end"
          tick={{ fontSize: 10 }}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Male" fill="#3B82F6" name="Male" radius={[4, 4, 0, 0]} />
        <Bar
          dataKey="Female"
          fill="#F472B6"
          name="Female"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );

  const table = (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-3 py-2 text-left border">Location</th>
            <th className="px-3 py-2 text-right border">Male</th>
            <th className="px-3 py-2 text-right border">Female</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr key={row.location} className="hover:bg-gray-50">
              <td className="px-3 py-2 border">{row.location}</td>
              <td className="px-3 py-2 text-right border">{row.Male}</td>
              <td className="px-3 py-2 text-right border">{row.Female}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  return (
    <ChartCardWrapper
      title="Location-wise Employees"
      chartContent={chart}
      tableContent={table}
    />
  );
};

export default LocationWiseChart;
