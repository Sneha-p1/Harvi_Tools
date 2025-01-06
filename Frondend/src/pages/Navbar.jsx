import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import img1 from '../assets/images/logo.jpeg';
import About from "./About";
import Footer from "./Footer";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false); // To manage popup visibility
  const [password, setPassword] = useState(""); // To store admin password input
  const [error, setError] = useState(""); // To display error messages
  const navigate = useNavigate(); // For navigation

  // Function to handle password submission
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/validate-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Navigate to the admin dashboard on success
        navigate("/dashboard");
      } else {
        // Display error message
        setError(data.message || "Invalid password.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        {/* Top Section: Logo and Social Media Icons */}
        <div className="container mx-auto flex items-center justify-between py-6 px-6">
          {/* Left Section: Logo */}
          <div className="flex items-center space-x-4">
            <img
              src={img1}
              alt="Logo"
              className="h-16 w-auto shadow-lg rounded-full"
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
                href="/product"
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
                href="/business"
                className="hover:underline text-lg font-semibold tracking-wide transition-all duration-300"
              >
                BUSINESS
              </a>
              <a
                href="/contact"
                className="hover:underline text-lg font-semibold tracking-wide transition-all duration-300"
              >
                CONTACT
              </a>
              <button
                onClick={() => setShowPopup(true)}
                className="hover:underline text-lg font-semibold tracking-wide transition-all duration-300"
              >
                DASHBOARD
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Popup for Admin Password */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Enter Admin Password</h2>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                placeholder="Password"
                required
              />
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowPopup(false);
                    setError(""); // Clear any errors when closing
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        
      )}
      <About/>
      <Footer/>
    </>
  );
};

export default Navbar;
