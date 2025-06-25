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
const mockProgramData = [
  {
    program: "Leadership Training",
    maleCompletion: 75,
    femaleCompletion: 85,
    maleParticipants: 12,
    femaleParticipants: 14,
    maleHours: 20,
    femaleHours: 22,
  },
  {
    program: "Generative AI",
    maleCompletion: 80,
    femaleCompletion: 83,
    maleParticipants: 15,
    femaleParticipants: 17,
    maleHours: 25,
    femaleHours: 26,
  },
  {
    program: "Asset Management",
    maleCompletion: 78,
    femaleCompletion: 82,
    maleParticipants: 13,
    femaleParticipants: 16,
    maleHours: 22,
    femaleHours: 24,
  },
  {
    program: "Elevate",
    maleCompletion: 85,
    femaleCompletion: 88,
    maleParticipants: 14,
    femaleParticipants: 15,
    maleHours: 28,
    femaleHours: 30,
  },
  {
    program: "Business Continuity Management",
    maleCompletion: 77,
    femaleCompletion: 80,
    maleParticipants: 12,
    femaleParticipants: 14,
    maleHours: 20,
    femaleHours: 22,
  },
  {
    program: "Technical",
    maleCompletion: 83,
    femaleCompletion: 85,
    maleParticipants: 18,
    femaleParticipants: 19,
    maleHours: 27,
    femaleHours: 29,
  },
];

const programChartData = mockProgramData.map((prog) => ({
  program: prog.program,
  totalCompletion: Math.round((prog.maleCompletion + prog.femaleCompletion) / 2),
}));

const chart = (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      layout="vertical"
      data={programChartData}
      margin={{ top: 20, right: 30, left: 80, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={[0, 100]} />
      <YAxis dataKey="program" type="category"  interval={0}  textAnchor="end" tick={{ fontSize: 15 }}/>
      <Tooltip />
      <Legend  />
      <Bar dataKey="totalCompletion" fill="#4caf50" name="Overall Completion %" />
    </BarChart>
  </ResponsiveContainer>
);

const table = (
  <div className="overflow-auto">
    <table className="min-w-full border border-gray-200 text-sm">
      <thead className="bg-gray-100">
      <tr>
          <th className="border px-3 py-2">Program</th>
          <th className="border px-3 py-2">Completion% (Male)</th>
          <th className="border px-3 py-2">Completion% (Female)</th>
          <th className="border px-3 py-2">Participants (Male)</th>
          <th className="border px-3 py-2">Participants (Female)</th>
          <th className="border px-3 py-2">Training Hours (Male)</th>
          <th className="border px-3 py-2">Training Hours (Female)</th>
        </tr>
      </thead>
      <tbody>
        {mockProgramData.map((prog, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            <td className="border px-3 py-2">{prog.program}</td>
            <td className="border px-3 py-2 text-right">{prog.maleCompletion}</td>
            <td className="border px-3 py-2 text-right">{prog.femaleCompletion}</td>
            <td className="border px-3 py-2 text-right">{prog.maleParticipants}</td>
            <td className="border px-3 py-2 text-right">{prog.femaleParticipants}</td>
            <td className="border px-3 py-2 text-right">{prog.maleHours}</td>
            <td className="border px-3 py-2 text-right">{prog.femaleHours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TrainingProgressByProgramsChart = () => {
  return (
    <ChartCardWrapper
      title="Training Progress by Programs"
      chartContent={chart}
      tableContent={table}
    />
  );
};

export default TrainingProgressByProgramsChart;
