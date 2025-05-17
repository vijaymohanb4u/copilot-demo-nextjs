"use client";

import React from "react";
import Link from "next/link";

// Sidebar component props
type SidebarProps = {
  isOpen: boolean;
};

// Sidebar component with animated width and navigation links
const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    // Sidebar container: fixed width when open, 0 when closed, with smooth transition
    <aside
      className={`
        h-[calc(100vh-4rem)]  // Full height minus header (h-16 = 4rem)
        bg-white
        shadow-lg
        border-r
        rounded-r-lg
        transition-all duration-300 ease-in-out
        flex flex-col
        overflow-hidden
        ${isOpen ? "w-64" : "w-0"}
      `}
      aria-hidden={isOpen ? "false" : "true"}
    >
      {/* Navigation links */}
      <nav className="mt-4">
        <Link
          href="/economy"
          className="block w-full py-3 px-6 text-gray-800 text-md font-medium hover:bg-gray-100 transition-colors"
          scroll={false}
        >
          Economy
        </Link>
        <Link
          href="/population"
          className="block w-full py-3 px-6 text-gray-800 text-md font-medium hover:bg-gray-100 transition-colors"
          scroll={false}
        >
          Population
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
