import React, { useEffect, useState } from "react";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Explore Our Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                {product.image ? (
                  <img
                    src={`http://localhost:5000/uploads/${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <h3>
                  <span className="text-lg font-semibold text-gray-800">
                    {product.description}
                  </span>
                </h3>
                <div className="flex items-center gap-2 mb-2">
                 
                </div>
               
                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListPage;
