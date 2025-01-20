import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="w-[90%] max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden flex">
        {/* Left Section */}
        <div className="w-1/2 bg-blue-500 text-white p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="name"
                className="w-full bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="email address"
                className="w-full bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <textarea
                placeholder="message"
                className="w-full bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:ring-0"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-100 transition"
            >
              Submit
            </button>
          </form>
          <p className="mt-6 text-sm">📞 25 546 9402</p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 relative">
          <iframe
            title="Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509315!2d-122.41941548468282!3d37.77492977975915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814d5f93aebd%3A0x4c8b5a322a1e53d5!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1613108177959!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
