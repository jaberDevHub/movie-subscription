import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function Navbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-5xl font-extrabold text-yellow-400 drop-shadow-2xl transition-all duration-300 hover:text-cyan-500"
            >
              CineFlow
            </Link>
          </div>

          {/* Center - Navigation Links (Desktop) */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <div className="flex space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/")
                  ? "bg-purple-700 text-white shadow-md"
                  : "text-gray-300 hover:bg-purple-800/50 hover:text-white"
                  } transition-all duration-300`}
              >
                Home
              </Link>
              <Link
                to="/profile"
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/profile")
                  ? "bg-purple-700 text-white shadow-md"
                  : "text-gray-300 hover:bg-purple-800/50 hover:text-white"
                  } transition-all duration-300`}
              >
                My Profile
              </Link>
              <Link
                to="movies"
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("moviess")
                  ? "bg-purple-700 text-white shadow-md"
                  : "text-gray-300 hover:bg-purple-800/50 hover:text-white"
                  } transition-all duration-300`}
              >
                Movies
              </Link>

              

            </div>
          </div>

          {/* Right side - Auth */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="relative group">
                    <img
                      src={user.photoURL || "https://via.placeholder.com/40"}
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-amber-400 hover:border-amber-300 transition-all duration-300 shadow-md"
                    />
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/90 text-amber-300 text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-10 shadow-lg">
                      {user.displayName || "User"}
                    </div>
                  </div>
                  <button
                    onClick={logout}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium text-sm"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-5 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-sm transform hover:-translate-y-0.5"
                >
                  Login / Register
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-300 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/")
              ? "bg-purple-700 text-white shadow-md"
              : "text-gray-300 hover:bg-purple-800/50 hover:text-white"
              } transition-all duration-300`}
          >
            Home
          </Link>
          <Link
            to="/profile"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/profile")
              ? "bg-purple-700 text-white shadow-md"
              : "text-gray-300 hover:bg-purple-800/50 hover:text-white"
              } transition-all duration-300`}
          >
            My Profile
          </Link>


          <div className="pt-4 pb-2">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <img
                    src={user.photoURL || "https://via.placeholder.com/40"}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-amber-400 hover:border-amber-300 transition-all duration-300 shadow-md"
                  />
                </div>
                <button
                  onClick={logout}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="block w-full text-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-5 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-sm"
              >
                Login / Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
