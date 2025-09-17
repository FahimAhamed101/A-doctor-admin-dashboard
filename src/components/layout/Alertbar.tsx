// src/components/layout/Sidebar.tsx

"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import Logo from "@/assets/logo";
import WellbynLogo from "@/assets/wellbynlogo";
import Link from "next/link";
import { AlertCircle, Bell } from "lucide-react";

// Define sidebar menu items based on the image
const mainMenuItems = [
  {
    id: "home",
    label: "Home",
    href: "/home",
    onDesktop: true,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 17C14.2005 17.6224 13.1502 18 12 18C10.8497 18 9.79953 17.6224 9 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.383 2 14.5817 2.86667 16.979 4.6L18.4188 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5536 22 13.1388 22H10.8612C7.44634 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "doctor",
    label: "Doctor",
    href: "/doctor",
    onDesktop: true,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 22V19C20 16.1716 20 14.7574 19.1213 13.8787C18.2426 13 16.8284 13 14 13L12 15L10 13C7.17157 13 5.75736 13 4.87868 13.8787C4 14.7574 4 16.1716 4 19V22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 13V18.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 13V17M8.5 17C9.60457 17 10.5 17.8954 10.5 19V20M8.5 17C7.39543 17 6.5 17.8954 6.5 19V20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 6.5V5.5C15.5 3.567 13.933 2 12 2C10.067 2 8.5 3.567 8.5 5.5V6.5C8.5 8.433 10.067 10 12 10C13.933 10 15.5 8.433 15.5 6.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.75 19.25C16.75 19.6642 16.4142 20 16 20C15.5858 20 15.25 19.6642 15.25 19.25C15.25 18.8358 15.5858 18.5 16 18.5C16.4142 18.5 16.75 18.8358 16.75 19.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: "appointment",
    label: "Appointment",
    href: "/appointment",
    onDesktop: true,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];
const mobileMenuItems = [
  {
    id: "home",
    label: "Home",
    href: "/home",
    onDesktop: true,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 17C14.2005 17.6224 13.1502 18 12 18C10.8497 18 9.79953 17.6224 9 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.383 2 14.5817 2.86667 16.979 4.6L18.4188 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5536 22 13.1388 22H10.8612C7.44634 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C13.383 2 14.5822 2.86628 16.9795 4.59961L18.419 5.64062C20.346 7.03389 21.3098 7.73089 21.7441 8.74902C22.1784 9.76727 22.0014 10.9166 21.6484 13.2139L21.3477 15.1729C20.8472 18.429 20.5966 20.057 19.4287 21.0283C18.2608 21.9996 16.5534 22 13.1387 22H10.8613C7.44647 22 5.7392 21.9997 4.5713 21.0283C3.40347 20.057 3.15274 18.429 2.65235 15.1729L2.35157 13.2139C1.99855 10.9166 1.82156 9.76727 2.25587 8.74902C2.6902 7.73084 3.65404 7.03393 5.58106 5.64062L7.02149 4.59961C9.41842 2.86655 10.6171 2.00006 12 2ZM9.39747 16.3643C9.07553 16.1625 8.6467 16.2329 8.40821 16.5391C8.16965 16.8456 8.20641 17.2794 8.48145 17.542L8.53907 17.5918L8.71778 17.7246C9.62507 18.3708 10.7681 18.75 12 18.75C13.314 18.75 14.5274 18.3186 15.4609 17.5918C15.7877 17.3373 15.8462 16.8659 15.5918 16.5391C15.3373 16.2124 14.8658 16.1538 14.5391 16.4082C13.8737 16.9261 12.9863 17.25 12 17.25C11.1369 17.25 10.3498 17.0017 9.72071 16.5928L9.46094 16.4082L9.39747 16.3643Z"
          fill="#2E8BC9"
          stroke="currentColor"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "doctor",
    label: "Doctor",
    href: "/doctor",
    onDesktop: true,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 3.5H4.5C3.94772 3.5 3.5 3.94772 3.5 4.5V8C3.5 11.0376 5.96243 13.5 9 13.5C12.0376 13.5 14.5 11.0376 14.5 8V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H11.5"
          stroke="#7C7C7C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 15.5V16.75C18.5 19.3734 16.3734 21.5 13.75 21.5C11.1266 21.5 9 19.3734 9 16.75V13.5"
          stroke="#7C7C7C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 2.5V4.5"
          stroke="#7C7C7C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 2.5V4.5"
          stroke="#7C7C7C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5 13.5C20.5 14.6046 19.6046 15.5 18.5 15.5C17.3954 15.5 16.5 14.6046 16.5 13.5C16.5 12.3954 17.3954 11.5 18.5 11.5C19.6046 11.5 20.5 12.3954 20.5 13.5Z"
          stroke="#7C7C7C"
          strokeWidth="1.5"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 3.5H4.5C3.94772 3.5 3.5 3.94772 3.5 4.5V8C3.5 11.0376 5.96243 13.5 9 13.5C12.0376 13.5 14.5 11.0376 14.5 8V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H11.5"
          stroke="#2E8BC9"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 15.5V16.75C18.5 19.3734 16.3734 21.5 13.75 21.5C11.1266 21.5 9 19.3734 9 16.75V13.5"
          stroke="#2E8BC9"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 2.5V4.5"
          stroke="#2E8BC9"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 2.5V4.5"
          stroke="#2E8BC9"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5 13.5C20.5 14.6046 19.6046 15.5 18.5 15.5C17.3954 15.5 16.5 14.6046 16.5 13.5C16.5 12.3954 17.3954 11.5 18.5 11.5C19.6046 11.5 20.5 12.3954 20.5 13.5Z"
          stroke="#2E8BC9"
          strokeWidth="2.2"
        />
      </svg>
    ),
  },
  {
    id: "appointment",
    label: "Appointment",
    href: "/appointment",
    onDesktop: true,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 2V6M8 2V6"
          stroke="#7C7C7C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z"
          stroke="#7C7C7C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 10H21"
          stroke="#7C7C7C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 12V14C21 17.7712 20.9997 19.6566 19.8281 20.8281C18.6566 21.9997 16.7712 22 13 22H11C7.22878 22 5.34346 21.9997 4.17188 20.8281C3.00031 19.6566 3 17.7712 3 14V12C3 11.5581 3.00007 11.142 3.00195 10.75H20.998C20.9999 11.142 21 11.5581 21 12ZM13 4C13.7355 4 14.3993 4.00203 15 4.01074V6C15 6.55228 15.4477 7 16 7C16.5523 7 17 6.55228 17 6V4.10254C18.2999 4.23052 19.175 4.51873 19.8281 5.17188C20.6717 6.01541 20.9065 7.22887 20.9727 9.25H3.02734C3.09348 7.22885 3.32834 6.01541 4.17188 5.17188C4.82502 4.51873 5.70009 4.23052 7 4.10254V6C7 6.55228 7.44772 7 8 7C8.55228 7 9 6.55228 9 6V4.01074C9.60074 4.00203 10.2645 4 11 4H13Z"
          fill="#2E8BC9"
        />
        <path
          d="M16 2V6M8 2V6"
          stroke="#2E8BC9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "Profile",
    href: "/profile",
    onDesktop: false,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z"
          stroke="#7C7C7C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5"
          stroke="#7C7C7C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z"
          fill="#2E8BC9"
        />
        <path
          d="M20 22C20 17.5817 16.4183 14 12 14C7.58173 14 4 17.5817 4 22"
          fill="#2E8BC9"
        />
        <path
          d="M20 22C20 17.5817 16.4183 14 12 14C7.58173 14 4 17.5817 4 22H12H20Z"
          stroke="#2E8BC9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const quickMenuItems = [
  {
    id: "waitlist",
    label: "Waitlist",
    href: "/waitlist",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "medications",
    label: "Medications",
    href: "/medications",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
];

const informationItems = [
  {
    id: "personal-information",
    label: "Personal Information",
    href: "/personal-information",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    id: "medical-information",
    label: "Medical Information",
    href: "/medical-information",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    id: "insurance-information",
    label: "Insurance Information",
    href: "/insurance-information",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: "upload-document",
    label: "Upload Document",
    href: "/upload-document",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        />
      </svg>
    ),
  },
];

const accountsItems = [
  {
    id: "switch-account",
    label: "Switch Account",
    href: "/switch-account",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    id: "caregiver",
    label: "Caregiver",
    href: "/caregiver",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

const otherItems = [
  {
    id: "hipaa-consent",
    label: "HIPAA Consent",
    href: "/hipaa-consent",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: "support",
    label: "Support",
    href: "/support",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

interface SidebarItemProps {
  item: {
    id: string;
    label: string;
    href: string;
    icon: React.ReactNode;
  };
  isActive: boolean;
  onClick: () => void;
}

function SidebarItem({ item, isActive, onClick }: SidebarItemProps) {
  return (
    <>
      {/* <div className="w-0 h-5 outline-[6px] outline-primary-500 absolute rounded-3xl" /> */}
      <button
        onClick={onClick}
        className={cn(
          "w-full flex relative items-center gap-3 px-4 py-3 text-left rounded-lg transition-all duration-500 group",
          isActive
            ? " text-primary-500   shadow-[0px_3px_4px_0px_rgba(26,64,96,0.10)]  before:w-1 before:h-8 before:-left-1 z-0 before:absolute  before:rounded-l-3xl"
            : "text-Text-secondary hover:bg-[#F3F3F3] hover:text-text-primary hover:shadow-[0px_3px_4px_0px_rgba(26,64,96,0.10)]"
        )}
      >{isActive && (
    <span className="absolute left-[-3px] top-6 h-6 w-1  bg-[#2E8BC9]  transform -translate-y-2" />
  )}
        <div
  className={cn(
    "flex-shrink-0 transition-colors",
    isActive
      ? "text-[#2E8BC9]"
      : "text-text-primary group-hover:text-gray-700"
  )}
>
  {item.icon}
</div>
        <span className="text-lg font-medium">{item.label}</span>
      </button>
    </>
  );
}

interface SidebarSectionProps {
  title?: string;
  onDesktop?: boolean;
  items: Array<{
    id: string;
    label: string;
    href: string;
    icon: React.ReactNode;
  }>;
  activeItem: string;
  onItemClick: (item: any) => void;
}

function SidebarSection({
  title,
  items,
  activeItem,
  onItemClick,
  onDesktop,
}: SidebarSectionProps) {
  return (
    <div className="space-y-2">
      {title && (
        <h3 className="px-4 text-lg font-normal text-gray-500 tracking-wider">
          {title}
        </h3>
      )}
      <div className="space-y-4">
        {items.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            isActive={activeItem === item.id}
            onClick={() => onItemClick(item)}
          />
        ))}
      </div>
    </div>
  );
}
interface Alert {
  id: string
  type: "warning" | "info" | "critical"
  title: string
  description: string
  source: string
  timestamp: string
  isRead: boolean
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "warning",
    title: "System Update",
    description: "New system event detected",
    source: "System Monitor",
    timestamp: "4m ago",
    isRead: false,
  },
  {
    id: "2",
    type: "warning",
    title: "System Update",
    description: "New system event detected",
    source: "System Monitor",
    timestamp: "4m ago",
    isRead: false,
  },
  {
    id: "3",
    type: "warning",
    title: "System Update",
    description: "New system event detected",
    source: "System Monitor",
    timestamp: "4m ago",
    isRead: false,
  },
  {
    id: "4",
    type: "critical",
    title: "Database Connection Lost",
    description: "Unable to connect to primary database",
    source: "Database Monitor",
    timestamp: "2h ago",
    isRead: false,
  },
  {
    id: "5",
    type: "info",
    title: "Backup Completed",
    description: "Daily backup process finished successfully",
    source: "Backup Service",
    timestamp: "6h ago",
    isRead: true,
  },
]

export function Alertbar() {
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts)
  const [activeFilter, setActiveFilter] = useState<"all" | "unread" | "critical">("all")
  const [activeType, setActiveType] = useState<"warning" | "info" | null>("warning")

  const unreadCount = alerts.filter((alert) => !alert.isRead).length
  const criticalCount = alerts.filter((alert) => alert.type === "critical").length

  const filteredAlerts = alerts.filter((alert) => {
    // First filter by read status or critical
    let passesFilter = true
    if (activeFilter === "unread") {
      passesFilter = !alert.isRead
    } else if (activeFilter === "critical") {
      passesFilter = alert.type === "critical"
    }

    // Then filter by type if a type is selected
    if (activeType && passesFilter) {
      passesFilter = alert.type === activeType
    }

    return passesFilter
  })

  const markAllRead = () => {
    setAlerts(alerts.map((alert) => ({ ...alert, isRead: true })))
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
      case "critical":
        return <AlertCircle className="h-4 w-4 text-orange-500" />
      case "info":
        return <Bell className="h-4 w-4 text-blue-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-full md:flex flex-col hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors hidden md:block">
                    <svg
                      width="22"
                      height="24"
                      viewBox="0 0 32 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0322 30.2324C13.0851 31.0548 14.4754 31.5549 15.9995 31.5549C17.5236 31.5549 18.914 31.0548 19.9668 30.2324"
                        stroke="#3D3D3D"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.0005 4.44531C16.5075 4.44531 17.006 4.48196 17.4927 4.55273C17.3895 5.0188 17.3335 5.50288 17.3335 6C17.3335 9.6819 20.3186 12.667 24.0005 12.667C24.6251 12.667 25.229 12.5786 25.8023 12.418C25.8985 12.9553 25.9516 13.5073 25.9517 14.0713C25.9518 15.4469 26.0346 16.7403 26.8638 17.9258C27.4969 18.8198 28.352 19.7355 28.5249 20.835C28.806 22.6242 27.5485 23.8664 26.0093 24.4854C20.1077 26.8583 11.8944 26.8583 5.99269 24.4854C4.45336 23.8664 3.19585 22.6243 3.47706 20.835C3.65001 19.7355 4.50512 18.8198 5.13819 17.9258C5.96731 16.7403 6.04919 15.4469 6.04933 14.0713C6.04953 8.75499 10.5049 4.4455 16.0005 4.44531Z"
                        fill="#3D3D3D"
                      />
                      <circle
                        cx="24.0003"
                        cy="5.99935"
                        r="5.33333"
                        fill="#E63D75"
                      />
                    </svg>
                  </button>
          <h2 className="text-lg font-medium text-gray-900">Alerts</h2>
        </div>
        <button 
          onClick={markAllRead} 
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Mark all read
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center px-4 py-3 border-b border-gray-100 bg-gray-50">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveFilter("all")}
            className={`text-sm font-medium pb-1 ${
              activeFilter === "all" 
                ? "text-gray-900 border-b-2 border-blue-600" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("unread")}
            className={`text-sm font-medium pb-1 flex items-center gap-1 ${
              activeFilter === "unread" 
                ? "text-gray-900 border-b-2 border-blue-600" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Unread
            <span className="bg-red-100 text-red-800 text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
              {unreadCount}
            </span>
          </button>
          <button
            onClick={() => setActiveFilter("critical")}
            className={`text-sm font-medium pb-1 flex items-center gap-1 ${
              activeFilter === "critical" 
                ? "text-gray-900 border-b-2 border-blue-600" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Critical
            <span className="bg-red-100 text-red-800 text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
              {criticalCount}
            </span>
          </button>
        </div>
      </div>

      {/* Type Filters */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
        <button
          onClick={() => setActiveType(activeType === "warning" ? null : "warning")}
          className={`px-3 py-1.5 rounded-full text-xs font-medium ${
            activeType === "warning" 
              ? "bg-orange-100 text-orange-700 border border-orange-200" 
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          warning
        </button>
        <button
          onClick={() => setActiveType(activeType === "info" ? null : "info")}
          className={`px-3 py-1.5 rounded-full text-xs font-medium ${
            activeType === "info" 
              ? "bg-blue-100 text-blue-700 border border-blue-200" 
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          info
        </button>
      </div>

      {/* Alerts List */}
      <div className="flex-1 overflow-y-auto">
        {filteredAlerts.length === 0 ? (
          <div className="p-6 text-center text-gray-500 text-sm">
            No alerts match your current filters
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredAlerts.map((alert) => (
              <div key={alert.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-medium text-gray-900 leading-tight">
                        {alert.title}
                      </h3>
                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        {alert.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      {alert.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Source: {alert.source}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
