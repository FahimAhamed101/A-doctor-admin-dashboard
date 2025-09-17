"use client"
import { useState } from "react";

const clinics = [
  {
    id: "CL1000000001",
    name: "Metro Health Center",
    location: "New York, NY",
    phone: "(555) 123-4567",
    patients: 2847,
    monthlyRevenue: 48392,
    hipaaCompliance: 99.8,
    avatar: "MH",
    avatarColor: "bg-[#2E8BC9]",
  },
  {
    id: "CL1000000002",
    name: "Riverside Medical Group",
    location: "Chicago, IL",
    phone: "(555) 234-5678",
    patients: 1923,
    monthlyRevenue: 38291,
    hipaaCompliance: 98.5,
    avatar: "RM",
    avatarColor: "bg-[#2E8BC9]",
  },
  {
    id: "CL1000000003",
    name: "Downtown Family Practice",
    location: "Los Angeles, CA",
    phone: "(555) 345-6789",
    patients: 3125,
    monthlyRevenue: 52178,
    hipaaCompliance: 99.2,
    avatar: "DF",
    avatarColor: "bg-[#2E8BC9]",
  },
  {
    id: "CL1000000004",
    name: "Coastal Health Partners",
    location: "Miami, FL",
    phone: "(555) 456-7890",
    patients: 1789,
    monthlyRevenue: 29567,
    hipaaCompliance: 97.8,
    avatar: "CH",
    avatarColor: "bg-[#2E8BC9]",
  },
  {
    id: "CL1000000005",
    name: "Mountain View Clinic",
    location: "Denver, CO",
    phone: "(555) 567-8901",
    patients: 2456,
    monthlyRevenue: 41234,
    hipaaCompliance: 96.3,
    avatar: "MV",
    avatarColor: "bg-orange-500",
  },
  {
    id: "CL1000000006",
    name: "Lakeside Medical Center",
    location: "Seattle, WA",
    phone: "(555) 678-9012",
    patients: 3298,
    monthlyRevenue: 56789,
    hipaaCompliance: 99.9,
    avatar: "LM",
    avatarColor: "bg-[#2E8BC9]",
  },
];

