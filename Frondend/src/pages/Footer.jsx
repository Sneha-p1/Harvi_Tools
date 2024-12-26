import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light-blue text-gray-800 py-8 px-4"> 
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Company Info */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-serif text-blue-500 mb-4">HARVI TOOLS</h3>
            {/* <img src="logo.png" alt="HARVI TOOLS Logo" className="w-20 h-20 mb-4" />  */}
            <p className="text-sm leading-relaxed">
              Specialists in precision moulds and tools manufacturing. Delivering high-quality products tailored to meet your specific needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3">
            <h4 className="text-lg font-semibold text-blue-500 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-blue-400">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400">Our Services</a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400">Products</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/3">
            <h4 className="text-lg font-semibold text-blue-500 mb-4">Contact Us</h4>
            <p className="text-sm">
              <span className="font-medium">Address:</span> Adumancadu, Parasuvaikkal, Kerala 695508
            </p>
            <p className="text-sm mt-2">
              <span className="font-medium">Phone:</span>{' '}
              <a href="tel:08078417696" className="hover:text-blue-400">
                +91-8078417696
              </a>
            </p>
            <p className="text-sm mt-2">
              <span className="font-medium">Email:</span>{' '}
              <a href="mailto:harviplastics@gmail.com" className="hover:text-blue-400">
                harviplastics@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} HARVI TOOLS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;