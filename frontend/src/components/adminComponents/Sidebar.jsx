import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden fixed top-16 left-4 z-30">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-gray-800 text-white rounded-md focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:flex lg:flex-col lg:h-screen lg:overflow-y-auto`}
        style={{ top: "64px" }} // Adjust top position to account for navbar height
      >
        <div className="text-2xl font-bold mb-6">Sidebar</div>
        <nav className="flex flex-col space-y-2">
          <Link
            to="/admin"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition duration-300"
            onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
          >
            Add Features
          </Link>
          <Link
            to="/admin/get-features"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition duration-300"
            onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
          >
            Get Features
          </Link>
          <Link
            to="/admin/add-Internship"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition duration-300"
            onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
          >
            Add Internship
          </Link>
          <Link
            to="/admin/get-internships"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition duration-300"
            onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
          >
            Get Internships
          </Link>
          <Link
            to="/admin/get-interns"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition duration-300"
            onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
          >
            Get Interns
          </Link>
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
