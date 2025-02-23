import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const sections = [
  {
    icon: "➕",
    title: "Create Product",
    description: "Add a new product to the inventory.",
    link: "/admin",
    buttonLabel: "Create",
  },
  {
    icon: "➕",
    title: "Create Facility",
    description: "Add a new facility to the inventory.",
    link: "/facility",
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
    icon: "📋",
    title: "View Facilities",
    description: "View all the facilities in the inventory.",
    link: "/facility-view",
    buttonLabel: "View",
  },
  {
    icon: "📩",
    title: "View Messages",
    description: "Check messages from outsiders here.",
    link: "/message",
    buttonLabel: "Read Message",
  },
];

const CardComponent = ({ icon, title, description, link, buttonLabel }) => (
  <motion.div
    className="bg-black/60 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-yellow-400/20 p-8 w-64"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <div className="flex flex-col items-center">
      <div className="h-20 w-20 flex items-center justify-center bg-yellow-400/10 rounded-full mb-6">
        <span className="text-4xl text-yellow-400">{icon}</span>
      </div>
      <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center">{title}</h2>
      <p className="mb-6 text-gray-300 text-center">{description}</p>
      <Link to={link}>
        <motion.button
          className="bg-yellow-400 text-black py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 shadow-md"
          whileTap={{ scale: 0.95 }}
        >
          {buttonLabel}
        </motion.button>
      </Link>
    </div>
  </motion.div>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-black">
      {/* Pyramid Layout */}
      <motion.div 
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* Row 1 (3 Cards) */}
        <div className="flex gap-8">
          <CardComponent {...sections[0]} />
          <CardComponent {...sections[1]} />
          <CardComponent {...sections[2]} />
        </div>

        {/* Row 2 (2 Cards, Aligned Below Gaps) */}
        <div className="flex gap-8">
          {/* <div className="w-32"></div> Spacer to shift alignment */}
          <CardComponent {...sections[3]} />
          <CardComponent {...sections[4]} />
        </div>

      </motion.div>
    </div>
  );
};

export default Dashboard;
