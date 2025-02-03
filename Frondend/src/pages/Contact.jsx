import React, { useState } from "react";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNUmber] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = { email, name, message, phoneNumber };

    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Message sent successfully:", data);
        setSuccessMessage("Thank you! Your message has been sent.");
        setEmail("");
        setName("");
        setMessage("");
        setPhoneNUmber(false);
      } else {
        console.error("Server returned an error:", data);
        setSuccessMessage(`Error: ${data.error || "Failed to send message"}`);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSuccessMessage("An error occurred. Please try again.");
    }
  };

  return (
<div
  className="min-h-screen flex items-center justify-center  bg-cover bg-center"
  
 
>

    <div className="w-[90%] max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-black/70 text-white rounded-lg overflow-hidden">
      {/* Contact Form Section */}
      <div className="col-span-1 p-10">
        <h1 className="text-3xl font-bold mb-8">GET IN TOUCH</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter a valid email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder="Enter your Mobile Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNUmber(e.target.value)}
              required
              className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div className="relative">
            <textarea
              placeholder="Enter your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none focus:border-yellow-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-2 rounded-md shadow-md hover:bg-yellow-600 transition"
          >
            <i className="fas fa-paper-plane mr-2"></i> Submit
          </button>
        </form>
      </div>
  
      {/* Map and Info Section */}
      <div className="col-span-1 p-10">
        <h1 className="text-3xl font-bold mb-8">LOCATE US</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206898.79208929816!2d77.03091305723868!3d8.253249228746848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ad60665b92b1%3A0x533652f13fa22670!2sHARVI%20TOOLS!5e0!3m2!1sen!2sin!4v1737357037140!5m2!1sen!2sin"
          width="100%"
          height="200"
          className="rounded-md mb-6"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="mt-6 mb-4 font-bold">Business Hours</p>
          <p className="text-sm font-bold">Mon-Fri: 10 am-8 pm</p>
          <p className="text-sm font-bold">Sat, Sun: Closed</p>
          <p className="mt-6 text-sm font-bold">📞 +91 8078417696</p>
       
      </div>
    </div>
  </div>
  
  );
};

export default ContactPage;
