"use client"

import { useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Line, LineChart, Legend, Tooltip } from "recharts"
import PieChartComponent from "./PieChart"
import { Icon } from "lucide-react"

const chartData = [
  { month: "Jan", revenue: 98400 },
  { month: "Feb", revenue: 102000 },
  { month: "Mar", revenue: 108000 },
  { month: "Apr", revenue: 115000 },
  { month: "May", revenue: 122000 },
  { month: "Jun", revenue: 128000 },
  { month: "Jul", revenue: 135000 },
  { month: "Aug", revenue: 142000 },
  { month: "Sep", revenue: 148000 },
  { month: "Oct", revenue: 155000 },
  { month: "Nov", revenue: 162000 },
  { month: "Dec", revenue: 170000 },
]
const revenueData = [
  { month: "Jan", revenue: 0 },
  { month: "Feb", revenue: 2000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 10000 },
  { month: "May", revenue: 18000 },
  { month: "Jun", revenue: 28000 },
  { month: "Jul", revenue: 40000 },
  { month: "Aug", revenue: 50000 },
  { month: "Sep", revenue: 55000 },
  { month: "Oct", revenue: 58000 },
  { month: "Nov", revenue: 60000 },
  { month: "Dec", revenue: 60000 },
]

const patientGrowthData = [
  { month: "Jan", patients: 30000 },
  { month: "Feb", patients: 31500 },
  { month: "Mar", patients: 33000 },
  { month: "Apr", patients: 34500 },
  { month: "May", patients: 36000 },
  { month: "Jun", patients: 37500 },
  { month: "Jul", patients: 39000 },
  { month: "Aug", patients: 40500 },
  { month: "Sep", patients: 42000 },
  { month: "Oct", patients: 43500 },
  { month: "Nov", patients: 45000 },
  { month: "Dec", patients: 45000 },
]

const engagementData = [
  { name: "Active Users", value: 74, color: "#3b82f6" },
  { name: "Inactive Users", value: 26, color: "#e5e7eb" },
]
const patientData = [
  { month: "Jan", patients: 35000, newPatients: 2000 },
  { month: "Feb", patients: 36500, newPatients: 2100 },
  { month: "Mar", patients: 38000, newPatients: 2200 },
  { month: "Apr", patients: 39500, newPatients: 2300 },
  { month: "May", patients: 40500, newPatients: 2400 },
  { month: "Jun", patients: 41500, newPatients: 2500 },
  { month: "Jul", patients: 42000, newPatients: 2600 },
  { month: "Aug", patients: 42500, newPatients: 2700 },
  { month: "Sep", patients: 43000, newPatients: 2800 },
  { month: "Oct", patients: 43500, newPatients: 2900 },
  { month: "Nov", patients: 44000, newPatients: 3000 },
  { month: "Dec", patients: 45000, newPatients: 3100 },
]
export default function AnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Comprehensive insights into platform performance and business metrics
            </p>
          </div>
          <div className="flex items-center gap-3">
      
       <div className="flex flex-col items-center gap-2">
 
  <select 
    className="px-3 py-2 shadow-md rounded-lg text-sm bg-white min-w-[140px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400"
    value={"Last 30 Days"}
    onChange={(e) => console.log(e.target.value)}
  >
    <option value="Last 7 Days">Last 7 Days</option>
    <option value="Last 30 Days">Last 30 Days</option>
    <option value="Last 90 Days">Last 90 Days</option>
    <option value="Year to Date">Year to Date</option>
  </select>
</div>
            <button className="px-4 py-2 bg-[#2E8BC9] hover:bg-blue-700 text-white rounded-md transition-colors flex items-center">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 20H18" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12 16V4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12C16 12 13.054 16 12 16C10.9459 16 8 12 8 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Export Report
             

            </button>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Revenue Card */}
          <div className="bg-white rounded-lg  shadow-md hover:shadow-md transition-shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
               <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="6" fill="#F0F5FE"/>
