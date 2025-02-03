import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../assets/images/CreactProduct.gif";

const ProductAddPage = () => {
  const [formData, setFormData] = useState({ name: "", description: "", image: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    if (formData.image) {
      data.append("image", formData.image);
    }

    fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "x-admin-password": "harvi_tools",
      },
      body: data,
    })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        console.log("Product added:", data);
        navigate("/admin-view");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-black to-gray-800 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* GIF Section */}
        <div className="md:w-1/2 mb-12 md:mb-0 flex justify-center relative">
          <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-yellow-500/30 p-1 backdrop-blur-sm">
            <img 
              src={Product}
              alt="Product Animation" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Glass Form Container */}
        <div className="md:w-1/2 relative">
          <div className="glass-container bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h1 className="text-3xl md:text-4xl font-bold uppercase mb-6 tracking-wide text-yellow-400">
              Add New Product
              {/* <span className="text-yellow-400 block mt-2">Create New Product</span> */}
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-gray-300 font-semibold mb-3 text-lg">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/40 border-2 border-white/10 rounded-xl p-4 text-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 placeholder-gray-400"
                  placeholder="Enter product name"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-3 text-lg">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-black/40 border-2 border-white/10 rounded-xl p-4 text-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 h-32 placeholder-gray-400"
                  placeholder="Describe your product..."
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-3 text-lg">Product Image</label>
                <div className="relative bg-black/40 border-2 border-white/10 rounded-xl p-4 transition-colors hover:border-yellow-500/50">
                  <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="text-gray-400">
                    <span className="text-yellow-400">Click to upload</span> or drag and drop
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-xl font-bold text-lg uppercase tracking-wide hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
              >
                Create Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAddPage;
