 import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-black">
      {/* Container for Dashboard */}
      <div className="max-w-5xl w-full">
        
        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Create Product Section */}
          <div className="bg-black/60 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-yellow-400/20 p-8">
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 flex items-center justify-center bg-yellow-400/10 rounded-full mb-6">
                <span className="text-4xl text-yellow-400">➕</span>
              </div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Create Product</h2>
              <p className="mb-6 text-gray-300 text-center">Add a new product to the inventory.</p>
              <Link to="/admin">
                <button className="bg-yellow-400 text-black py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 shadow-md">
                  Create
                </button>
              </Link>
            </div>
          </div>
          
          {/* View Product Section */}
          <div className="bg-black/60 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-yellow-400/20 p-8">
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 flex items-center justify-center bg-yellow-400/10 rounded-full mb-6">
                <span className="text-4xl text-yellow-400">📋</span>
              </div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">View Products</h2>
              <p className="mb-6 text-gray-300 text-center">View all the products in the inventory.</p>
              <Link to="/admin-view">
                <button className="bg-yellow-400 text-black py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 shadow-md">
                  View
                </button>
              </Link>
            </div>
          </div>

          {/* Outsider Message Section */}
          <div className="bg-black/60 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-yellow-400/20 p-8">
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 flex items-center justify-center bg-yellow-400/10 rounded-full mb-6">
                <span className="text-4xl text-yellow-400">📩</span>
              </div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">View Messages</h2>
              <p className="mb-6 text-gray-300 text-center">Check messages from outsiders here.</p>
              <Link to="/message">
                <button className="bg-yellow-400 text-black py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 shadow-md">
                  Read Message
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
