import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
    
    <div className="bg-gray-100 h-screen flex items-center justify-center overflow-hidden">
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 w-full max-w-4xl px-4">
        {/* Dashboard Header */}
        <div className="text-4xl font-semibold text-gray-800 mb-4 text-center">
           Dashboard
        </div>
           {/* Image Section */}
        {/* <div className="flex justify-center mt-6">
          <img
            src={img}
            alt="Product"
            className="rounded-lg  max-h-48 w-auto"
          />
        </div> */}
        {/* Dashboard Content */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {/* Create Product Card */}
          <div className="bg-blue-500 text-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4">Create Product</h3>
            <Link to="/admin" className="w-full">
              <button className="bg-blue-700 w-full py-2 px-4 text-center rounded-full hover:bg-blue-800 transition duration-200">
                Go to Create
              </button>
            </Link>
          </div>

          {/* View Products Card */}
          <div className="bg-yellow-500 text-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4">View Products</h3>
            <Link to="/admin-view" className="w-full">
              <button className="bg-yellow-700 w-full py-2 px-4 text-center rounded-full hover:bg-yellow-800 transition duration-200">
                Go to View
              </button>
            </Link>
          </div>

          <div className="mt-2 text-center">
            <a
              href="/home"
              className="inline-block px-4 py-2 bg-black text-white font-semibold rounded mx-auto"
            >
              Back to Home
            </a>
          </div>
        </div>

       
      </div>
    </div>
    </>
  );
};

export default Dashboard;