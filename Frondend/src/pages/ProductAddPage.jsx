import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

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
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold">Create Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 w-full"
          ></textarea>
        </div>
        <div>
          <label>Product Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductAddPage;
