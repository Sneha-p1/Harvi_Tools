import React from 'react';
import { FaBuilding, FaTools, FaCheckCircle } from 'react-icons/fa'; // For icons
import img2 from '../assets/images/pic.jpeg'; // Replace with your image path

const About = () => {
  return (
    <div
      className="about-container bg-cover bg-center text-black"
      style={{
        minHeight: '100vh',
      }}
    >
      <div className="container mx-auto py-16 px-8 backdrop-blur-sm bg-white bg-opacity-50 rounded-lg">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold uppercase">About Us</h1>
          <p className="mt-4 text-lg">Learn more about HARVI TOOLS and what we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Headquarters Section */}
          <div className="headquarters-section">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <FaBuilding className="mr-3 text-blue-400" /> Headquarters
            </h2>
            <img src={img2} alt="Headquarters" className="rounded-lg shadow-lg mb-6 h-[400px] w-[650px]" />
          </div>

          {/* About Us Section */}
          <div className="about-section">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <FaTools className="mr-3 text-blue-400" /> About Us
            </h2>
            <p className="mb-6">
              Welcome to <strong>HARVI TOOLS</strong>. At HARVI TOOLS, we specialize in the design and manufacturing of
              high-quality plastic injection moulds and press tools. With a proven track record of delivering
              precision-engineered products, we cater to a wide range of industries, ensuring customized solutions
              tailored to your specific needs.
            </p>
            <p className="mb-6">
              <strong>Our vision:</strong> To be a trusted leader in India's precision engineering industry by
              understanding customer needs and delivering products that exceed expectations.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheckCircle className="mr-3 text-green-400" />
                Expertise in Precision Engineering: Our advanced toolroom is equipped with cutting-edge technology,
                including EDM machines and a range of conventional machinery, enabling us to achieve unparalleled
                precision and quality.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-3 text-green-400" />
                Whether you need custom moulds or specialized tools, we work closely with you to deliver products that
                meet your exact specifications.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-3 text-green-400" />
                Our stringent quality control processes ensure every product we manufacture exceeds industry standards.
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-xl mb-4">
            At HARVI TOOLS, we are committed to delivering excellence in every product, ensuring customer satisfaction.
          </p>
          <p className="text-lg font-medium">
            Contact us today to discuss your requirements and let us bring your vision to life with our expertise and
            innovation.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 my-6"></div>

    </div>
  );
};

export default About;
