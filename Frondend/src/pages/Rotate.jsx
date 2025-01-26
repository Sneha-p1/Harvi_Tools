import React, { useState } from "react";
import PlasticMould1 from "../assets/images/PlasticMould1.jpg";
import PlasticMould2 from "../assets/images/PlasticMould2.jpg";
import PressTool1 from "../assets/images/PressTool1.jpeg";
import PressTool2 from "../assets/images/PressTool2.jpg";
import BlowMould1 from "../assets/images/BlowMould1.jpg";
import BlowMould2 from "../assets/images/BlowMould2.jpg";

const Rotate = () => {
  const [paused, setPaused] = useState(false);

  const products = [PlasticMould1, PlasticMould2, PressTool1, PressTool2, BlowMould1, BlowMould2];

  return (
    <div className="relative overflow-hidden bg-gray-100 py-10 text-center">
      <h2 className="text-4xl font-bold text-gray-500 mb-8">Services</h2>
      <div
        className={`flex w-max gap-8 ${
          paused ? "" : "animate-scroll"
        }`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {products.concat(products).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Product ${index + 1}`}
            className="h-64 w-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
};

export default Rotate;
