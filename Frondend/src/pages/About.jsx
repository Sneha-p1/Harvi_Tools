import React from 'react';
import aboutimg from '../assets/images/about.jpg';
import Footer from './Footer';
import Rotate from './Rotate';

const About = () => {
  return (
    <div
      className="about-container bg-cover bg-center text-black"
      style={{
        minHeight: '100vh',
      }}
    >
   
<div className="bg-black text-center text-white py-16 px-4">
        <h1 className="text-2xl md:text-3xl font-semibold uppercase leading-relaxed tracking-normal">
            Delivering high-quality products tailored to <br />
            <span className="text-yellow-500">meet your specific needs.</span>
        </h1>
</div>

<div className="relative bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* About Us Section */}
        {/* <p className="text-3xl text-gray-800 uppercase">About Us</p> */}
        <h1 className="text-2xl md:text-3xl font-bold leading-tight mt-2">
          {/* Setting Up Standard On <br /> */}
          <span className="text-gray-500 font-medium">Learn more about HARVI TOOLS and what we do</span>
        </h1>

        {/* Image and Content Section */}
        <div className="relative mt-8 flex flex-col md:flex-row items-center">
          <div className="relative w-full md:w-3/5">
            <img
              src={aboutimg}
              alt="Working Culture"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/5 bg-gray-900 text-white p-6 md:absolute md:right-0 md:top-1/4 md:translate-x-12 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Our Stories</h3>
            <p className="text-sm mt-2 text-gray-300">
            At HARVI TOOLS, we specialize in creating high-quality plastic injection moulds and press tools. With a focus on precision and reliability, we provide customized solutions for various industries.
Our advanced tools and skilled team ensure top-quality products that meet industry standards. We are committed to understanding customer needs and delivering beyond expectations.
            </p>
   
              
          </div>
        </div>
        </div>
        <Rotate/>
    </div>


<div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold"> 
          <span className="text-gray-800">Who</span> <span className="text-gray-600">We Are</span>
        </h2>
        <p className="mt-6 text-lg text-gray-700">
        At HARVI TOOLS, we specialize in the design and manufacturing of high-quality
            plastic injection moulds and press tools. With a proven track record of delivering
            precision-engineered products, we cater to a wide range of industries, ensuring
            customized solutions tailored to your specific needs.        </p>
        <p className="mt-6 text-lg text-gray-700">
        Our advanced toolroom is equipped with cutting-edge technology, including
            EDM machines and a range of conventional machinery, enabling us to achieve
            unparalleled precision and quality.
          </p>
         
        </div>
        {/* <ul className="list-disc mt-6 text-lg text-gray-700 ml-72">
            <li>Custom moulds tailored to your exact specifications.</li>
            <li>Specialized tools crafted with precision and care.</li>
            <li>Stringent quality control processes to exceed industry standards.</li>
          </ul> */}
    </div>










      





      {/* <div className="container mx-auto py-16 px-8 backdrop-blur-sm bg-white bg-opacity-50 rounded-lg">
       
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold uppercase">About Us</h1>
          <p className="mt-4 text-lg">Learn more about HARVI TOOLS and what we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> */}
        
          {/* <div className="headquarters-section">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <FaBuilding className="mr-3 text-blue-400" /> Headquarters
            </h2>
            <img src={img2} alt="Headquarters" className="rounded-lg shadow-lg mb-6 h-[400px] w-[650px]" />
          </div> */}

         
          {/* <div className="about-section">
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
          </div> */}
        {/* </div> */}

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <p className="text-xl mb-4">
            At HARVI TOOLS, we are committed to delivering excellence in every product, ensuring customer satisfaction.
          </p>
          <p className="text-lg font-medium">
            Contact us today to discuss your requirements and let us bring your vision to life with our expertise and
            innovation.
          </p>
        </div> */}
      {/* </div> */}

      {/* <div className="border-t border-gray-700 my-6"></div> */}
      <Footer/>
    </div>
  );
};

export default About;      


// import React from 'react';
// import { FaBuilding, FaTools, FaCheckCircle } from 'react-icons/fa';
// import img2 from '../assets/images/pic.jpeg';
// import Footer from './Footer';

// const About = () => {
//   return (
//     <div className="about-container bg-black text-white">
//       <div className="container mx-auto py-16 px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold uppercase text-yellow-500">About Us</h1>
//           <p className="mt-4 text-lg text-gray-300">Learn more about HARVI TOOLS and what we do</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Headquarters Section */}
//           <div className="headquarters-section">
//             <h2 className="text-3xl font-semibold mb-4 flex items-center">
//               <FaBuilding className="mr-3 text-yellow-500" /> Headquarters
//             </h2>
//             <img src={img2} alt="Headquarters" className="rounded-lg shadow-lg mb-6 h-[400px] w-[650px]" />
//           </div>

//           {/* About Us Section */}
//           <div className="about-section">
//             <h2 className="text-3xl font-semibold mb-4 flex items-center">
//               <FaTools className="mr-3 text-yellow-500" /> About Us
//             </h2>
//             <p className="mb-6 text-gray-300">
//               Welcome to <strong className="text-yellow-500">HARVI TOOLS</strong>. At HARVI TOOLS, we specialize in the design and manufacturing of
//               high-quality plastic injection moulds and press tools. With a proven track record of delivering
//               precision-engineered products, we cater to a wide range of industries, ensuring customized solutions
//               tailored to your specific needs.
//             </p>
//             <p className="mb-6 text-gray-300">
//               <strong className="text-yellow-500">Our vision:</strong> To be a trusted leader in India's precision engineering industry by
//               understanding customer needs and delivering products that exceed expectations.
//             </p>
//             <ul className="space-y-4 text-gray-300">
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
//           <p className="text-xl mb-4 text-gray-300">
//             At HARVI TOOLS, we are committed to delivering excellence in every product, ensuring customer satisfaction.
//           </p>
//           <p className="text-lg font-medium text-yellow-500">
//             Contact us today to discuss your requirements and let us bring your vision to life with our expertise and
//             innovation.
//           </p>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default About;

