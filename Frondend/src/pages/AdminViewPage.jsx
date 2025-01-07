import React, { useEffect, useState } from "react";

const AdminViewPage = () => {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", description: "", image: null });


  // Fetch all products
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

  // Handle edit button click
  const handleEditClick = (product) => {
    setEditProductId(product._id);
    setEditForm({ name: product.name, description: product.description, image: null });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setEditForm({ ...editForm, image: e.target.files[0] });
  };

  // Handle edit form submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", editForm.name);
    data.append("description", editForm.description);
    if (editForm.image) {
      data.append("image", editForm.image); // Append the image file if it exists
    }

    try {
      const response = await fetch(`http://localhost:5000/api/products/${editProductId}`, {
        method: "PUT",
        headers: {
          "x-admin-password": "harvi_tools",
        },
        body: data, // Send FormData instead of JSON
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const updatedProduct = await response.json();
      setProducts((prev) =>
        prev.map((product) =>
          product._id === updatedProduct._id ? updatedProduct : product
        )
      );
      setEditProductId(null);
      setEditForm({ name: "", description: "", image: null });
    } catch (error) {
      console.error(error.message);
    }
  };

  // Handle delete product
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "x-admin-password": "harvi_tools",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      setProducts((prev) => prev.filter((product) => product._id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  // Fetch products on component mount
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
                <td className="border border-gray-300 px-4 py-2">
                  {product.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.description}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.image ? (
                    <img
                    src={product.image} // Use the full image URL
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

      {editProductId && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Edit Product</h2>
          <form onSubmit={handleEditSubmit}>
            <div className="mb-2">
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                value={editForm.name}
                onChange={(e) =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1 font-semibold">Description</label>
              <textarea
                value={editForm.description}
                onChange={(e) =>
                  setEditForm({ ...editForm, description: e.target.value })
                }
                className="border border-gray-300 p-2 w-full"
              ></textarea>
            </div>
            <div className="mb-2">
              <label className="block mb-1 font-semibold">Product Image</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditProductId(null)}
              className="bg-gray-500 text-white px-4 py-2 ml-2 rounded"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminViewPage;
