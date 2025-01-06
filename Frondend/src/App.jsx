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
  
  function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          
  
          <Route path="/" element={<Navbar />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/business" element={<Business/>}/>

          {/* <Route path="/contact" element={<Contact/>}/> */}
            {/* <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order" element={<ConfirmPage />} />
            <Route path="/message" element={<MessagePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/pharmacist" element={<PharmacistPage />} />
  
  
  
  
            <Route
              path="/edit-product/:id"
              element={<EditProductPage />}
              loader={productLoader}
            />
            <Route
              path="/products/:id"
              element={<ProductPage/>}
              loader={productLoader}
            />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />}/>
          </Route>
  
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart-page" element={<CartPage />} />
          <Route path="/pres" element={<PharmacistPresPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
  
  
        
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