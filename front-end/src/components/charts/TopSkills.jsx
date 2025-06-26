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
const topSkillsData = [
  { skill: "Fullstack", score: 95 },
  { skill: "React", score: 90 },
  { skill: "JAVA Backend", score: 68 },
  { skill: "CI/CD", score: 60 },
  { skill: "Problem Solving", score: 75 },
  { skill: "Marketing", score: 30 },
];


const chart = (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      layout="vertical"
      data={topSkillsData}
      margin={{ top: 20, right: 30, left: 80, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={[0, 100]} />
      <YAxis dataKey="skill" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="score" fill="#3b82f6" name="Skill Score" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

const table = (
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-3 py-2 border text-left">Skill</th>
          <th className="px-3 py-2 border text-right">Score</th>
        </tr>
      </thead>
      <tbody>
        {topSkillsData.map(({ skill, score }, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            <td className="px-3 py-2 border">{skill}</td>
            <td className="px-3 py-2 border text-right">{score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TopSkillsChart = () => {
  return (
    <ChartCardWrapper
      title="Top Skills Among Employees"
      chartContent={chart}
      tableContent={table}
      defaultView="table" // Optional if already default
    />
  );
};

export default TopSkillsChart;
