import React from 'react';

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Contact Info */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="mb-2">Springdale Public School</p>
            <p className="mb-2">123 School Street</p>
            <p className="mb-2">Springfield, IL 62704</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p>Email: <a href="mailto:info@springdale.edu" className="text-red-400">info@springdale.edu</a></p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="#home" className="hover:text-red-400">Home</a></li>
              <li><a href="#about" className="hover:text-red-400">About Us</a></li>
              <li><a href="#academics" className="hover:text-red-400">Academics</a></li>
              <li><a href="#admissions" className="hover:text-red-400">Admissions</a></li>
              <li><a href="#faculty" className="hover:text-red-400">Faculty</a></li>
              <li><a href="#students" className="hover:text-red-400">Students</a></li>
              <li><a href="#gallery" className="hover:text-red-400">Gallery</a></li>
              <li><a href="#contact" className="hover:text-red-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
