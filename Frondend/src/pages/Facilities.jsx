import React, { useState } from "react";
import { motion } from "framer-motion";
import MachineImage1 from "../assets/images/Mechanical.jpg";
import MachineImage2 from "../assets/images/Mechanical.jpg";
import MachineImage3 from "../assets/images/Mechanical.jpg";
import CertificateImage1 from "../assets/images/certificate.jpg";
import CertificateImage2 from "../assets/images/certificate.jpg";
import { FaCertificate } from "react-icons/fa";
import { Dialog } from "@headlessui/react";

const Facilities = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const machines = [
    {
      id: 1,
      name: "High-Precision CNC Machine",
      description: "Our CNC machines ensure unparalleled precision for manufacturing complex components with exceptional accuracy.",
      image: MachineImage1,
    },
    {
      id: 2,
      name: "Injection Molding Machine",
      description: "Our advanced injection molding machines deliver high-quality components with superior durability.",
      image: MachineImage2,
    },
    {
      id: 3,
      name: "Automated Assembly Line",
      description: "Our fully automated assembly lines boost efficiency and maintain consistent product quality.",
      image: MachineImage3,
    },
  ];

  const openImage = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-black py-12 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Our Advanced Facilities
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Explore our cutting-edge manufacturing and testing units.
        </p>
      </motion.div>

      {/* Machine Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {machines.map((machine) => (
          <motion.div
            key={machine.id}
            className="relative text-center cursor-pointer"
            onMouseEnter={() => setHoveredImage(machine.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <motion.img
              src={machine.image}
              alt={machine.name}
              className={`rounded-lg shadow-lg w-full object-cover h-[300px] transition-transform duration-300 ${
                hoveredImage === machine.id ? "scale-105" : ""
              }`}
            />
            <h2 className="text-xl font-semibold text-yellow-400 mt-4">
              {machine.name}
            </h2>
            {hoveredImage === machine.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-0 left-0 w-full h-full bg-black/70 text-white flex items-center justify-center p-4 rounded-lg"
              >
                <p>{machine.description}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Certificate Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-16"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-8 flex justify-center items-center">
          <FaCertificate className="mr-3" /> Our Certifications
        </h2>
        <div className="flex justify-center gap-3">
          <motion.img
            src={CertificateImage1}
            alt="Certificate 1"
            onClick={() => openImage(CertificateImage1)}
            className="rounded-lg shadow-lg w-[40%] object-cover h-[350px] cursor-pointer"
          />
          <motion.img
            src={CertificateImage2}
            alt="Certificate 2"
            onClick={() => openImage(CertificateImage2)}
            className="rounded-lg shadow-lg w-[40%] object-cover h-[350px] cursor-pointer"
          />
        </div>
      </motion.div>

      {/* Image Modal */}
      {isOpen && (
        <Dialog open={isOpen} onClose={closeImage} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Enlarged Certificate"
              className="rounded-lg shadow-lg max-w-full max-h-screen"
            />
            <button
              onClick={closeImage}
              className="absolute top-2 right-2 text-white text-3xl focus:outline-none"
            >
              &times;
            </button>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Facilities;


