import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { data } from './data'


export default function AreaChartComponent() {
    return (
        <div className="bg-white   rounded-lg p-6 w-full mx-auto ">
         
            <ResponsiveContainer width="100%" height={286}>
  <AreaChart data={data}>
    <defs>
      <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.4} />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.05} />
      </linearGradient>
    </defs>
    <CartesianGrid strokeDasharray="3 3" vertical={false} />
    <XAxis 
      dataKey="day"  tick={{ dy: 10 }} 
      axisLine={false}  // Hide X-axis line
      tickLine={false} // Hide tick lines
    />
    <YAxis 
      domain={[0, 400]} 
      tickFormatter={(val) => `${val}%`} 
      axisLine={false}  // Hide Y-axis line
      tickLine={false} // Hide tick lines
    />
    <Tooltip formatter={(value) => `${value}%`} />
    <Area
      type="monotone"
      dataKey="value"
      stroke="#3B82F6"
      fillOpacity={1}
      fill="url(#colorBlue)"
      dot={{ r: 8, stroke: "#fff", strokeWidth: 2, fill: "#2E8BC9" }}
    />
  </AreaChart>
</ResponsiveContainer>
        </div>
    )
}
