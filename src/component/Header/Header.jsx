import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-screen-xl mx-auto px-4 lg:px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="https://springdaleskapurthala.com/wp-content/uploads/2020/03/springdales-logo.png"
            className="h-10"
            alt="Logo"
          />
        </Link>
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="lg:hidden text-gray-800 hover:text-red-600 focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
        {/* Menu items for large screens */}
        <div className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded transition duration-300 ${isActive ? "text-red-600 border-b-2 border-red-600" : "text-gray-800 hover:text-red-600"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded transition duration-300 ${isActive ? "text-red-600 border-b-2 border-red-600" : "text-gray-800 hover:text-red-600"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/acadmics"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded transition duration-300 ${isActive ? "text-red-600 border-b-2 border-red-600" : "text-gray-800 hover:text-red-600"}`
                }
              >
                Academics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admissions"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded transition duration-300 ${isActive ? "text-red-600 border-b-2 border-red-600" : "text-gray-800 hover:text-red-600"}`
                }
              >
                Admissions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faculty"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded transition duration-300 ${isActive ? "text-red-600 border-b-2 border-red-600" : "text-gray-800 hover:text-red-600"}`
                }
              >
                Faculty
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/students"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded transition duration-300 ${isActive ? "text-red-600 border-b-2 border-red-600" : "text-gray-800 hover:text-red-600"}`
                }
              >
                Students
              </NavLink>
            </li>
          
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded transition duration-300 ${isActive ? "text-red-600 border-b-2 border-red-600" : "text-gray-800 hover:text-red-600"}`
                }
              >
                Gallery
              </NavLink>
               
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded transition duration-300 ${isActive ? "text-red-600 border-b-2 border-red-600" : "text-gray-800 hover:text-red-600"}`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
