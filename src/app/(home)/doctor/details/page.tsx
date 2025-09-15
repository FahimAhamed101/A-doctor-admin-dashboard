export default function DoctorProfile() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-teal-500">
            <img
              src="/maleDoctor.png"
              alt="Dr. Mouie Marik"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Information Grid */}
        <div className="space-y-6">
          {/* Name and Disciplines Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Name</h3>
              <p className="text-gray-900">Dr. Mouie Marik</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Disciplines</h3>
              <p className="text-gray-900">Cardiology</p>
            </div>
          </div>

          {/* Email and Mobile Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Email</h3>
              <p className="text-gray-600">omalhmoudi9@gmail.com</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Mobile</h3>
              <p className="text-gray-600">+1 9999999999</p>
            </div>
          </div>

          {/* Clinic Name */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Clinic Name</h3>
            <p className="text-gray-900">Sylhet Health Center</p>
          </div>

          {/* Office Location */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Office Location</h3>
            <p className="text-gray-600 mb-2">Calle Ceiba #142, Urb. Alturas de Monte Verde, Trujillo Alto, PR 00976</p>
            <a
              href="https://maps.app.goo.gl/qxqWNRUzV4JuMSuG"
              className="text-blue-600 hover:text-blue-800 text-sm underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://maps.app.goo.gl/qxqWNRUzV4JuMSuG
            </a>

            {/* Map placeholder */}
            <div className="mt-4 w-48 h-32 bg-green-100 rounded border overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                {/* Simple map-like pattern */}
                <div className="absolute top-2 left-2 w-8 h-1 bg-gray-400 rounded"></div>
                <div className="absolute top-4 left-4 w-6 h-1 bg-gray-400 rounded"></div>
                <div className="absolute bottom-4 right-2 w-10 h-1 bg-gray-400 rounded"></div>
                <div className="absolute bottom-2 right-4 w-4 h-1 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>

          {/* Popular Reason To Visit */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Popular Reason To Visit</h3>
            <p className="text-gray-600">I need a cleaning</p>
          </div>

          {/* Qualification */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Qualification</h3>
            <div className="space-y-2">
              <div>
                <p className="text-gray-900 font-medium">Doctor of Medicine (M.D.)</p>
                <p className="text-gray-600 text-sm">University of California, San Francisco</p>
                <p className="text-gray-600 text-sm">2008</p>
              </div>
              <div className="mt-3">
                <p className="text-gray-900 font-medium">Bachelor of Science in Biology</p>
                <p className="text-gray-600 text-sm">University of California, San Francisco</p>
                <p className="text-gray-600 text-sm">2005</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
