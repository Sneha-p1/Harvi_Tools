// import About from "./pages/About"
// import Footer from "./pages/Footer"
// import Navbar from "./pages/Navbar"




// function App() {


//     return (
//         <>
//         <Navbar/>
//         <About/>
//         <Footer/>

//         </>
//     )
// }

// export default App

import {createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route} 
  
  from "react-router-dom";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Footer from "./pages/Footer";
import ContactUs from "./pages/Contact";
import Business from "./pages/Business";
import ProductListPage from "./pages/ProductListPage";
import DashboardPage from "./pages/DashboardPage";
import ProductCard from "./pages/ProductCard";
  
  function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          
  
          <Route path="/" element={<Navbar />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/business" element={<Business/>}/>
          <Route path="/product" element={<ProductListPage/>}/>
          <Route path="/admin" element={<DashboardPage/>}/>
          <Route path="/card" element={<ProductCard/>}/>




          
        
        </>
      )
    );
  
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
  
  export default App;