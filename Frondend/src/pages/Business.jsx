import React from "react";
import { FaBuilding, FaCompass, FaCheckCircle } from "react-icons/fa";
import harviToolsImg from "../assets/images/harviToolsImg.jpg";
import PlasticMould1 from "../assets/images/PlasticMould1.jpg";
import PlasticMould2 from "../assets/images/PlasticMould2.jpg";
import PressTool1 from "../assets/images/PressTool1.jpeg";
import PressTool2 from "../assets/images/PressTool2.jpg";
import BlowMould1 from "../assets/images/BlowMould1.jpg";
import BlowMould2 from "../assets/images/BlowMould2.jpg";
import MillingworkImg from "../assets/images/Millingwork.jpeg";

const Business = () => {
  return (
    <div
      className="about-container bg-cover bg-center text-black"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="container mx-auto py-16 px-8 backdrop-blur-sm bg-white bg-opacity-50 rounded-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold uppercase">Nature of Business</h1>
          <p className="mt-4 text-lg">
            Explore the services and expertise offered by HARVI TOOLS
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <FaCompass className="mr-3 text-blue-400" /> Our Journey
            </h2>
            <p className="mb-6">
              Established in September 2019, <strong>HARVI TOOLS</strong> is
              dedicated to delivering high-quality tools for the home appliance
              and plastic industries. In a short period, we have earned trust
              from reputed multinational manufacturers by showcasing our
              commitment to excellence.
            </p>
            <h3 className="text-2xl font-semibold mt-8">Our Mission</h3>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start">
                <FaCheckCircle className="mr-3 text-green-400" />
                <strong>Highest Quality:</strong> Delivering top-notch products
                that meet industry standards.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-3 text-green-400" />
                <strong>Competitive Price:</strong> Providing value without
                compromising quality.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-3 text-green-400" />
                <strong>Shortest Lead Time:</strong> Ensuring timely delivery to
                meet customer demands.
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <img
              src={harviToolsImg}
              alt="HARVI TOOLS"
              className="rounded-lg mb-6 h-[400px] w-full object-cover"
            />
          </div>
        </div>



        {/* Plastic Injection Mould */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">

  <div className="grid grid-cols-2 gap-6">
    <img
      src={PlasticMould1}
      alt="HARVI TOOLS"
      className="rounded-lg shadow-xl h-[300px] w-full object-cover hover:scale-105 transition-transform duration-300"
    />
    <img
      src={PlasticMould2}
      alt="HARVI TOOLS"
      className="rounded-lg shadow-xl h-[300px] w-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>

  <div>
    <h2 className="text-3xl font-semibold mb-4">
      Plastic Injection Mould Making
    </h2>
    <p className="mb-6">
      We specialize in creating precise and durable plastic injection moulds tailored to your requirements.
    </p>
  </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
          {/* Press Tools Section */}
      <div className="grid grid-cols-2 gap-6">
          <div>
            <img
              src={PressTool1}
              alt="HARVI TOOLS"
              className="rounded-lg shadow-xl mb-6 h-[300px] w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
          <div>
            <img
              src={PressTool2}
              alt="HARVI TOOLS"
              className="rounded-lg shadow-xl mb-6 h-[300px] w-full object-cover hover:scale-105 transition-transform duration-300"
              />
          </div>
      </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Making Press Tools (Stamping)
            </h2>
            <p className="mb-6">
              Our expertise extends to designing and manufacturing high-quality
              press tools for various stamping needs.
            </p>
          </div>
        </div>

        

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
          {/* Lathe Work */}
          <div className="grid grid-cols-2 gap-6">

          <div>
            <img
              src={BlowMould1}
              alt="HARVI TOOLS"
              className="rounded-lg shadow-xl mb-6 h-[300px] w-full object-cover hover:scale-105 transition-transform duration-300"
              />
          </div>

          <div>
            <img
              src={BlowMould2}
              alt="HARVI TOOLS"
              className="rounded-lg shadow-xl mb-6 h-[300px] w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Lathe Work</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Blow mould making</li>
              <li>Turning work</li>
              <li>Thread cutting</li>
              <li>Knurling work</li>
              <li>External grooving</li>
              <li>Face grooving</li>
              <li>Buffing</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-12">
          {/* Image Section */}
          <div className="md:col-span-2">
            <img
              src={MillingworkImg}
              alt="HARVI TOOLS"
              className="rounded-lg shadow-xl mb-6 h-[300px] w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Heading Section */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-semibold mb-4">Milling Work</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Drilling</li>
              <li>Tapping</li>
              <li>Boring</li>
              <li>Jig boring</li>
              <li>Template jig</li>
              <li>Plate type jig</li>
              <li>Open type jig</li>
              <li>Channel jig</li>
            </ul>
          </div>

          {/* Points Section */}
          <div className="md:col-span-1 mt-12">
            <ul className="list-disc pl-6 space-y-2">
              <li>Leaf jig</li>
              <li>Box type jig</li>
              <li>Adjustable fixture</li>
              <li>Grinding fixture</li>
              <li>Welding fixture</li>
              <li>Assembly fixture</li>
              <li>Inspection fixture</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-xl mb-4">
            Partner with HARVI TOOLS for innovative and reliable solutions in
            the field of precision engineering.
          </p>
          <p className="text-lg font-medium">
            Contact us to learn more and start your journey toward precision and
            quality.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 my-6"></div>
    </div>
  );
};

export default Business;   
