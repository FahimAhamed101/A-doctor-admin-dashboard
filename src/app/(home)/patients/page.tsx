"use client"
import { useState } from 'react';
import { Search, Download, Eye, Edit2, Users, Activity, TrendingUp } from "lucide-react"

interface Patient {
  id: string;
  name: string;
  patientId: string;
  age: number;
  gender: string;
  clinic: string;
  engagement: number;
  lastVisit: string;
}

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'destructive';
  size?: 'default' | 'sm' | 'lg';
  onClick?: () => void;
}

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
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

interface SelectValueProps {
  placeholder?: string;
}

interface ProgressProps {
  value: number;
  className?: string;
}

const patients: Patient[] = [
  {
    id: "J.D.",
    name: "J.D.",
    patientId: "PT000001",
    age: 45,
    gender: "ADULT M",
    clinic: "FusionPay Solutions",
    engagement: 85,
    lastVisit: "November 7, 2017",
  },
  {
    id: "M.S.",
    name: "M.S.",
    patientId: "PT000002",
    age: 32,
    gender: "ADULT F",
    clinic: "EliteFinds Corporation",
    engagement: 45,
    lastVisit: "April 28, 2016",
  },
  {
    id: "M.S.",
    name: "M.S.",
    patientId: "PT000003",
    age: 67,
    gender: "ADULT M",
    clinic: "VenturePhi Payments",
    engagement: 30,
    lastVisit: "February 11, 2016",
  },
  {
    id: "M.S.",
    name: "M.S.",
    patientId: "PT000004",
    age: 67,
    gender: "ADULT M",
    clinic: "Velocity Finance Co",
    engagement: 78,
    lastVisit: "August 2, 2013",
  },
  {
    id: "M.S.",
    name: "M.S.",
    patientId: "PT000005",
    age: 67,
    gender: "ADULT M",
    clinic: "Infinity Payroll Services",
    engagement: 25,
    lastVisit: "May 9, 2016",
  },
  {
    id: "M.S.",
    name: "M.S.",
    patientId: "PT000006",
    age: 67,
    gender: "ADULT M",
    clinic: "NextGen Payments LLC",
    engagement: 82,
    lastVisit: "February 28, 2017",
  },
]

