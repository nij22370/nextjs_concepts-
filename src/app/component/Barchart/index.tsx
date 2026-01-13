"use client"; // needed for Next.js App Router

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "2017", views: 1000, subs: 400 },
  { name: "2018", views: 3000, subs: 900 },
  { name: "2019", views: 2000, subs: 600 },
  { name: "2020", views: 2780, subs: 800 },
  { name: "2021", views: 1890, subs: 700 },
  { name: "2022", views: 2390, subs: 900 },
  { name: "2023", views: 3490, subs: 1000 },
  { name: "2024", views: 4000, subs: 1200 },
  { name: "2025", views: 4500, subs: 1500 },
];

export default function ViewsChart() {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="views" fill="#2193FF" />
      <Bar dataKey="subs" fill="#FF8042" />
    </BarChart>
  );
}
