import React, { useState } from "react";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const contactData = { email, name, message };
  
    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });
  
      const data = await response.json(); // Parse the response JSON
  
      if (response.ok) {
        console.log("Message sent successfully:", data);
        setSuccessMessage("Thank you! Your message has been sent.");
        setEmail("");
        setName("");
        setMessage("");
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[75%] max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-gray-500 text-white p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
          {successMessage && (
            <p className="text-green-300 mb-4 font-semibold">{successMessage}</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:ring-0"
                rows="4"
              ></textarea>
            </div>
            <button
  type="submit"
  className="bg-white text-blue-500 font-bold py-2 px-4 rounded transition duration-300 hover:bg-blue-600 hover:text-white"
>
  Submit
</button>

          </form>
          <p className="mt-6 mb-4 font-bold" >Business Hours</p>
          <p className="text-sm font-bold">Mon-Fri: 10 am-8 pm </p>
          <p className="text-sm font-bold">Sat, Sun: Closed</p>
          <p className="mt-6 text-sm font-bold">📞 +91 8078417696</p>

        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206898.79208929816!2d77.03091305723868!3d8.253249228746848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ad60665b92b1%3A0x533652f13fa22670!2sHARVI%20TOOLS!5e0!3m2!1sen!2sin!4v1737357037140!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[400px] md:h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