// Custom UI components
const Button = ({ children, className = '', variant = 'default', size = 'default', ...props }: ButtonProps) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors';
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
  };
  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3',
    lg: 'h-11 px-8',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
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

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return (
    <div className={`p-6 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className = '' }: CardTitleProps) => {
  return (
    <h3 className={`text-lg font-medium ${className}`}>
      {children}
    </h3>
  );
};

const CardContent = ({ children, className = '' }: CardContentProps) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

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

const SelectTrigger = ({ children, className = '' }: SelectTriggerProps) => {
  return (
    <div className={`px-3 py-2  rounded-md flex items-center justify-between ${className}`}>
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </div>
  );
};

const SelectContent = ({ children }: SelectContentProps) => {
  return (
    <div className="absolute z-10 w-full mt-1 bg-white  rounded-md shadow-lg">
      {children}
    </div>
  );
};

const SelectItem = ({ children, value }: SelectItemProps) => {
  return (
    <option value={value}>{children}</option>
  );
};

const SelectValue = ({ placeholder }: SelectValueProps) => {
  return <span className="text-gray-500">{placeholder}</span>;
};

const Progress = ({ value, className = '' }: ProgressProps) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div 
        className="h-2 rounded-full bg-blue-500 transition-all duration-300" 
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[#3D3D3D]">Patients</h1>
            <p className="text-sm text-gray-600 mt-1">
              Monitor patient engagement and health outcomes HIPAA compliant views
            </p>
          </div>
          <button className="bg-[#2E8BC9] px-3 py-2 rounded-md text-white flex gap-2"><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>HIPAA Protected</button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex  flex-col space-y-3 space-x-3">
               
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="6" fill="#F0F5FE"/>
<path d="M32 34V31C32 28.1716 32 26.7573 31.1213 25.8787C30.2426 25 28.8284 25 26 25H22C19.1716 25 17.7574 25 16.8787 25.8787C16 26.7573 16 28.1716 16 31C16 31.9319 16 32.3978 16.1522 32.7653C16.3552 33.2554 16.7446 33.6447 17.2346 33.8477C17.6022 34 18.0681 34 19 34" stroke="#2E8BC9" stroke-width="2.025" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.5 25L24.5 34M19 25.5V34" stroke="#2E8BC9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 31H26.5C27.3284 31 28 31.6716 28 32.5C28 33.3284 27.3284 34 26.5 34H24.5" stroke="#2E8BC9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 18.5V17.5C27.5 15.567 25.933 14 24 14C22.067 14 20.5 15.567 20.5 17.5V18.5C20.5 20.433 22.067 22 24 22C25.933 22 27.5 20.433 27.5 18.5Z" stroke="#2E8BC9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



              
                <p className="text-sm text-[#3D3D3D]">Total Patients</p>
                  <p className="text-2xl font-bold text-gray-900">6</p>
               
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
         
               
             <div className="flex  flex-col space-y-3 space-x-3">
               
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="6" fill="#FEF2F2"/>
<g clip-path="url(#clip0_4944_10886)">
<path d="M34 24H31.52C31.083 23.9991 30.6577 24.1413 30.3091 24.405C29.9606 24.6686 29.708 25.0392 29.59 25.46L27.24 33.82C27.2249 33.8719 27.1933 33.9175 27.15 33.95C27.1067 33.9825 27.0541 34 27 34C26.9459 34 26.8933 33.9825 26.85 33.95C26.8067 33.9175 26.7751 33.8719 26.76 33.82L21.24 14.18C21.2249 14.1281 21.1933 14.0825 21.15 14.05C21.1067 14.0175 21.0541 14 21 14C20.9459 14 20.8933 14.0175 20.85 14.05C20.8067 14.0825 20.7751 14.1281 20.76 14.18L18.41 22.54C18.2925 22.9592 18.0414 23.3285 17.6949 23.592C17.3483 23.8555 16.9253 23.9988 16.49 24H14" stroke="#93531F" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4944_10886">
<rect width="24" height="24" fill="white" transform="translate(12 12)"/>
</clipPath>
</defs>
</svg>


              
                <p className="text-sm text-gray-600">Active Patients</p>
                  <p className="text-2xl font-bold text-gray-900">4</p>
               
              </div>
              
               
               
         
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex  flex-col space-y-3  space-x-3">
               
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="6" fill="#FAF5FF"/>
<path d="M28 14V18M20 14V18M15 22H33M25 16H23C19.2288 16 17.3431 16 16.1716 17.1716C15 18.3431 15 20.2288 15 24V26C15 29.7712 15 31.6569 16.1716 32.8284C17.3431 34 19.2288 34 23 34H25C28.7712 34 30.6569 34 31.8284 32.8284C33 31.6569 33 29.7712 33 26V24C33 20.2288 33 18.3431 31.8284 17.1716C30.6569 16 28.7712 16 25 16Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              
                <p className="text-sm text-gray-600">Avg Engagement</p>
                  <p className="text-2xl font-bold text-gray-900">77%</p>
               
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardContent className="p-6">
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
          </CardContent>
        </Card>

        {/* Patients Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium text-[#3D3D3D]">Recent Patients Activity</CardTitle>
            <p className="text-sm text-gray-600">Showing 6 of 6 patients</p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F2F8FD] ">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Patient</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Demographics</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Clinic</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Engagement</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Last Visit</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {patients.map((patient, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div>
                          <div className="font-medium text-gray-900">{patient.name}</div>
                          <div className="text-sm text-gray-500">{patient.patientId}</div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div>
                          <div className="text-sm text-gray-900">Age: {patient.age}</div>
                          <div className="text-sm text-gray-500">{patient.gender}</div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm text-gray-900">{patient.clinic}</div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <div className="flex-1">
                            <Progress
                              value={patient.engagement}
                              className={`h-2 ${
                                patient.engagement >= 70 ? "bg-blue-500" : "bg-red-500"
                              }`}
                            />
                          </div>
                          <span className="text-sm text-gray-600 min-w-[3ch]">{patient.engagement}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm text-gray-900">{patient.lastVisit}</div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <Button className="h-8 w-8 p-0 bg-transparent hover:bg-gray-100">
                            <Eye className="w-4 h-4 text-gray-400" />
                          </Button>
                          <Button className="h-8 w-8 p-0 bg-transparent hover:bg-gray-100">
                            <Edit2 className="w-4 h-4 text-gray-400" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* HIPAA Compliance Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5  rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="#2E8BC9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
            </div>    <strong className="text-sm text-[#2E8BC9]">HIPAA Compliance Notice</strong>
           
          </div> <div className="text-sm text-[#2E8BC9]">
           <br/>
              All patient data displayed is anonymized and aggregated to
              protect patient privacy. Individual patient identifiers have been removed or masked. Access to this data
              is logged and monitored.
            </div>
        </div>
      </div>
    </div>
  );
}