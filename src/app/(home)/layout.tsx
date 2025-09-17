import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import Link from "next/link";
import { Alertbar } from "@/components/layout/Alertbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wellbyn - Healthcare Dashboard",
  description:
    "Manage your healthcare appointments, doctors, and medical information.",
};


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <div className="flex h-screen bg-gray-50 w-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="  px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Back Button */}
              <Link href="/dashboard">
               <h1 className="p-2 font-md text-[#2E8BC9]">Dashboard</h1>
              </Link>
             

              <div className="flex items-center justify-between w-[560px]">
                {/* Search Bar */}
             
                <div className="flex items-center gap-3 mb-4 md:hidden">
                  <div className="w-9 h-9 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">Ma</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-gray-900 truncate">
                      Hi, Mahmud
                    </p>
                    <p className="text-sm text-Text-secondary truncate font-medium">
                      Personal account
                    </p>
                  </div>
                </div>

                {/* Right side - Notifications and Profile */}
                <div className="flex items-center gap-4">
                  {/* Notifications */}
                
                  {/* Mobile Notification Icon */}
                  <button className="relative p-2 rounded-lg transition-colors md:hidden -mt-4">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="8" fill="#F3F3F3" />
                      <path
                        d="M13.0245 25.1738C13.8142 25.7906 14.8569 26.1657 16 26.1657C17.1431 26.1657 18.1859 25.7906 18.9755 25.1738"
                        stroke="#2E8BC9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.0007 5.83398C16.3807 5.834 16.7541 5.86104 17.1189 5.91406C17.0414 6.26373 16.9997 6.62703 16.9997 7C16.9997 9.76135 19.2384 11.9999 21.9997 12C22.4682 12 22.9213 11.9339 23.3513 11.8135C23.4234 12.2166 23.4636 12.6307 23.4636 13.0537C23.4637 14.0854 23.5254 15.0553 24.1472 15.9443C24.6221 16.6149 25.2636 17.3023 25.3933 18.127C25.6038 19.4687 24.661 20.4001 23.5066 20.8643C19.0803 22.644 12.9201 22.644 8.49386 20.8643C7.3396 20.4001 6.39749 19.4686 6.60812 18.127C6.73774 17.3023 7.37838 16.6149 7.85323 15.9443C8.47514 15.0552 8.53673 14.0854 8.53683 13.0537C8.53683 9.06627 11.8788 5.83398 16.0007 5.83398Z"
                        fill="#2E8BC9"
                      />
                      <circle cx="22" cy="7" r="4" fill="#E63D75" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
    <Alertbar />

      </div>
    </div>
  );
}

