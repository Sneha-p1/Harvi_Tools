// import React from "react";
// import { Link } from "react-router-dom";
// import img from "../assets/images/PressTool1.jpeg";
// const Dashboard = () => {
//   return (
//     <>
    
//     <div className="h-screen flex items-center justify-center overflow-hidden">
      
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-1 w-full max-w-4xl px-4">
//         {/* Dashboard Header */}
//         {/* <div className="text-4xl font-semibold text-gray-800 mb-5 text-center">
//            Dashboard
//         </div> */}
//            {/* Image Section */}
//         {/* <div className="flex justify-center mt-6">
//           <img
//             src={img}
//             alt="Product"
//             className="rounded-lg  max-h-48 w-auto"
//           />
//         </div> */}
//         {/* Dashboard Content */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
//           {/* Create Product Card */}
//             <div className="bg-blue-500 text-white rounded-lg shadow-md p-6 flex flex-col items-center">
//             <div className="flex justify-center mt-6">
//           <img
//             src={img}
//             alt="Product"
//             className="rounded-lg  max-h-48 w-auto"
//           />
//         </div>
//             <h3 className="text-lg font-bold mb-4">Create Product</h3>
//             <Link to="/admin" className="w-full">
//               <button className="bg-blue-700 w-full py-2 px-4 text-center rounded-full hover:bg-blue-800 transition duration-200">
//                 Go to Create
//               </button>
//             </Link>
//           </div>

//           {/* View Products Card */}
//           <div className="bg-yellow-500 text-white rounded-lg shadow-md p-6 flex flex-col items-center">
//             <h3 className="text-lg font-bold mb-4">View Products</h3>
//             <Link to="/admin-view" className="w-full">
//               <button className="bg-yellow-700 w-full py-2 px-4 text-center rounded-full hover:bg-yellow-800 transition duration-200">
//                 Go to View
//               </button>
//             </Link>
//           </div>

//           {/* <div className="mt-2 text-center">
//             <a
//               href="/home"
//               className="inline-block px-4 py-2 bg-black text-white font-semibold rounded mx-auto"
//             >
//               Back to Home
//             </a>
//           </div> */}
//         </div>

       
//         </div>
        
//       </div>
//       <hr className="border-gray-400" />
//     </>
//   );
// };

// export default Dashboard;



import React from 'react';
import { Link } from "react-router-dom";
import img from "../assets/images/CreateProduct.jpg";
import img1 from "../assets/images/ViewProduct.jpg";
import img2 from "../assets/images/Message.jpg";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      {/* Container for Dashboard */}
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-2xl p-10">
        
        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Create Product Section */}
          <div className="bg-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={img}
              alt="Create Product"
              className="rounded-lg h-48 w-full object-cover"
            />
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Create Product</h2>
            <p className="mb-6 text-gray-700">Add a new product to the inventory.</p>
            <Link to="/admin">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-800 transition duration-300 shadow-md">Create</button>
            </Link>
          </div>
          
          {/* View Product Section */}
          <div className="bg-green-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={img1}
              alt="View Products"
              className="rounded-lg h-48 w-full object-cover"
            />
            <h2 className="text-3xl font-bold text-green-700 mb-4">View Products</h2>
            <p className="mb-6 text-gray-700">View all the products in the inventory.</p>
            <Link to="/admin-view">
              <button className="bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-800 transition duration-300 shadow-md">View</button>
            </Link>
          </div>

          {/* Outsider Message Section */}
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={img2}
              alt="Message for Outsiders"
              className="rounded-lg h-48 w-full object-cover"
            />
            <h2 className="text-3xl font-bold text-gray-700 mb-4">View Messages</h2>
            <p className="mb-6 text-gray-700">Check messages from outsiders here.</p>
            <Link to="/message">
              <button className="bg-gray-600 text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300 shadow-md">Read Message</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