<path d="M22.625 20.6296C22.625 18.625 20.7782 17 18.5 17C16.2218 17 14.375 18.625 14.375 20.6296C14.375 22.6342 15.5 23.7407 18.5 23.7407C21.5 23.7407 23 24.7778 23 27.3704C23 29.963 20.9853 31 18.5 31C16.0147 31 14 29.375 14 27.3704" stroke="#237B10" stroke-width="1.51875" stroke-linecap="round"/>
<path d="M18.5 15V17M18.5 33V31" stroke="#237B10" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.5 24H34M26.5 24C26.5 24.7002 28.4943 26.0085 29 26.5M26.5 24C26.5 23.2998 28.4943 21.9915 29 21.5" stroke="#237B10" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              
            </div><p className="text-xs  text-gray-600 mb-1">Total Revenue</p>
            <div className="text-2xl font-bold text-gray-900">$495K</div>
            <p className="text-xs flex gap-1 text-gray-500 mt-1"><span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 12.75L6.75 8.25L9.75 11.25L15.75 5.25M15.75 5.25H12.75M15.75 5.25V8.25" stroke="#237B10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span><span className="text-[#237B10]">+20.1%</span> from last month</p>
          </div>

          {/* Active Users Card */}
     <div className="bg-white rounded-lg shadow-md hover:shadow-md transition-shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
       <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="6" fill="#F0F5FE"/>
<path d="M32 34V31C32 28.1716 32 26.7573 31.1213 25.8787C30.2426 25 28.8284 25 26 25H22C19.1716 25 17.7574 25 16.8787 25.8787C16 26.7573 16 28.1716 16 31C16 31.9319 16 32.3978 16.1522 32.7653C16.3552 33.2554 16.7446 33.6447 17.2346 33.8477C17.6022 34 18.0681 34 19 34" stroke="#2E8BC9" stroke-width="1.51875" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.5 25L24.5 34M19 25.5V34" stroke="#2E8BC9" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 31H26.5C27.3284 31 28 31.6716 28 32.5C28 33.3284 27.3284 34 26.5 34H24.5" stroke="#2E8BC9" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 18.5V17.5C27.5 15.567 25.933 14 24 14C22.067 14 20.5 15.567 20.5 17.5V18.5C20.5 20.433 22.067 22 24 22C25.933 22 27.5 20.433 27.5 18.5Z" stroke="#2E8BC9" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


              </div>
              
            </div><p className="text-xs  text-gray-600 mb-1">Active Patients</p>
            <div className="text-2xl font-bold text-gray-900">847K</div>
            <p className="text-xs flex gap-1 text-gray-500 mt-1"><span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 12.75L6.75 8.25L9.75 11.25L15.75 5.25M15.75 5.25H12.75M15.75 5.25V8.25" stroke="#237B10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span><span className="text-[#237B10]">+0.8%</span>vs last month</p>
          </div>

       <div className="bg-white rounded-lg  shadow-md hover:shadow-md transition-shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
               <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="6" fill="#F0F5FE"/>
<path d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z" stroke="#B42121" stroke-width="1.51875"/>
<path d="M24 20V24L26 26" stroke="#B42121" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


              </div>
              
            </div><p className="text-xs  text-gray-600 mb-1">Avg Response Time</p>
            <div className="text-2xl font-bold text-gray-900">245ms</div>
            <p className="text-xs flex gap-1 text-gray-500 mt-1"><span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 12.75L6.75 8.25L9.75 11.25L15.75 5.25M15.75 5.25H12.75M15.75 5.25V8.25" stroke="#B42121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</span><span className="text-[#237B10]">+12%</span> vs target</p>
          </div>

          <div className="bg-white rounded-lg  shadow-md hover:shadow-md transition-shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
               <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="6" fill="#F0F5FE"/>
