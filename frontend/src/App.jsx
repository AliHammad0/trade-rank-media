
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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

// Admin Route Protection
import AdminRoute from "./Admin/AdminRoute";
import P404 from "./Pages/P404";

// =========================
// Scroll To Top
// =========================
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

// =========================
// Home Page
// =========================
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

// =========================
// App
// =========================
const App = () => {
  return (
    <BrowserRouter>

      {/* Scroll page to top whenever route changes */}
      <ScrollToTop />

      {/* Header */}
      <Header />

      <Routes>

        {/* ========================= */}
        {/* Home */}
        {/* ========================= */}

        <Route
          path="/"
          element={<Home />}
        />
        <Route path="*" element={<P404 />} />

        {/* ========================= */}
        {/* Main Pages */}
        {/* ========================= */}

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/auth/verify-email/:token"
          element={<ActiveAccount />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<PreSignup />}
        />

        <Route
          path="/process"
          element={<Process />}
        />

        <Route
          path="/reviews"
          element={<Testimonials />}
        />

        <Route
          path="/faq"
          element={<FAQ />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />

        <Route
          path="/team"
          element={<Team />}
        />

        {/* ========================= */}
        {/* Single Service */}
        {/* ========================= */}

        <Route
          path="/services/:id"
          element={<ServiceDetails />}
        />

        {/* ========================= */}
        {/* Old Static Services */}
        {/* ========================= */}

        <Route
          path="/service-0"
          element={<div>Web Development</div>}
        />

        <Route
          path="/service-1"
          element={<div>Digital Marketing</div>}
        />

        <Route
          path="/service-2"
          element={<div>SEO Services</div>}
        />

        <Route
          path="/service-3"
          element={<div>Graphic Design</div>}
        />

        <Route
          path="/service-4"
          element={<div>Social Media Marketing</div>}
        />

        {/* ========================= */}
        {/* ADMIN ROUTES */}
        {/* ========================= */}

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />

        {/* Create Service */}
        <Route
          path="/admin/create-service"
          element={
            <AdminRoute>
              <CreateService />
            </AdminRoute>
          }
        />

        {/* All Services */}
        <Route
          path="/admin/services"
          element={
            <AdminRoute>
              <AllServices />
            </AdminRoute>
          }
        />

        {/* Update Service */}
        <Route
          path="/admin/update-service/:id"
          element={
            <AdminRoute>
              <UpdateService />
            </AdminRoute>
          }
        />

      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
};

export default App;

