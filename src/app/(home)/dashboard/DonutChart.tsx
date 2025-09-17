import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const appointmentStatusData = [
  { name: 'New', value: 40 },
  { name: 'Completed', value: 75 },
  { name: 'Canceled', value: 10 }
];

const PIE_COLORS = ['#2E8BC9', '#D6EBFD', '#1A588A']; // Blue, Green, Red

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight={600}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function AppointmentStatusChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm w-full max-w-md mx-auto">
      <div className="p-4 ">
        <h2 className="text-lg font-semibold text-center">Patient Engagement</h2>
      </div>
      <div className="p-6 flex flex-col items-center">
        {/* Pie Chart */}
        <div className="relative h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={appointmentStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                paddingAngle={0}
                label={renderCustomizedLabel}
                outerRadius={90}
                innerRadius={50}
                dataKey="value"
              >
                {appointmentStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number, name: string, props: any) => [
                  `${value} (${(props.payload.percent * 100).toFixed(1)}%)`,
                  name
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-1 gap-3 w-full mt-4 px-4">
          {appointmentStatusData.map((entry, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: PIE_COLORS[index] }}
                />
                <span className="text-sm text-gray-700">{entry.name}</span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                {entry.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}