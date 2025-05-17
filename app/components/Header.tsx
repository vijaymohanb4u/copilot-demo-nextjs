"use client";

import React, { useState } from "react";

// Header component with responsive hamburger menu and title
const Header: React.FC<{ onToggleSidebar?: () => void }> = ({ onToggleSidebar }) => {
  // State to track sidebar open/close
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handler for hamburger menu click
  const handleMenuClick = () => {
    setIsSidebarOpen((prev) => !prev);
    if (onToggleSidebar) {
      onToggleSidebar();
    }
    console.log("Toggle sidebar");
  };

  return (
    <header className="h-16 bg-blue-500 flex items-center justify-between px-4">
      {/* Hamburger menu icon (visible on all screens for now) */}
      <button
        className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Toggle menu"
        onClick={handleMenuClick}
        type="button"
      >
        {/* 3 bars for hamburger icon */}
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>
      {/* Centered title */}
      <h1 className="text-white font-semibold text-lg sm:text-xl mx-auto">
        My Dashboard
      </h1>
      {/* Spacer to balance flex layout */}
      <div className="w-10 h-10" />
    </header>
  );
};

export default Header;
