import React from 'react';

const ContactUs = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
    }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative container mx-auto py-16 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold uppercase">Contact Us</h1>

            <div className="space-y-6">
              {/* Call Us */}
              <div className="flex items-start space-x-4">
                <div className="text-blue-400 text-2xl">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Call Us</h3>
                  <p className="text-sm">+91-8078417696</p>
                </div>
              </div>

              <hr className="border-gray-500" />

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="text-blue-400 text-2xl">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Location</h3>
                  <p className="text-sm">
                    Adumancadu, Parasuvaikkal, Kerala 695508
                  </p>
                </div>
              </div>

              <hr className="border-gray-500" />

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="text-blue-400 text-2xl">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Business Hours</h3>
                  <p className="text-sm">
                    Mon - Fri: 10 am - 8 pm<br />
                    Sat, Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 p-3 w-full bg-transparent border border-white rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 p-3 w-full bg-transparent border border-white rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="mt-2 p-3 w-full bg-transparent border border-white rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your address"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-2 p-3 w-full bg-transparent border border-white rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-black font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
