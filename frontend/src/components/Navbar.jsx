import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { authUser, checkAuth, logout } = useAuthStore();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-white shadow-md w-full z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Brand Name */}
          <Link
            to="/"
            className="text-xl font-bold text-gray-800"
            onClick={closeMenu}
          >
            UmaTech
          </Link>

          {/* Right Side - Menu Items */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/apply-internship"
              className="text-gray-700 hover:text-gray-900"
              onClick={closeMenu}
            >
              Apply Now
            </Link>
            <Link
              to="/varify"
              className="text-gray-700 hover:text-gray-900"
              onClick={closeMenu}
            >
              Our Trainee
            </Link>

            {!authUser ? (
              <>
                <Link
                  to="/signup"
                  className="text-gray-700 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Create Profile
                </Link>
              </>
            ) : (
              <Link
                to="/logout"
                className="text-red-500 hover:text-gray-900"
                onClick={handleLogout}
              >
                Logout
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pb-4">
            <Link
              to="/apply-internship"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={closeMenu}
            >
              Apply Now
            </Link>
            <Link
              to="/varify"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={closeMenu}
            >
              Our Trainee
            </Link>
            {!authUser ? (
              <>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Create Profile
                </Link>
              </>
            ) : (
              <Link
                to="/logout"
                className="block px-4 py-2 text-red-500 hover:text-gray-900"
                onClick={handleLogout}
              >
                Logout
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