export default function ClinicsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredClinics = clinics.filter(clinic => {
    const matchesSearch = clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          clinic.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          clinic.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    // For demo purposes, we'll consider clinics with HIPAA compliance < 98% as "inactive"
    const isActive = clinic.hipaaCompliance >= 98;
    
    const matchesStatus = statusFilter === "all" || 
                         (statusFilter === "active" && isActive) || 
                         (statusFilter === "inactive" && !isActive);
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-semibold text-gray-900">Clinics</h1>
            <button className="flex items-center px-4 py-2 bg-[#2E8BC9] hover:bg-[#2E8BC9] text-white rounded-md transition-colors">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4V20" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12H20" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              Add New Clinic
            </button>
          </div>
          <p className="text-[#7C7C7C]">Manage and monitor all healthcare partner clinics</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row items-start justify-between sm:items-center gap-4 mb-6 p-6 shadow-md rounded-lg bg-white">
         <div className="flex gap-4">
           <div className="relative  w-full">
        
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4">
<path d="M17 17L21 21" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <input
              type="text"
              placeholder="Search clinics, IDs, locations"
              className="w-[500px] pl-10 pr-4 py-2 shadow-md rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select 
            className="w-full sm:w-40 px-3 py-2 shadow-md rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          </div> 
         
          
          <button className="flex items-center px-4 py-2 shadow-md rounded-md hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center">
            Export
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Results Count */}
        <p className="text-sm text-[#7C7C7C] mb-4">Showing {filteredClinics.length} of {clinics.length} clinics</p>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClinics.map((clinic, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden">
              <div className="p-6">
                {/* Clinic Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${clinic.avatarColor} rounded-md flex items-center justify-center text-white font-medium text-sm`}
                    >
                      {clinic.avatar}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{clinic.name}</h3>
                      <p className="text-sm text-gray-500">{clinic.id}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-[#7C7C7C]">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="#3D3D3D" stroke-width="1.5"/>
<path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="#3D3D3D" stroke-width="1.5"/>
</svg>

                    {clinic.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#7C7C7C]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.15826 5.71223L8.7556 4.80625C8.49232 4.21388 8.36068 3.91768 8.16381 3.69101C7.91708 3.40694 7.59547 3.19794 7.23568 3.08785C6.94859 3 6.62446 3 5.97621 3C5.02791 3 4.55376 3 4.15573 3.18229C3.68687 3.39702 3.26344 3.86328 3.09473 4.3506C2.95151 4.76429 2.99254 5.18943 3.07458 6.0397C3.94791 15.0902 8.90982 20.0521 17.9603 20.9254C18.8106 21.0075 19.2358 21.0485 19.6494 20.9053C20.1368 20.7366 20.603 20.3131 20.8178 19.8443C21 19.4462 21 18.9721 21 18.0238C21 17.3755 21 17.0514 20.9122 16.7643C20.8021 16.4045 20.5931 16.0829 20.309 15.8362C20.0824 15.6393 19.7862 15.5077 19.1938 15.2444L18.2878 14.8417C17.6463 14.5566 17.3255 14.4141 16.9996 14.3831C16.6876 14.3534 16.3731 14.3972 16.0811 14.5109C15.776 14.6297 15.5064 14.8544 14.967 15.3038C14.4302 15.7512 14.1618 15.9749 13.8338 16.0947C13.543 16.2009 13.1586 16.2403 12.8524 16.1951C12.5069 16.1442 12.2424 16.0029 11.7133 15.7201C10.0673 14.8405 9.15953 13.9328 8.27987 12.2867C7.99714 11.7577 7.85578 11.4931 7.80487 11.1477C7.75974 10.8414 7.79908 10.457 7.9053 10.1663C8.02512 9.83828 8.24881 9.56986 8.69619 9.033C9.14562 8.49368 9.37034 8.22402 9.48915 7.91891C9.60285 7.62694 9.64662 7.3124 9.61695 7.00048C9.58594 6.67452 9.44338 6.35376 9.15826 5.71223Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round"/>
</svg>

                    {clinic.phone}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3346 14.666V12.666C13.3346 10.7804 13.3346 9.83755 12.7488 9.25182C12.163 8.66602 11.2202 8.66602 9.33464 8.66602H6.66797C4.78235 8.66602 3.83954 8.66602 3.25376 9.25182C2.66797 9.83755 2.66797 10.7804 2.66797 12.666C2.66797 13.2873 2.66797 13.5979 2.76946 13.8429C2.90479 14.1696 3.16436 14.4291 3.49106 14.5645C3.73609 14.666 4.04672 14.666 4.66797 14.666" stroke="#7C7C7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.33464 8.66602L8.33464 14.666M4.66797 8.99935V14.666" stroke="#7C7C7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12.666H9.66667C10.2189 12.666 10.6667 13.1137 10.6667 13.666C10.6667 14.2183 10.2189 14.666 9.66667 14.666H8.33333" stroke="#7C7C7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.3346 4.33398V3.66732C10.3346 2.37865 9.28997 1.33398 8.0013 1.33398C6.71264 1.33398 5.66797 2.37865 5.66797 3.66732V4.33398C5.66797 5.62265 6.71264 6.66732 8.0013 6.66732C9.28997 6.66732 10.3346 5.62265 10.3346 4.33398Z" stroke="#7C7C7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                      Patients
                    </div>
                    <p className="font-semibold text-gray-900">{clinic.patients.toLocaleString()}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.08203 5.75374C7.08203 4.41734 5.85081 3.33398 4.33203 3.33398C2.81324 3.33398 1.58203 4.41734 1.58203 5.75374C1.58203 7.09012 2.33203 7.82778 4.33203 7.82778C6.33203 7.82778 7.33203 8.51918 7.33203 10.2476C7.33203 11.976 5.98888 12.6673 4.33203 12.6673C2.67518 12.6673 1.33203 11.584 1.33203 10.2476" stroke="#7C7C7C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M4.33203 2V3.33333M4.33203 14V12.6667" stroke="#7C7C7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.66797 8.00065H14.668M9.66797 8.00065C9.66797 8.46745 10.9975 9.33965 11.3346 9.66732M9.66797 8.00065C9.66797 7.53385 10.9975 6.66167 11.3346 6.33398" stroke="#7C7C7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                      Monthly
                    </div>
                    <p className="font-semibold text-gray-900">${clinic.monthlyRevenue.toLocaleString()}</p>
                  </div>
                </div>

                {/* HIPAA Compliance */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#3D3D3D]">HIPAA Compliance</span>
                    <span className="text-sm font-medium text-gray-900">{clinic.hipaaCompliance}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        clinic.hipaaCompliance >= 98 ? "bg-[#237B10]" : "bg-[#93531F]"
                      }`}
                      style={{ width: `${clinic.hipaaCompliance}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end items-center gap-2">
                  <button className=" h-8 px-2 text-[#2E8BC9] hover:bg-gray-100 rounded-md transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="#7C7C7C" stroke-width="1.5"/>
<path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="#7C7C7C" stroke-width="1.5"/>
</svg>

                  </button>
                  <button className=" h-8 px-2 text-[#2E8BC9] hover:bg-gray-100 rounded-md transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4249 4.60509L17.4149 3.6151C18.2351 2.79497 19.5648 2.79497 20.3849 3.6151C21.205 4.43524 21.205 5.76493 20.3849 6.58507L19.3949 7.57506M16.4249 4.60509L9.76558 11.2644C9.25807 11.772 8.89804 12.4078 8.72397 13.1041L8 16L10.8959 15.276C11.5922 15.102 12.228 14.7419 12.7356 14.2344L19.3949 7.57506M16.4249 4.60509L19.3949 7.57506" stroke="#7C7C7C" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M18.9999 13.5C18.9999 16.7875 18.9999 18.4312 18.092 19.5376C17.9258 19.7401 17.7401 19.9258 17.5375 20.092C16.4312 21 14.7874 21 11.4999 21H11C7.22876 21 5.34316 21 4.17159 19.8284C3.00003 18.6569 3 16.7712 3 13V12.5C3 9.21252 3 7.56879 3.90794 6.46244C4.07417 6.2599 4.2599 6.07417 4.46244 5.90794C5.56879 5 7.21252 5 10.5 5" stroke="#7C7C7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </button>
                  <button className=" h-8 px-2 text-[#2E8BC9] hover:bg-gray-100 rounded-md transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z" stroke="#7C7C7C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M15.5195 12C15.5195 13.933 13.9525 15.5 12.0195 15.5C10.0865 15.5 8.51953 13.933 8.51953 12C8.51953 10.067 10.0865 8.5 12.0195 8.5C13.9525 8.5 15.5195 10.067 15.5195 12Z" stroke="#7C7C7C" stroke-width="1.5"/>
</svg>

                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}