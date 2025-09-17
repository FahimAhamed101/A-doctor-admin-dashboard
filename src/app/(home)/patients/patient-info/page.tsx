export default function PatientInformation() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
        {/* Header Section */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-200">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
            Ms
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Mahmudur Rahman</h1>
            <p className="text-sm text-gray-600">Patient ID: 1001016</p>
          </div>
        </div>

        {/* Patient Information Section */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <h2 className="text-lg font-medium text-gray-900">Patient Information</h2>
          </div>

          <h3 className="text-base font-medium text-gray-900 mb-4">Personal Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <p className="text-sm text-gray-900">mahmud.rahmandesign@gmail.com</p>
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
              <p className="text-sm text-gray-900">(555) 456-7890</p>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <p className="text-sm text-gray-900">10-10-2008</p>
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <p className="text-sm text-gray-900">Apr 101</p>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <p className="text-sm text-gray-900">Male</p>
            </div>

            {/* Blood Group */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
              <p className="text-sm text-gray-900">O+</p>
            </div>

            {/* Marital Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Marital Status</label>
              <p className="text-sm text-gray-900">Single</p>
            </div>

            {/* Number of children */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of children</label>
              <p className="text-sm text-gray-900">-</p>
            </div>
          </div>

          {/* Address Section */}
          <h3 className="text-base font-medium text-gray-900 mb-4 mt-8">Address</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {/* Address Line 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
              <p className="text-sm text-gray-900">1234 Elm Street</p>
            </div>

            {/* Address Line 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
              <p className="text-sm text-gray-900">Apt 101</p>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <p className="text-sm text-gray-900">San Juan</p>
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <p className="text-sm text-gray-900">Puerto Rico</p>
            </div>

            {/* Zip */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zip</label>
              <p className="text-sm text-gray-900">00901</p>
            </div>
          </div>

          {/* Additional Info Section */}
          <h3 className="text-base font-medium text-gray-900 mb-4 mt-8">Additional Info</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {/* Employer */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Employer</label>
              <p className="text-sm text-gray-900">N/A</p>
            </div>

            {/* Last 4 digits of SSN */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last 4 digits of SSN</label>
              <p className="text-sm text-gray-900">5241</p>
            </div>

            {/* Driver License */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Driver License</label>
              <p className="text-sm text-gray-900">58170</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
