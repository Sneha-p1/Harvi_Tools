// src/components/DashboardPage.js

import React, { useState } from "react";

const DashboardPage = () => {
  const [formData, setFormData] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add product logic (POST request)
    fetch('http://localhost:5000/api/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Product added:', data);
  })
  .catch((error) => console.log('Error:', error));

  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
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
        <button type="submit" className="bg-blue-600 text-white py-2 px-4">
          Add Product
        </button>
      </form>
      {/* Display list of products for editing/deleting */}
    </div>
  );
};

export default DashboardPage;
