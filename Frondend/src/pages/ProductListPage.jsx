// src/components/ProductListPage.js

import React, { useEffect, useState } from "react";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log("Error fetching products:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold">Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product._id} className="border-b py-4">
            <h2 className="text-lg font-medium">{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
