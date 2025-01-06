// import React from 'react';
// import { FaBuilding, FaTools, FaCheckCircle } from 'react-icons/fa'; // For icons
// import img2 from '../assets/images/pic.jpeg'; // Replace with your image path

// const Business = () => {
//   return (
//     <div
//       className="about-container bg-cover bg-center text-black"
//       style={{
//         minHeight: '100vh',
//       }}
//     >
//       <div className="container mx-auto py-16 px-8 backdrop-blur-sm bg-white bg-opacity-50 rounded-lg">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold uppercase">Nature of Business</h1>
//           <p className="mt-4 text-lg">Learn more about HARVI TOOLS and the services we offer to support your needs</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Headquarters Section */}
//           <div className="headquarters-section">
//             <h2 className="text-3xl font-semibold mb-4 flex items-center">
//               <FaBuilding className="mr-3 text-blue-400" /> Business
//             </h2>
//             <img src={img2} alt="Headquarters" className="rounded-lg shadow-lg mb-6 h-[400px] w-[650px]" />
//           </div>

//           {/* About Us Section */}
//           <div className="about-section">
//             <h2 className="text-3xl font-semibold mb-4 flex items-center">
//               <FaTools className="mr-3 text-blue-400" /> About Us
//             </h2>
//             <p className="mb-6">
//               Welcome to <strong>HARVI TOOLS</strong>. At HARVI TOOLS, we specialize in the design and manufacturing of
//               high-quality plastic injection moulds and press tools. With a proven track record of delivering
//               precision-engineered products, we cater to a wide range of industries, ensuring customized solutions
//               tailored to your specific needs.
//             </p>
//             <p className="mb-6">
//               <strong>Our vision:</strong> To be a trusted leader in India's precision engineering industry by
//               understanding customer needs and delivering products that exceed expectations.
//             </p>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <FaCheckCircle className="mr-3 text-green-400" />
//                 Expertise in Precision Engineering: Our advanced toolroom is equipped with cutting-edge technology,
//                 including EDM machines and a range of conventional machinery, enabling us to achieve unparalleled
//                 precision and quality.
//               </li>
//               <li className="flex items-start">
//                 <FaCheckCircle className="mr-3 text-green-400" />
//                 Whether you need custom moulds or specialized tools, we work closely with you to deliver products that
//                 meet your exact specifications.
//               </li>
//               <li className="flex items-start">
//                 <FaCheckCircle className="mr-3 text-green-400" />
//                 Our stringent quality control processes ensure every product we manufacture exceeds industry standards.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-12">
//           <p className="text-xl mb-4">
//             At HARVI TOOLS, we are committed to delivering excellence in every product, ensuring customer satisfaction.
//           </p>
//           <p className="text-lg font-medium">
//             Contact us today to discuss your requirements and let us bring your vision to life with our expertise and
//             innovation.
//           </p>
//         </div>
//       </div>
//       <div className="border-t border-gray-700 my-6"></div>

//     </div>
//   );
// };

// export default Business;
    



import React from 'react';
import { FaBuilding, FaTools, FaCheckCircle } from 'react-icons/fa';
import harviToolsImg from '../assets/images/logo.jpeg'; // Replace with your image path

const Business = () => {
  return (
    <div
      className="about-container bg-cover bg-center text-black"
      style={{
        minHeight: '100vh',
      }}
    >
      <div className="container mx-auto py-16 px-8 backdrop-blur-sm bg-white bg-opacity-50 rounded-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold uppercase">Nature of Business</h1>
          <p className="mt-4 text-lg">
            Explore the services and expertise offered by HARVI TOOLS in the field of precision engineering.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <FaTools className="mr-3 text-blue-400" /> Introduction
            </h2>
            <p className="mb-6">
              Established in September 2019, <strong>HARVI TOOLS</strong> is dedicated to delivering high-quality tools
              for the home appliance and plastic industries. In a short period, we have earned trust from reputed
              multinational manufacturers by showcasing our commitment to excellence.
            </p>
            <h3 className="text-2xl font-semibold mt-8">Our Mission</h3>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start">
                <FaCheckCircle className="mr-3 text-green-400" />
                <strong>Highest Quality:</strong> Delivering top-notch products that meet industry standards.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-3 text-green-400" />
                <strong>Competitive Price:</strong> Providing value without compromising quality.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-3 text-green-400" />
                <strong>Shortest Lead Time:</strong> Ensuring timely delivery to meet customer demands.
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <img
              src={harviToolsImg}
              alt="HARVI TOOLS"
              className="rounded-lg shadow-lg mb-6 h-[400px] w-full object-cover"
            />
          </div>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Plastic Injection Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Plastic Injection Mould Making</h2>
            <p className="mb-6">
              We specialize in creating precise and durable plastic injection moulds tailored to your requirements.
            </p>
          </div>

          {/* Press Tools Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Making Press Tools (Stamping)</h2>
            <p className="mb-6">
              Our expertise extends to designing and manufacturing high-quality press tools for various stamping needs.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Lathe Work */}
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

          {/* Milling Work */}
          <div>
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
            Partner with HARVI TOOLS for innovative and reliable solutions in the field of precision engineering.
          </p>
          <p className="text-lg font-medium">
            Contact us to learn more and start your journey toward precision and quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Business;
