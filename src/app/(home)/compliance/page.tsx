"use client"

import { Search, MoreHorizontal, Calendar, FileText, TrendingUp, User } from "lucide-react"
import { useState } from "react";

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface SelectProps {
  children: React.ReactNode;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

interface SelectTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface SelectContentProps {
  children: React.ReactNode;
}

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
}

const Select = ({ children, defaultValue, onValueChange }: SelectProps) => {
  const [value, setValue] = useState(defaultValue);
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };
  
  return (
    <select 
      value={value} 
      onChange={handleChange}
      className="px-3 py-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </select>
  );
};
const SelectItem = ({ children, value }: SelectItemProps) => {
  return (
    <option value={value}>{children}</option>
  );
};

const Input = ({ className = '', ...props }: InputProps) => {
  return (
    <input 
      className={`px-3 py-2 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};

// Sample data for demonstration
const complianceData = [
  {
    id: "COMP-001",
    organization: "Metro Health Center",
    status: "Compliant",
    auditType: "HIPAA Audit",
    auditor: "ComplianceFirst LLC",
    lastAudit: "10/07/2024",
    nextDue: "15/07/2024",
    complianceScore: 90.8,
  },
  {
    id: "COMP-002",
    organization: "City Dental Clinic",
    status: "Pending",
    auditType: "OSHA Audit",
    auditor: "SafetyCheck Inc",
    lastAudit: "05/06/2024",
    nextDue: "05/09/2024",
    complianceScore: 75.2,
  },
  {
    id: "COMP-003",
    organization: "Regional Hospital",
    status: "Non-Compliant",
    auditType: "HIPAA Audit",
    auditor: "HealthAudit Partners",
    lastAudit: "15/05/2024",
    nextDue: "15/08/2024",
    complianceScore: 62.5,
  },
  {
    id: "COMP-004",
    organization: "Community Pharmacy",
    status: "Compliant",
    auditType: "Pharmacy Audit",
    auditor: "RxCompliance Group",
    lastAudit: "22/06/2024",
    nextDue: "22/09/2024",
    complianceScore: 95.3,
  },
  {
    id: "COMP-005",
    organization: "Specialty Surgery Center",
    status: "In Review",
    auditType: "Medicare Audit",
    auditor: "Government Compliance Office",
    lastAudit: "30/05/2024",
    nextDue: "30/08/2024",
    complianceScore: 84.7,
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Compliance Management</h1>
            <p className="text-sm text-gray-600 mt-1">
              Monitor regulatory compliance and audit status across all offices
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col space-y-3">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="6" fill="#F0F5FE"/>
                <path d="M32 25.0004C32 30.0004 28.5 32.5005 24.34 33.9505C24.1222 34.0243 23.8855 34.0207 23.67 33.9405C19.5 32.5005 16 30.0004 16 25.0004V18.0004C16 17.7352 16.1054 17.4809 16.2929 17.2933C16.4804 17.1058 16.7348 17.0004 17 17.0004C19 17.0004 21.5 15.8004 23.24 14.2804C23.4519 14.0994 23.7214 14 24 14C24.2786 14 24.5481 14.0994 24.76 14.2804C26.51 15.8104 29 17.0004 31 17.0004C31.2652 17.0004 31.5196 17.1058 31.7071 17.2933C31.8946 17.4809 32 17.7352 32 18.0004V25.0004Z" stroke="#2E8BC9" strokeWidth="2.025" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-sm text-gray-600">Total Audits</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col space-y-3">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="6" fill="#FEF2F2"/>
                <path d="M17 26L20.5 29.5L31 18.5" stroke="#93531F" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-sm text-gray-600">Compliant</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col space-y-3">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="6" fill="#FAF5FF"/>
                <path d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z" stroke="#8226CA" strokeWidth="2.25"/>
                <path d="M23.9922 27H24.0012" stroke="#8226CA" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 24V20" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-sm text-gray-600">Pending Review</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col space-y-3">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="6" fill="#FAF5FF"/>
                <path d="M32 34V31C32 28.1716 32 26.7573 31.1213 25.8787C30.2426 25 28.8284 25 26 25H22C19.1716 25 17.7574 25 16.8787 25.8787C16 26.7573 16 28.1716 16 31C16 31.9319 16 32.3978 16.1522 32.7653C16.3552 33.2554 16.7446 33.6447 17.2346 33.8477C17.6022 34 18.0681 34 19 34" stroke="#BA1C44" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.5 25L24.5 34M19 25.5V34" stroke="#BA1C44" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 31H26.5C27.3284 31 28 31.6716 28 32.5C28 33.3284 27.3284 34 26.5 34H24.5" stroke="#BA1C44" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27.5 18.5V17.5C27.5 15.567 25.933 14 24 14C22.067 14 20.5 15.567 20.5 17.5V18.5C20.5 20.433 22.067 22 24 22C25.933 22 27.5 20.433 27.5 18.5Z" stroke="#BA1C44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-sm text-gray-600">Non-Compliant</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="pb-4">
          <div className="p-6 bg-white shadow-md">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-1">
                <div className="relative flex-1 max-w-md shadow-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Search clients, IDs, locations..." className="pl-10 w-full" />
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all-statuses">
                    <SelectItem value="all-statuses">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </Select>
                  <Select defaultValue="all-ages">
                    <SelectItem value="all-ages">All Ages</SelectItem>
                    <SelectItem value="adult">Adult</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                  </Select>
                </div>
              </div>
              <button className="flex items-center px-4 py-2 shadow-md rounded-md hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center">
                Export
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
  <div className="p-4  border-gray-200">
            <p className="text-sm text-gray-600">Showing 5 of 5 compliance records</p>
          </div>
        {/* Records List */}
        <div className="bg-white rounded-lg grid grid-cols-1 gap-6 border-gray-200">
        

          {/* Record Items */}
          {complianceData.map((item) => (
         <div key={item.id} className="bg-white rounded-xl border-l-2  shadow-md p-6  border-[#2E8BC9]">
        {/* Header Section */}
        <div className=" mb-6">
                <div className="flex-1">  
                  <div className="flex items-start gap-4 mb-4">
                    {item.status === "Compliant" ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#237B10" strokeWidth="1.5"/>
                        <path d="M8 12.5L10.5 15L16 9" stroke="#237B10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : item.status === "Non-Compliant" ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#BA1C44" strokeWidth="1.5"/>
                        <path d="M15 9L9 15M9 9L15 15" stroke="#BA1C44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#93531F" strokeWidth="1.5"/>
                        <path d="M12 8V12M12 16H12.01" stroke="#93531F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    <h3 className="font-semibold text-gray-900 mb-1">{item.organization}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === "Compliant" 
                        ? "bg-green-100 text-green-800" 
                        : item.status === "Non-Compliant"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {item.status}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {item.auditType}
                    </span>
                  </div>
 </div>
<div className="flex  items-end gap-4">
                  <div className="w-80">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">Audit Information</h3>
                    <div className="flex flex-col gap-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">ID:</span>
                        <span className="ml-1 text-gray-600">{item.id}</span>
                      </div>
                      <div className="flex items-center gap-1">
                       
                        <span className="font-medium text-gray-900">Auditor:</span>
                        <span className="ml-1 text-gray-600">{item.auditor}</span>
                      </div>
                      <div className="flex items-center gap-1">
                     
                        <span className="font-medium text-gray-900">Last Audit:</span>
                        <span className="ml-1 text-gray-600">{item.lastAudit}</span>
                      </div>
                      <div className="flex items-center gap-1">
                       
                        <span className="font-medium text-gray-900">Next Due:</span>
                        <span className="ml-1 text-gray-600">{item.nextDue}</span>
                      </div>
                    </div>
                  </div>

               <div className="mt-4    items-end pt-8 w-[300px]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Compliance Score</span>
                      <span className="text-sm font-bold text-gray-900">{item.complianceScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          item.complianceScore >= 90 
                            ? "bg-green-500" 
                            : item.complianceScore >= 70
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`} 
                        style={{ width: `${item.complianceScore}%` }}
                      ></div>
                    </div>
                  </div>    


         <div className="flex gap-3">
                    <button className="px-2 py-1 rounded-full text-xs bg-[#F0F5FE]  text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                    <button className="px-2 py-1 rounded-full text-xs bg-[#F0F5FE] text-blue-600 hover:text-blue-700 font-medium">
                      Risk Assessment
                    </button>
                    <button className="px-2 py-1 rounded-full text-xs bg-[#F0F5FE]  text-blue-600 hover:text-blue-700 font-medium">
                      Training Records
                    </button>
                  </div>             
</div>
              

                 
               
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-2">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.04181 18.161C5.2442 19.6643 6.4893 20.8419 8.00448 20.9116C9.27942 20.9702 10.5746 21.0008 12.0008 21.0008C13.427 21.0008 14.7221 20.9702 15.9971 20.9116C17.5123 20.8419 18.7574 19.6643 18.9598 18.161C19.0919 17.18 19.2008 16.1746 19.2008 15.1508C19.2008 14.1269 19.0919 13.1216 18.9598 12.1406C18.7574 10.6373 17.5123 9.45962 15.9971 9.38996C14.7221 9.33135 13.427 9.30078 12.0008 9.30078C10.5746 9.30078 9.27942 9.33135 8.00448 9.38996C6.4893 9.45962 5.2442 10.6373 5.04181 12.1406C4.90972 13.1216 4.80078 14.1269 4.80078 15.1508C4.80078 16.1746 4.90972 17.18 5.04181 18.161Z" stroke="#2E8BC9" stroke-width="1.35"/>
<path d="M7.94922 9.3V7.05C7.94922 4.81325 9.76247 3 11.9992 3C14.236 3 16.0492 4.81325 16.0492 7.05V9.3" stroke="#2E8BC9" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9961 15.1504H12.0051" stroke="#2E8BC9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <h3 className="font-semibold text-[#2E8BC9]">Compliance Monitoring</h3>
          </div>
          <p className="text-sm text-[#2E8BC9]">
            All compliance data is encrypted and securely transmitted. Audit results are maintained per compliance
            standards. Compliance score tracks implementation of operating guidelines and compliance factors.
          </p>
        </div>
      </div>
    </div>
  )
}