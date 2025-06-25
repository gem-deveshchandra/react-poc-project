import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useMediaQuery } from "@mui/material";
import ChartCardWrapper from "./ChartCardWrapper"; 

const data = [
  { quarter: "Q1", Applied: 150, Shortlisted: 90, Interviewed: 45, Offered: 20, Joined: 2 },
  { quarter: "Q2", Applied: 180, Shortlisted: 100, Interviewed: 50, Offered: 22, Joined: 0 },
  { quarter: "Q3", Applied: 170, Shortlisted: 110, Interviewed: 60, Offered: 20, Joined: 2 },
  { quarter: "Q4", Applied: 160, Shortlisted: 90, Interviewed: 40, Offered: 20, Joined: 7 },
];

const COLORS = {
  Applied: "#3b82f6",       
  Shortlisted: "#2563eb",  
  Interviewed: "#f59e0b",  
  Offered: "#d97706",      
  Joined: "#10b981",        
};

const keys = Object.keys(COLORS);

const CandidateInfoChart = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const chart = (
    <ResponsiveContainer width="100%" height={isMobile ? 300 : 250}>
      <BarChart
        data={data}
        margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
      >
        <XAxis
          dataKey="quarter"
          tick={{ fontSize: isMobile ? 10 : 12 }}
        />
        <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip
          formatter={(value, name) => [value, name]}
          cursor={{ fill: "rgba(0,0,0,0.1)" }}
        />
        <Legend
          verticalAlign={isMobile ? "bottom" : "top"}
          layout={isMobile ? "vertical" : "horizontal"}
          align="center"
          height={isMobile ? 60 : 36}
          wrapperStyle={{ fontSize: isMobile ? "10px" : "12px" }}
        />
        {keys.map((key) => (
          <Bar
            key={key}
            dataKey={key}
            fill={COLORS[key]}
            radius={[4, 4, 0, 0]}
            isAnimationActive={false}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );

  const table = (
    <div className="overflow-auto">
      <table className="table-auto w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100 sticky top-0">
          <tr>
            <th className="border px-3 py-1 text-left">Quarter</th>
            {keys.map((k) => (
              <th key={k} className="border px-3 py-1 text-right">{k}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ quarter, ...stages }) => (
            <tr key={quarter} className="hover:bg-gray-50">
              <td className="border px-3 py-1 font-medium">{quarter}</td>
              {keys.map((k) => (
                <td key={k} className="border px-3 py-1 text-right">{stages[k]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <ChartCardWrapper
      title="Candidate Funnel (Quarter-wise)"
      chartContent={chart}
      tableContent={table}
    />
  );
};

export default CandidateInfoChart;
