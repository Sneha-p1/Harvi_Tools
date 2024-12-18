import React from 'react';
import './About.css';
import img2 from '../assets/images/pic.jpeg'; // Replace with your image path

const About = () => {
  return (
    <div className="about-container">
      {/* Header */}
      <div className="header">
      </div>

      <div className="content">
        {/* Headquarters Section */}
        <div className="headquarters-section">
          <h2>HEADQUARTERS</h2>
          <img src={img2} alt="Headquarters" className="headquarters-image" />
        </div>

        {/* About Us Section */}
        <div className="about-section">
          <h2>ABOUT US</h2>
          <p>
          Welcome to HARVI TOOLS

At HARVI TOOLS, we specialize in the design and manufacturing of high-quality plastic injection moulds and press tools. With a proven track record of delivering precision-engineered products, we cater to a wide range of industries, ensuring customized solutions tailored to your specific needs.
We specialize in designing and manufacturing precision moulds, press tools and all types of precision machining work.
<p className='mt-4'>
Our vision is to be a trusted leader in India's precision engineering industry by understanding customer needs and delivering products that go beyond their expectations.

Expertise in Precision Engineering: Our advanced toolroom is equipped with cutting-edge technology, including  EDM machines, and a range of conventional machinery, enabling us to achieve unparalleled precision and quality.

 Whether you need custom moulds or specialized tools, we work closely with you to deliver products that meet your exact specification.

Our stringent quality control processes ensure every product we manufacture exceeds industry standards.

</p>



</p>
          <p>
          At HARVI TOOLS, we are committed to delivering excellence in every product ensuring customer satisfaction. 

Contact Us today to discuss your requirements and let us bring your vision to life with our expertise and innovation.
          
          </p>
         
        </div>
      </div>

      
    </div>
  );
};

export default About;
