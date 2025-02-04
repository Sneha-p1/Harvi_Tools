import React from 'react';
import aboutimg from '../assets/images/about.jpg';
import Footer from './Footer';
import Rotate from './Rotate';
import img1 from '../assets/images/aaaa.jpg';
import ImageSlider from './ImageSlider';

const About = () => {

  return (
    <div
      className="about-container bg-cover bg-center text-black"
      style={{
        minHeight: '100vh',
      }}
    >
   
   <div className="bg-black text-white min-h-screen flex items-center justify-center px-8">
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-center">
    {/* Text Section */}
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl md:text-4xl font-bold uppercase leading-snug tracking-wide">
        Delivering high-quality products tailored to <br />
        <span className="text-yellow-500">meet your specific needs.</span>
      </h1>
      <p className="mt-4 text-md text-gray-400">
        Engineered to exceed expectations, our solutions prioritize performance, reliability, and innovation.  
        Each product is crafted with attention to detail, ensuring it aligns perfectly with your goals.  
        Experience excellence designed to transform your vision into reality.
      </p>
    </div>

    {/* Image Animation Section */}
    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
  <ImageSlider />
</div>
  </div>
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

    </div>

      <Footer/>
    </div>
  );
};

export default About;      




