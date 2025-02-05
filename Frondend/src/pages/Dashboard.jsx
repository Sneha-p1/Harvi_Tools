import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-black">
      {/* Container for Dashboard */}
      <div className="max-w-5xl w-full">
        
        {/* Dashboard Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
          {/* Card Components */}
          {[
            {
              icon: "➕",
              title: "Create Product",
              description: "Add a new product to the inventory.",
              link: "/admin",
              buttonLabel: "Create",
            },
            {
              icon: "📋",
              title: "View Products",
              description: "View all the products in the inventory.",
              link: "/admin-view",
              buttonLabel: "View",
            },
            {
              icon: "📩",
              title: "View Messages",
              description: "Check messages from outsiders here.",
              link: "/message",
              buttonLabel: "Read Message",
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              className="bg-black/60 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-yellow-400/20 p-8"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 flex items-center justify-center bg-yellow-400/10 rounded-full mb-6">
                  <span className="text-4xl text-yellow-400">{section.icon}</span>
                </div>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">{section.title}</h2>
                <p className="mb-6 text-gray-300 text-center">{section.description}</p>
                <Link to={section.link}>
                  <motion.button
                    className="bg-yellow-400 text-black py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 shadow-md"
                    whileTap={{ scale: 0.95 }}
                  >
                    {section.buttonLabel}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;

