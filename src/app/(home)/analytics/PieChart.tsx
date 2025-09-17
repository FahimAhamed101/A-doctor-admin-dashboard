import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { pieData, stats } from './data'



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
      fontSize={14}
      fontWeight={700}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartComponent() {
    return (
        <div className='shadow-md '>
       
            <div className="flex gap-6 justify-center  rounded-xl">

                <div className="w-full bg-white flex flex-col justify-center items-center mb-8 rounded-lg p-6 h-[100%] ">
                   
                   <h2 className="text-lg font-semibold text-gray-900 mb-4">User Engagement</h2>
                
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart width={400} height={600}>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={120}
                                dataKey="value"
                                label={renderCustomizedLabel}
                                labelLine={false}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="bg-blue-50 mt-6 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 w-[304px]">
                        {pieData.map((item, i) => (
                            <div key={i} className="flex justify-between items-center mb-1">
                                <div className="flex items-center gap-2">
                                    <span
                                        className="w-2.5 h-2.5 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    ></span>
                                    {item.name}
                                </div>
                                <span className="font-semibold">{item.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
             
            </div>
        </div>
    )
}
