import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";

const AdminViewPage = () => {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", description: "", image: null });
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setProducts((prev) => prev.map((product) => (product._id === updatedProduct.data._id ? updatedProduct.data : product)));
      setIsModalOpen(false);
    } catch (error) {
      console.error(error.message);
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
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      {/* <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Admin Products Management</h1> */}
      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white shadow-lg rounded-lg p-4 text-center">
              <img
                src={`http://localhost:5000/uploads/${product.image}`}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-4 text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <BiSolidEdit
                  className="text-blue-500 text-2xl cursor-pointer hover:text-blue-700"
                  onClick={() => handleEditClick(product)}
                />
                <MdDelete
                  className="text-red-500 text-2xl cursor-pointer hover:text-red-700"
                  onClick={() => handleDelete(product._id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Product</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">Name</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">Description</label>
                <textarea
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:ring focus:ring-blue-400"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">Image</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="flex justify-end">
                <button onClick={() => setIsModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">Cancel</button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminViewPage;


