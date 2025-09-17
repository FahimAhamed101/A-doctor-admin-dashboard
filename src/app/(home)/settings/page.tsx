"use client"
import { Eye, EyeOff } from "lucide-react";
import { useState, ReactNode } from "react"

// Custom UI components with proper TypeScript typing
interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'destructive';
  size?: 'default' | 'sm' | 'lg';
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, className = '', variant = 'default', size = 'default', ...props }: ButtonProps) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors flex items-center justify-center gap-2'
  const variantClasses = {
    default: 'bg-[#2E8BC9] text-white hover:bg-blue-700',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
  }
  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3',
    lg: 'h-11 px-8',
  }
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className = '', ...props }: InputProps) => {
  return (
    <input 
      className={`flex h-10 w-full rounded-md shadow-md bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}

interface LabelProps {
  children: ReactNode;
  htmlFor?: string;
  className?: string;
}

const Label = ({ children, htmlFor, className = '' }: LabelProps) => {
  return (
    <label 
      htmlFor={htmlFor}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    >
      {children}
    </label>
  )
}

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return (
    <div className={`p-6 border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

const CardTitle = ({ children, className = '' }: CardTitleProps) => {
  return (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
      {children}
    </h3>
  )
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent = ({ children, className = '' }: CardContentProps) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

interface BadgeProps {
  children: ReactNode;
  variant?: 'secondary' | 'destructive';
  className?: string;
}

const Badge = ({ children, variant = 'secondary', className = '' }: BadgeProps) => {
  const variantClasses = {
    secondary: 'bg-gray-100 text-gray-800',
    destructive: 'bg-red-100 text-red-800',
  }
  
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}

interface SelectProps {
  children: ReactNode;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

const Select = ({ children, defaultValue, onValueChange, className = '' }: SelectProps) => {
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
      className={`flex h-10 w-full rounded-md shadow-md bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {children}
    </select>
  )
}

interface SelectTriggerProps {
  children: ReactNode;
  className?: string;
}

const SelectTrigger = ({ children, className = '' }: SelectTriggerProps) => {
  return (
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}>
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-50" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </div>
  )
}

interface SelectContentProps {
  children: ReactNode;
  className?: string;
}

const SelectContent = ({ children, className = '' }: SelectContentProps) => {
  return (
    <div className={`absolute z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md animate-in fade-in-80 ${className}`}>
      {children}
    </div>
  )
}

interface SelectItemProps {
  children: ReactNode;
  value: string;
  className?: string;
}

const SelectItem = ({ children, value, className = '' }: SelectItemProps) => {
  return (
    <option value={value} className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}>
      {children}
    </option>
  )
}

interface SelectValueProps {
  placeholder: string;
}

const SelectValue = ({ placeholder }: SelectValueProps) => {
  return <span className="text-gray-500">{placeholder}</span>
}

export default function SettingsPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [activeTab, setActiveTab] = useState("security")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account preferences and system configuration</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 space-y-2">
            <button
              onClick={() => setActiveTab("security")}
              className={`w-full relative flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeTab === "security"
                  ? "text-[#2E8BC9] shadow-[0px_3px_4px_0px_rgba(26,64,96,0.10)]"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {activeTab === "security" && (
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-[#2E8BC9] rounded-r-md" />
              )}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="#7C7C7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Security
            </button>
            <button
              onClick={() => setActiveTab("system")}
              className={`w-full relative flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeTab === "system"
                  ? "text-[#2E8BC9] shadow-[0px_3px_4px_0px_rgba(26,64,96,0.10)]"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {activeTab === "system" && (
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-[#2E8BC9] rounded-r-md" />
              )}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 19.7956 20.0518 20.5587 18.364 21.1213C16.6761 21.6839 14.3869 22 12 22C9.61305 22 7.32387 21.6839 5.63604 21.1213C3.94821 20.5587 3 19.7956 3 19V5M3 12C3 12.7956 3.94821 13.5587 5.63604 14.1213C7.32387 14.6839 9.61305 15 12 15C14.3869 15 16.6761 14.6839 18.364 14.1213C20.0518 13.5587 21 12.7956 21 12" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              System
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {activeTab === "security" && (
              <>
                {/* Change Password Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <div className="relative">
                        <Input
                          id="current-password"
                          type={showCurrentPassword ? "text" : "password"}
                          className="pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Confirm New Password</Label>
                      <div className="relative">
                        <Input id="new-password" type={showNewPassword ? "text" : "password"} className="pr-10" />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </CardContent>
             
                  <CardHeader>
                    <CardTitle>Login Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Current Session */}
                    <div className="w-full flex items-center justify-between p-4 rounded-lg">                       
                      <div className="space-y-1 w-full">                         
                        <div className="flex items-center gap-2">                           
                          <h4 className="font-medium">Current Session</h4>                                                   
                        </div>                        
                        <div className="w-full flex justify-between items-center gap-2">                         
                          <p className="text-sm text-gray-600">Chrome on macOS • New York, NY</p> 
                          <Badge className="bg-green-100 text-green-800 ml-auto">                             
                            Active                           
                          </Badge>
                        </div>                          
                        <p className="text-sm text-gray-600">Last active: Now</p>                       
                      </div>                     
                    </div>

                    {/* Mobile App Session */}
                    <div className="flex items-center justify-between p-4 rounded-lg">
                      <div className="space-y-1">
                        <h4 className="font-medium">Mobile App</h4>
                        <p className="text-sm text-gray-600">iOS App • New York, NY</p>
                        <p className="text-sm text-gray-600">Last active: 2 hours ago</p>
                      </div>
                      <Badge variant="destructive">
                        Revoke
                      </Badge>
                    </div>
                  </CardContent>
                  <div className="flex justify-end gap-3 p-4">
                    <button className="border-none p-auto px-3 rounded-md shadow-md bg-white text-[#2E8BC9]">Cancel</button>
                    <Button className="flex items-center gap-2">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 21V14C17.5 13.7348 17.3946 13.4804 17.2071 13.2929C17.0196 13.1054 16.7652 13 16.5 13H8.5C8.23478 13 7.98043 13.1054 7.79289 13.2929C7.60536 13.4804 7.5 13.7348 7.5 14V21M7.5 3V7C7.5 7.26522 7.60536 7.51957 7.79289 7.70711C7.98043 7.89464 8.23478 8 8.5 8H15.5M15.7 3C16.2275 3.00751 16.7307 3.22317 17.1 3.6L20.9 7.4C21.2768 7.76926 21.4925 8.27246 21.5 8.8V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0391 3.5 19.5304 3.5 19V5C3.5 4.46957 3.71071 3.96086 4.08579 3.58579C4.46086 3.21071 4.96957 3 5.5 3H15.7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Save Changes
                    </Button>
                  </div>
                </Card>
              </>
            )}

            {activeTab === "system" && (
              <>
                {/* System Configuration Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>System Configuration</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Default Timezone</Label>
                        <Select defaultValue="eastern">
                          <option value="eastern">Eastern Time (EST)</option>
                          <option value="central">Central Time (CST)</option>
                          <option value="mountain">Mountain Time (MST)</option>
                          <option value="pacific">Pacific Time (PST)</option>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="date-format">Date Format</Label>
                        <Select defaultValue="mmddyy">
                          <option value="mmddyy">MM/DD/YY</option>
                          <option value="ddmmyy">DD/MM/YY</option>
                          <option value="yyyymmdd">YYYY-MM-DD</option>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="session-timeout">Session Timeout</Label>
                        <Select defaultValue="30min">
                          <option value="15min">15 Minutes</option>
                          <option value="30min">30 Minutes</option>
                          <option value="1hour">1 Hour</option>
                          <option value="2hours">2 Hours</option>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="page-size">Default Page Size</Label>
                        <Select defaultValue="10">
                          <option value="10">10 Items</option>
                          <option value="25">25 Items</option>
                          <option value="50">50 Items</option>
                          <option value="100">100 Items</option>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
             
                  {/* Data Retention Section */}
                  <CardHeader>
                    <CardTitle>Data Retention</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Configure how long different types of data are retained in the system.</p>
                  </CardContent>
             
                  {/* System Alerts Section */}
                  <CardHeader>
                    <CardTitle>System Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">Critical system and security alerts</p>
                      <div className="space-y-2">
                        <Select defaultValue="all-new">
                          <option value="all-new">All New</option>
                          <option value="critical-only">Critical Only</option>
                          <option value="none">None</option>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                  <div className="flex justify-end gap-3 p-4">
                    <button className="border-none p-auto px-3 rounded-md shadow-md bg-white text-[#2E8BC9]">Cancel</button>
                    <Button className="flex items-center gap-2">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 21V14C17.5 13.7348 17.3946 13.4804 17.2071 13.2929C17.0196 13.1054 16.7652 13 16.5 13H8.5C8.23478 13 7.98043 13.1054 7.79289 13.2929C7.60536 13.4804 7.5 13.7348 7.5 14V21M7.5 3V7C7.5 7.26522 7.60536 7.51957 7.79289 7.70711C7.98043 7.89464 8.23478 8 8.5 8H15.5M15.7 3C16.2275 3.00751 16.7307 3.22317 17.1 3.6L20.9 7.4C21.2768 7.76926 21.4925 8.27246 21.5 8.8V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0391 3.5 19.5304 3.5 19V5C3.5 4.46957 3.71071 3.96086 4.08579 3.58579C4.46086 3.21071 4.96957 3 5.5 3H15.7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Save Changes
                    </Button>
                  </div>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}