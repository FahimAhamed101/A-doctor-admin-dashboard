"use client"

import type React from "react"
import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import AppointmentStatusChart from "./DonutChart"
import { Calendar, Activity, MapPin, Settings, Users } from "lucide-react"

// Define types for our data structures
interface StatItem {
  title: string
  value: string
  subtitle: string
  isPositive: boolean
  color: string
}

interface ClinicData {
  name: string
  count: number
}

interface RecentActivity {
  clinicId: string
  name: string
  monthlyValue: string
  patient: string
  lastActivity: string
}

interface PlatformHealth {
  name: string
  value: string
  isPositive: boolean
}

interface ProcessingMetric {
  name: string
  value: string
  unit: string
  trend: string
  isPositive: boolean
}

interface FilterState {
  dateRange: string
  clinicStatus: string
  region: string
  integration: string
  patientVolume: string
}

// Icon Components with proper typing
function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  )
}

function ExportIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
      />
    </svg>
  )
}

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
      />
    </svg>
  )
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  )
}

function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  )
}

function EditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  )
}

// FilterDropdown component props interface
interface FilterDropdownProps {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  options: string[]
  filterKey: keyof FilterState
  onFilterChange: (filterKey: keyof FilterState, value: string) => void
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ 
  icon: Icon, 
  label, 
  value, 
  options, 
  filterKey,
  onFilterChange 
}) => (
  <div className="flex justify-between flex-col items-start gap-2">
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-gray-500" />
      <span className="text-xs text-gray-600 font-medium">{label}</span>
    </div>
    <select 
      className="px-3 py-2 shadow-md rounded-lg text-sm bg-white min-w-[140px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400"
      value={value}
      onChange={(e) => onFilterChange(filterKey, e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  </div>
)

export default function Dashboard() {
  const [stats] = useState<StatItem[]>([
    {
      title: "Active Clinics",
      value: "2,340",
      subtitle: "+13.1% vs last 30 days",
      isPositive: true,
      color: "blue",
    },
    {
      title: "In Onboarding",
      value: "1970",
      subtitle: "+15.3% vs last 30 days",
      isPositive: true,
      color: "blue",
    },
    {
      title: "Pending approval",
      value: "2,340",
      subtitle: "-3.3% vs last 30 days",
      isPositive: false,
      color: "red",
    },
    {
      title: "Active Patients",
      value: "2,340",
      subtitle: "+12.3% this month",
      isPositive: true,
      color: "green",
    },
  ])

  const [clinicsData] = useState<ClinicData[]>([
    { name: "Active", count: 2400 },
    { name: "Draft", count: 1800 },
    { name: "Expired", count: 1200 },
    { name: "Pending Approval", count: 800 },
    { name: "Inactive", count: 600 },
  ])

  const [recentActivity] = useState<RecentActivity[]>([
    {
      clinicId: "50047-000012-2",
      name: "HRC Bellevue Hospital Center",
      monthlyValue: "$970.48 USD",
      patient: "8025",
      lastActivity: "1 week ago",
    },
  ])

  const [platformHealth] = useState<PlatformHealth[]>([
    { name: "API Uptime", value: "97.8%", isPositive: true },
    { name: "Database Uptime", value: "77.8%", isPositive: false },
  ])

  const [processingMetrics] = useState<ProcessingMetric[]>([
    { name: "Patient Onboarding", value: "25", unit: "days", trend: "+8%", isPositive: true },
    { name: "Patient Onboarding", value: "2.3", unit: "days", trend: "+8%", isPositive: true },
    { name: "Claims Processing", value: "18", unit: "hours", trend: "+6%", isPositive: true },
    { name: "Compliance", value: "18", unit: "hours", trend: "-9%", isPositive: false },
    { name: "System Integration", value: "12", unit: "days", trend: "+8%", isPositive: true },
  ])

  const [filters, setFilters] = useState<FilterState>({
    dateRange: 'Last 30 Days',
    clinicStatus: 'All Statuses',
    region: 'All Regions',
    integration: 'All Systems',
    patientVolume: 'All Volume'
  })

  const handleFilterChange = (filterKey: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8  ">
        <div className="flex items-center mb-6 space-x-6 border py-3 border-[#DCDCDC]">
          <div className="flex items-center gap-2 pl-5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19.9997H12.01M2 8.81966C4.75011 6.35989 8.31034 5 12 5C15.6897 5 19.2499 6.35989 22 8.81966M5 12.8587C6.86929 11.0264 9.38247 10.0001 12 10.0001C14.6175 10.0001 17.1307 11.0264 19 12.8587M8.5 16.4287C9.43464 15.5125 10.6912 14.9994 12 14.9994C13.3088 14.9994 14.5654 15.5125 15.5 16.4287" stroke="#237B10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<h1 className="text-sm  text-[#237B10]">Online</h1></div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2  rounded-full"> </div>
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3D3D3D" stroke-width="1.5"/>
<path d="M12 8V12L14 14" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Last Update: 0s Ago
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2  rounded-full"></div>
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9767 19.5C19.4017 17.8876 21 15.1305 21 12C21 7.02944 16.9706 3 12 3C11.3126 3 10.6432 3.07706 10 3.22302M16.9767 19.5V16M16.9767 19.5H20.5M7 4.51555C4.58803 6.13007 3 8.87958 3 12C3 16.9706 7.02944 21 12 21C12.6874 21 13.3568 20.9229 14 20.777M7 4.51555V8M7 4.51555H3.5" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Auto-Refresh OFF
            </div>
          </div>
        </div>

     

        <div className="mb-6 bg-white p-4">   {/* Filters */}
        <div className="flex  bg-white flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3342 26.6667C13.334 26.9144 13.403 27.1573 13.5332 27.3681C13.6634 27.5789 13.8498 27.7492 14.0715 27.86L16.7382 29.1933C16.9415 29.2949 17.1674 29.3429 17.3945 29.3326C17.6215 29.3223 17.8422 29.2541 18.0355 29.1346C18.2288 29.015 18.3884 28.848 18.499 28.6494C18.6096 28.4509 18.6676 28.2273 18.6675 28V18.6667C18.6678 18.0058 18.9134 17.3687 19.3568 16.8787L28.9875 6.22667C29.1601 6.03541 29.2736 5.79824 29.3143 5.54384C29.355 5.28945 29.3211 5.02871 29.2167 4.79317C29.1123 4.55762 28.9419 4.35736 28.7262 4.2166C28.5104 4.07584 28.2585 4.00061 28.0008 4H4.00082C3.74296 4.00009 3.49067 4.07495 3.27449 4.21552C3.05831 4.35608 2.88753 4.55631 2.78283 4.79195C2.67813 5.0276 2.644 5.28854 2.68459 5.54319C2.72517 5.79783 2.83872 6.03524 3.01149 6.22667L12.6448 16.8787C13.0882 17.3687 13.3339 18.0058 13.3342 18.6667V26.6667Z" stroke="#3D3D3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <span className="text-lg font-medium">Filters</span>
          </div>
          <div className="flex bg-[#F3F3F3] py-2 px-2 rounded-md items-center gap-2">
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <span className="text-sm">High Priority</span>
          </div>
        <div className="flex bg-[#F3F3F3] py-2 px-2 rounded-md items-center gap-2">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <span className="text-sm">New This Week</span>
          </div>
        <div className="flex bg-[#F3F3F3] py-2 px-2 rounded-md items-center gap-2">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <span className="text-sm">Needs Review</span>
          </div>
          <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-[#2E8BC9] text-white text-sm rounded-lg hover:bg-blue-700">
           <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21V14C17 13.7348 16.8946 13.4804 16.7071 13.2929C16.5196 13.1054 16.2652 13 16 13H8C7.73478 13 7.48043 13.1054 7.29289 13.2929C7.10536 13.4804 7 13.7348 7 14V21M7 3V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8H15M15.2 3C15.7275 3.00751 16.2307 3.22317 16.6 3.6L20.4 7.4C20.7768 7.76926 20.9925 8.27246 21 8.8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H15.2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Save View
          </button>
        </div>
          <div className="relative mb-4">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search clinics, IDs, accounts..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter Section */}
          <div className="bg-white rounded-lg shadow-sm  p-4 mb-6">
            <div className="flex flex-wrap justify-between gap-6">
              <FilterDropdown
                icon={Calendar}
                label="Date Range"
                value={filters.dateRange}
                filterKey="dateRange"
                options={['Last 30 Days', 'Last 7 Days', 'Today', 'Last 90 Days', 'Custom Range']}
                onFilterChange={handleFilterChange}
              />
              
              <FilterDropdown
                icon={Activity}
                label="Clinics Status"
                value={filters.clinicStatus}
                filterKey="clinicStatus"
                options={['All Statuses', 'Active', 'Inactive', 'Pending', 'Under Review']}
                onFilterChange={handleFilterChange}
              />
              
              <FilterDropdown
                icon={MapPin}
                label="Region"
                value={filters.region}
                filterKey="region"
                options={['All Regions', 'North America', 'Europe', 'Asia Pacific', 'Latin America']}
                onFilterChange={handleFilterChange}
              />
              
              <FilterDropdown
                icon={Settings}
                label="Integration"
                value={filters.integration}
                filterKey="integration"
                options={['All Systems', 'Connected', 'Pending', 'Failed', 'Not Connected']}
                onFilterChange={handleFilterChange}
              />
              
              <FilterDropdown
                icon={Users}
                label="Patient Volume"
                value={filters.patientVolume}
                filterKey="patientVolume"
                options={['All Volume', 'High (1000+)', 'Medium (500-999)', 'Low (0-499)']}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg  p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      stat.color === "blue" ? "bg-blue-500" : stat.color === "red" ? "bg-red-500" : "bg-green-500"
                    }`}
                  ></div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">{stat.title}</h3>
                <p className={`text-xs ${stat.isPositive ? "text-green-600" : "text-red-600"}`}>{stat.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-4 mb-8">
        {/* Clinics by Stage Chart */}
        {/* Peak Hours Chart */}
        <div className="bg-white rounded-lg  shadow-sm lg:col-span-1">
          <div className="p-6 ">
            <h2 className="text-lg font-semibold">Clinics by Stages</h2>
            
          </div>
          <div className="p-6">
            <div className="h-[300px] relative">
              <ResponsiveContainer width="100%" height="100%" className="absolute inset-0">
                <BarChart data={clinicsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: "transparent" }} />
                  <Bar dataKey="count" fill="#2E8BC9" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <AppointmentStatusChart />
 {/* Platform Health */}
        <div className="bg-white rounded-lg flex flex-col items-center justify-center shadow-sm ">
          <div className="p-6 w-full text-center">
            <h2 className="text-lg font-semibold">Platform Health</h2>
          </div>
          <div className="p-6 w-full max-w-md">
            <div className="space-y-6">
              {platformHealth.map((health, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{health.name}</span>
                    <span className="text-sm font-bold text-gray-900">{health.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${health.isPositive ? "bg-green-500" : "bg-red-500"}`} 
                      style={{ width: health.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 ">
            <h2 className="text-lg font-semibold">Average Processing Time</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              {processingMetrics.map((metric, index) => (
                <div key={index} className="space-y-1">
                  {metric.value &&(  
                    <div className="text-lg font-semibold text-gray-900">
                      {metric.value} <span className="text-sm font-normal text-gray-600">{metric.unit}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">{metric.name}</div>
                    <div className="flex items-center gap-1">
                      {metric.isPositive ? (
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span className={`text-sm font-medium ${metric.isPositive ? "text-green-600" : "text-red-600"}`}>
                        {metric.trend}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
       
      </div>

      {/* Recent Clinics Activity */}
      <div className="bg-white rounded-lg  shadow-sm">
        <div className="flex items-center justify-between p-6 ">
          <div>
             <h2 className="text-lg font-semibold text-[#7C7C7C]">Recent Clinics Activity</h2>    <span className="text-sm text-[#7C7C7C]">Showing 1 of 8 clinics</span>
          </div>
         
          <div className="flex items-center gap-4 text-sm text-gray-500">
        
            <select className="shadow-md rounded px-2 py-1">
              <option>10 Per Page</option>
              <option>25 Per Page</option>
              <option>50 Per Page</option>
            </select>
            <button className="flex items-center shadow-md gap-1 py-1 rounded-md  text-[#7C7C7C] hover:underline">
             <svg width="24" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 20H18" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12 16V4" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12C16 12 13.054 16 12 16C10.9459 16 8 12 8 12" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              Export <svg width="24" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round"/>
<path d="M15.5195 12C15.5195 13.933 13.9525 15.5 12.0195 15.5C10.0865 15.5 8.51953 13.933 8.51953 12C8.51953 10.067 10.0865 8.5 12.0195 8.5C13.9525 8.5 15.5195 10.067 15.5195 12Z" stroke="#3D3D3D" stroke-width="1.5"/>
</svg>

            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#F2F8FD]">
              <tr>
                <th className="px-6 py-2 text-left">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  Clinic ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  Monthly Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  Last Activity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentActivity.map((activity, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{activity.clinicId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{activity.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.monthlyValue}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.patient}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.lastActivity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <EyeIcon className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                      <EditIcon className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}