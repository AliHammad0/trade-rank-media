```jsx
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Main Pages
import Header from "./Pages/Header";
import Hero from "./Pages/Hero";
import Contact from "./Pages/ContactUs";
import Services from "./Pages/Services";
import Process from "./Pages/Process";
import Testimonials from "./Pages/Reviews";
import FAQ from "./Pages/FAQ";
import Footer from "./Pages/Footer";
import Team from "./Pages/Team";
import AboutUs from "./Pages/About";

// Service Details
import ServiceDetails from "./Pages/ServiceDetails";

// Admin Pages
import Dashboard from "./Admin/Dashboard";
import CreateService from "./Admin/CreateService";
import AllServices from "./Admin/AllServices";
import UpdateService from "./Admin/UpdateService";

// Auth Pages
import Login from "./Pages/login";
import PreSignup from "./Pages/Signup";
import ActiveAccount from "./Pages/ActiveAccount";

// Blog
import Blog from "./Pages/Blog";
import AdminRoute from "./Admin/AdminRoute";
import P404 from "./Pages/P404";

// Scroll To Top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
};

// Home Page
const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Process />
      <Testimonials />
      <Team />
      <FAQ />
      <Contact />
    </>
  );
};

// App
const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
        limit={3}
      />

      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/auth/verify-email/:token"
          element={<ActiveAccount />}
        />

        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<PreSignup />} />
        <Route path="/process" element={<Process />} />
        <Route path="/reviews" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />

        <Route
          path="/services/:id"
          element={<ServiceDetails />}
        />

        <Route path="/service-0" element={<div>Web Development</div>} />
        <Route path="/service-1" element={<div>Digital Marketing</div>} />
        <Route path="/service-2" element={<div>SEO Services</div>} />
        <Route path="/service-3" element={<div>Graphic Design</div>} />
        <Route path="/service-4" element={<div>Social Media Marketing</div>} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/create-service"
          element={
            <AdminRoute>
              <CreateService />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/services"
          element={
            <AdminRoute>
              <AllServices />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/update-service/:id"
          element={
            <AdminRoute>
              <UpdateService />
            </AdminRoute>
          }
        />

        <Route path="*" element={<P404 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
```