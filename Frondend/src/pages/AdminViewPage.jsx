import React, { useEffect, useState } from "react";

const AdminViewPage = () => {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", description: "", image: null });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        headers: {
          "x-admin-password": "harvi_tools",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEditClick = (product) => {
    console.log("Editing Product ID:", product._id); 
    setEditProductId(product._id);
    setEditForm({ name: product.name, description: product.description, image: null });
    setIsModalOpen(true); 
  };

  const handleFileChange = (e) => {
    setEditForm({ ...editForm, image: e.target.files[0] });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append("name", editForm.name);
    data.append("description", editForm.description);
    if (editForm.image) {
      data.append("image", editForm.image); 
    }
  
    console.log("FormData being sent:", Object.fromEntries(data.entries())); 
  
    try {
      const response = await fetch(`http://localhost:5000/api/products/${editProductId}`, {
        method: "PUT",
        headers: {
          "x-admin-password": "harvi_tools",
        },
        body: data,
      });
  
      if (!response.ok) {
        throw new Error("Failed to update product");
      }
  
      const updatedProduct = await response.json();
  
      setProducts((prev) =>
        prev.map((product) =>
          product._id === updatedProduct.data._id ? updatedProduct.data : product
        )
      );
      setIsModalOpen(false);
    } catch (error) {
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: "DELETE",
        headers: {
          "x-admin-password": "harvi_tools",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
  
      // If the deletion is successful, remove the product from the state
      setProducts((prev) => prev.filter((product) => product._id !== productId));
    } catch (error) {
      console.error(error.message);
    }
  };
  

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Products Management</h1>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                <td className="border border-gray-300 px-4 py-2">{product.description}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.image ? (
                    <img
                      src={`http://localhost:5000/uploads/${product.image}`}
                      alt={product.name}
                      className="w-16 h-16 object-cover"
                    />
                  ) : (
                    <span>No image</span>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleEditClick(product)}
                    className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-md w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Description</label>
                <textarea
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm({ ...editForm, description: e.target.value })
                  }
                  className="border border-gray-300 p-2 w-full"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Image</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 mr-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminViewPage;