<path d="M34 24H31.52C31.083 23.9991 30.6577 24.1413 30.3091 24.405C29.9606 24.6686 29.708 25.0392 29.59 25.46L27.24 33.82C27.2249 33.8719 27.1933 33.9175 27.15 33.95C27.1067 33.9825 27.0541 34 27 34C26.9459 34 26.8933 33.9825 26.85 33.95C26.8067 33.9175 26.7751 33.8719 26.76 33.82L21.24 14.18C21.2249 14.1281 21.1933 14.0825 21.15 14.05C21.1067 14.0175 21.0541 14 21 14C20.9459 14 20.8933 14.0175 20.85 14.05C20.8067 14.0825 20.7751 14.1281 20.76 14.18L18.41 22.54C18.2925 22.9592 18.0414 23.3285 17.6949 23.592C17.3483 23.8555 16.9253 23.9988 16.49 24H14" stroke="#237B10" stroke-width="1.51875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


              </div>
              
            </div><p className="text-xs  text-gray-600 mb-1">System Uptime</p>
            <div className="text-2xl font-bold text-gray-900">99.8%</div>
            <p className="text-xs flex gap-1 text-gray-500 mt-1"><span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 9H14.64C14.3122 8.9993 13.9932 9.10598 13.7318 9.30373C13.4704 9.50147 13.281 9.7794 13.1925 10.095L11.43 16.365C11.4186 16.4039 11.395 16.4382 11.3625 16.4625C11.33 16.4868 11.2906 16.5 11.25 16.5C11.2094 16.5 11.17 16.4868 11.1375 16.4625C11.105 16.4382 11.0814 16.4039 11.07 16.365L6.93 1.635C6.91864 1.59605 6.89495 1.56184 6.8625 1.5375C6.83004 1.51316 6.79057 1.5 6.75 1.5C6.70943 1.5 6.66996 1.51316 6.6375 1.5375C6.60504 1.56184 6.58136 1.59605 6.57 1.635L4.8075 7.905C4.71935 8.21937 4.53104 8.49639 4.27115 8.69401C4.01126 8.89163 3.69399 8.99907 3.3675 9H1.5" stroke="#237B10" stroke-width="1.51875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</span><span className="text-[#237B10]">Stable</span>  this month</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Revenue Trend */}
      <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <div className="pb-4">
        <h3 className="text-lg font-medium text-gray-700">Revenue Trend</h3>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" stroke="#e5e7eb" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: "#6b7280" }} 
              dy={10} 
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
              domain={[0, 200000]}
              ticks={[0, 50000, 100000, 150000, 200000]}
            />
            <Area 
              dataKey="revenue" 
              type="monotone" 
              stroke="#7dd3fc" 
              strokeWidth={2} 
              fill="#7dd3fc" 
              fillOpacity={0.6} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>

          {/* Patient Growth */}
       <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <div className="pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-700">Patient Growth</h3>
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={patientData} 
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="2 2" stroke="#e5e7eb" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: "#6b7280" }} 
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              domain={[0, 50000]}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <Tooltip 
              formatter={(value) => value.toLocaleString()}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            <Legend 
              verticalAlign="top" 
              height={36}
              iconType="circle"
              iconSize={10}
              formatter={(value) => (
                <span className="text-sm text-gray-600">{value}</span>
              )}
            />
            <Line
              type="monotone"
              dataKey="patients"
              name="Total Patients"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ fill: "#3b82f6", strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: "#3b82f6" }}
            />
            <Line
              type="monotone"
              dataKey="newPatients"
              name="New Patients"
              stroke="#d97706"
              strokeWidth={2}
              dot={{ fill: "#d97706", strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: "#d97706" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
            
       </div>          
                  
     
                
               
           
      

     {/* User Engagement Donut Chart */}
<div className="bg-white flex flex-col lg:flex-row w-full rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
  {/* Chart Section */}
  <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
    <PieChartComponent/>
  </div>
  

  {/* Metrics Section */}
  <div className="my-auto w-full"> 
    
    <div className="flex p-4">
        <h2 className="text-xl p-4 font-semibold text-gray-900 mb-6">System Performance Metrics</h2>
  </div>
     <div className="w-full  pl-0 lg:pl-8 ">
 
    
   <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* API Response Time */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4">
      <div className="flex items-center justify-between mb-4">
          <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
         <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="48" height="48" rx="6" fill="#F2F8FD"/>
<path d="M32.5 25V20H27.5" stroke="#237B10" stroke-width="1.51875" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.5 20L27.5 25C26.6174 25.8826 26.1762 26.3238 25.6346 26.3726C25.545 26.3807 25.455 26.3807 25.3654 26.3726C24.8238 26.3238 24.3826 25.8826 23.5 25C22.6174 24.1174 22.1761 23.6762 21.6346 23.6274C21.545 23.6193 21.455 23.6193 21.3654 23.6274C20.8238 23.6762 20.3826 24.1174 19.5 25L16.5 28" stroke="#237B10" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </div>
         
        </div> <h3 className="text-sm font-medium text-[#7C7C7C]">API Response Time</h3>
        <div className="text-2xl font-bold text-gray-900">
          245 <span className="text-sm font-normal text-gray-500">ms</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Target: 200ms (+12%)</p>
      </div>
      
      {/* Database Query Time */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4">
        <div className="flex items-center justify-between mb-4">
        
          <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
          <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="48" height="48" rx="6" fill="#F2F8FD"/>
<g clip-path="url(#clip0_4630_74661)">
<path d="M15.6719 18.707L23.868 20.9032L22.4039 26.3673L33.3321 29.2955M33.3321 29.2955L31.3321 25.8314M33.3321 29.2955L29.868 31.2955" stroke="#FF0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4630_74661">
<rect width="24" height="24" fill="white" transform="translate(28.8906 7.60742) rotate(60)"/>
</clipPath>
</defs>
</svg>

          </div>
        </div>  <h3 className="text-sm font-medium text-[#7C7C7C]">Database Query Time</h3>
        <div className="text-2xl font-bold text-gray-900">
         <span className="text-[#B42121]">89</span>  <span className="text-sm font-normal text-gray-500">ms</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Target: 100ms (-8%)</p>
      </div>
      
      {/* Uptime */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4">
        <div className="flex items-center justify-between mb-4">
        
          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
          <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="48" height="48" rx="6" fill="#F2F8FD"/>
<path d="M34.5 24H32.02C31.583 23.9991 31.1577 24.1413 30.8091 24.405C30.4606 24.6686 30.208 25.0392 30.09 25.46L27.74 33.82C27.7249 33.8719 27.6933 33.9175 27.65 33.95C27.6067 33.9825 27.5541 34 27.5 34C27.4459 34 27.3933 33.9825 27.35 33.95C27.3067 33.9175 27.2751 33.8719 27.26 33.82L21.74 14.18C21.7249 14.1281 21.6933 14.0825 21.65 14.05C21.6067 14.0175 21.5541 14 21.5 14C21.4459 14 21.3933 14.0175 21.35 14.05C21.3067 14.0825 21.2751 14.1281 21.26 14.18L18.91 22.54C18.7925 22.9592 18.5414 23.3285 18.1949 23.592C17.8483 23.8555 17.4253 23.9988 16.99 24H14.5" stroke="#2E8BC9" stroke-width="1.51875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </div>
        </div>  <h3 className="text-sm font-medium text-gray-600">Uptime</h3>
        <div className="text-2xl font-bold text-gray-900">99.8%</div>
        <p className="text-xs text-gray-500 mt-1">Target: 99.9%</p>
      </div>
    </div>
  </div>
  </div>
 
</div>

        {/* System Performance Metrics */}
      
      </div>
    </div>
  )
}
