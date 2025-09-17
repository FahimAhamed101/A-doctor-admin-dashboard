"use client"

import { useState } from 'react'
import { Settings, ChevronDown } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import AreaChartComponent from './AreaChart'

const chartData = [
  { day: "Sat", value: 300 },
  { day: "Sun", value: 280 },
  { day: "Mon", value: 200 },
  { day: "Tue", value: 320 },
  { day: "Wed", value: 160 },
  { day: "Thu", value: 300 },
  { day: "Fri", value: 200 },
]

export default function ClinicDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('Weekly')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const periods = [
    { value: 'Weekly', label: 'Weekly' },
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Yearly', label: 'Yearly' }
  ]

  return (
    <div className="w-full  bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-gray-600" />
          <h2 className="text-gray-700 font-medium">Clinic Info</h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Clinic Information */}
        <div className="space-y-4 mb-8">
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <div>
              <p className="text-gray-500 text-sm mb-1">Clinic Name</p>
              <p className="text-gray-900 font-medium">Metro Health Center</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Address Line</p>
              <p className="text-gray-900 font-medium">1234 Elm Street</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Email</p>
              <p className="text-gray-900 font-medium">mahmud.uluxdesign@gmail.com</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">City</p>
              <p className="text-gray-900 font-medium">San Juan</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Contact Number</p>
              <p className="text-gray-900 font-medium">(555) 456-7890</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">State</p>
              <p className="text-gray-900 font-medium">Puerto Rico</p>
            </div>
          </div>
        </div>

        {/* Operational Info */}
        <div className="mb-8">
          <h3 className="text-gray-700 font-medium mb-4">Operational Info</h3>
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <div>
              <p className="text-gray-500 text-sm mb-1">Opening Hours</p>
              <p className="text-gray-900 font-medium">9:00AM - 10:00PM</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Emergency Service</p>
              <p className="text-gray-900 font-medium">24 hours</p>
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-gray-700 font-medium">Clinic Performance Insights</h3>
            
            {/* Custom Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between gap-2 px-3 py-1.5 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              >
                <span className="text-gray-700">{selectedPeriod}</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-1 w-24 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {periods.map((period) => (
                    <button
                      key={period.value}
                      onClick={() => {
                        setSelectedPeriod(period.value)
                        setIsDropdownOpen(false)
                      }}
                      className="block w-full px-3 py-2 text-sm text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                    >
                      {period.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Chart */}
          <div className="w-full rounded-lg p-4">
      <AreaChartComponent/>
</div>
     
          
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
      
    </div>
  )
}