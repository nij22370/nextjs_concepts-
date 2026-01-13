"use client";

import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
];

export default function MyPieChart() {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart>
        <Tooltip />
        <Legend />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
