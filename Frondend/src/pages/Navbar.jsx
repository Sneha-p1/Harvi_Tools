import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import img1 from '../assets/images/logo.jpeg';
import About from "./About";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <>
    <nav className="bg-white shadow-lg">
      {/* Top Section: Logo and Icons */}
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={img1}
            alt="Logo"
            className="h-16 w-auto shadow-lg rounded-full" // Larger logo with shadow
          />
          <div>
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">
              HARVI TOOLS
            </h1>
            <p className="text-md text-gray-500 font-medium">SINCE 2019</p>
          </div>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-gray-600 hover:text-red-500 transition-all duration-300"
          >
            <i className="fab fa-youtube text-3xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-pink-500 transition-all duration-300"
          >
            <i className="fab fa-instagram text-3xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom Section: Blue Navigation Bar */}
      <div className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto py-4 px-6">
          <div className="flex justify-center space-x-12">
            <a
              href="/about"
              className="hover:underline text-lg font-semibold tracking-wide transition-all duration-300"
            >
              ABOUT
            </a>
            <a
              href="/products"
              className="hover:underline text-lg font-semibold tracking-wide transition-all duration-300"
            >
              PRODUCTS
            </a>
            <a
              href="/services"
              className="hover:underline text-lg font-semibold tracking-wide transition-all duration-300"
            >
              SERVICES
            </a>
            <a
              href="/contact"
              className="hover:underline text-lg font-semibold tracking-wide transition-all duration-300"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
    <About/>
    <Footer/>
    </>

  );
};

export default Navbar;
