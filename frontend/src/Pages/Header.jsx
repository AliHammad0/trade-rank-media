import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../assets/tradelogo-Photoroom.png";

const API_URL = "https://trade-rank-media-hammad.vercel.app/api/v1";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [services, setServices] = useState([]);
  const [user, setUser] = useState(null);

  const servicesRef = useRef(null);

  // CHECK LOGIN USER
  useEffect(() => {
    const checkUser = () => {
      const savedUser = localStorage.getItem("user");

      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (error) {
          console.error("User data error:", error);
          localStorage.removeItem("user");
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    checkUser();

    window.addEventListener("userLoggedIn", checkUser);
    window.addEventListener("userLoggedOut", checkUser);

    return () => {
      window.removeEventListener("userLoggedIn", checkUser);
      window.removeEventListener("userLoggedOut", checkUser);
    };
  }, []);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);

    window.dispatchEvent(new Event("userLoggedOut"));
  };

  // GET SERVICES FROM PRODUCTION BACKEND
  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await axios.get(`${API_URL}/service/all`);

        if (response.data.ok) {
          setServices(response.data.services || []);
        }
      } catch (error) {
        console.error(
          "Header Services Error:",
          error.response?.data || error.message
        );
      }
    };

    getServices();
  }, []);

  // PROGRESS BAR
  useEffect(() => {
    setProgress(0);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        return prev + 5;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // CLOSE MOBILE MENU
  const closeMobileMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl text-slate-900 shadow-md font-[Arial,sans-serif] font-bold border-b border-slate-200">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 z-[9999] transition-all duration-100"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Main Header */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >
            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center">
              <img
                src={logo}
                alt="Trade Rank Media Logo"
                className="w-20 h-20 object-contain rounded-xl"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-tight text-black">
                Trade Rank Media
              </span>

              <span className="mt-1 text-[9px] tracking-[0.25em] uppercase text-slate-500 font-semibold">
                Digital Growth Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            <Link
              to="/"
              className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesOpen((prev) => !prev);
                }}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1"
              >
                Services

                <span
                  className={`text-xs transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`absolute top-10 left-1/2 -translate-x-1/2 w-64 rounded-2xl bg-white backdrop-blur-xl border border-slate-200 shadow-2xl overflow-hidden origin-top transition-all duration-300 ${
                  servicesOpen
                    ? "opacity-100 scale-100 translate-y-0 visible"
                    : "opacity-0 scale-90 -translate-y-3 invisible"
                }`}
              >
                {services.length === 0 ? (
                  <div className="px-5 py-4 text-slate-400">
                    No services available
                  </div>
                ) : (
                  services.map((service) => (
                    <Link
                      key={service._id}
                      to={`/services/${service._id}`}
                      onClick={closeMobileMenu}
                      className="group flex items-center px-5 py-3.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:pl-7"
                    >
                      <span className="w-2 h-2 mr-3 rounded-full bg-blue-500 opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                      {service.title}
                    </Link>
                  ))
                )}
              </div>
            </div>

            <Link
              to="/about"
              className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1"
            >
              About
            </Link>

            <Link
              to="/team"
              className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1"
            >
              Team
            </Link>

            <Link
              to="/blog"
              className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1"
            >
              Blog
            </Link>

            {/* Login and Signup */}
            {!user && (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2.5 rounded-xl border border-blue-500/40 text-slate-700 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 hover:-translate-y-1"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-blue-500/50 active:scale-95"
                >
                  Signup
                </Link>
              </>
            )}

            {/* Logged In User */}
            {user && (
              <>
                <Link
                  to="/admin"
                  className="px-5 py-2.5 rounded-xl border border-blue-500/40 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  Dashboard
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="px-5 py-2.5 rounded-xl bg-red-600 text-white font-semibold transition-all duration-300 hover:bg-red-700 hover:-translate-y-1"
                >
                  Logout
                </button>
              </>
            )}

            <Link
              to="/contact"
              className="relative px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-900 text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-600 active:scale-95"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setServicesOpen(false);
              setMobileServicesOpen(false);
            }}
            className="md:hidden w-11 h-11 rounded-xl border border-slate-300 bg-slate-100 text-slate-900 text-xl transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-90"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            menuOpen
              ? "max-h-[1000px] opacity-100 mt-5"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-slate-200 pt-4 pb-3">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block py-3 text-slate-600 hover:text-blue-600 transition"
            >
              Home
            </Link>

            {/* Mobile Services */}
            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              onClick={() =>
                setMobileServicesOpen((prev) => !prev)
              }
              className="w-full flex justify-between items-center py-3 text-slate-600 hover:text-blue-600 transition-all duration-300"
            >
              <span>Services</span>

              <span
                className={`text-xs transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`overflow-y-auto transition-all duration-500 ${
                mobileServicesOpen
                  ? "max-h-80 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-3 mb-2 border-l-2 border-blue-500/30 pl-4">
                {services.length === 0 ? (
                  <p className="py-3 text-sm text-slate-400">
                    No services available
                  </p>
                ) : (
                  services.map((service) => (
                    <Link
                      key={service._id}
                      to={`/services/${service._id}`}
                      onClick={closeMobileMenu}
                      className="flex items-center py-3 text-sm text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:translate-x-2 rounded-lg px-3 transition-all duration-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                      {service.title}
                    </Link>
                  ))
                )}
              </div>
            </div>

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block py-3 text-slate-600 hover:text-blue-600"
            >
              About
            </Link>

            <Link
              to="/team"
              onClick={closeMobileMenu}
              className="block py-3 text-slate-600 hover:text-blue-600"
            >
              Team
            </Link>

            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className="block py-3 text-slate-600 hover:text-blue-600"
            >
              Blog
            </Link>

            {/* Mobile Login and Signup */}
            {!user && (
              <div className="grid grid-cols-2 gap-3 mt-4">
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="text-center px-5 py-3 rounded-xl border border-blue-500/40 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={closeMobileMenu}
                  className="text-center px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-105"
                >
                  Signup
                </Link>
              </div>
            )}

            {/* Mobile Logged In User */}
            {user && (
              <div className="space-y-3 mt-4">
                <Link
                  to="/admin"
                  onClick={closeMobileMenu}
                  className="block text-center px-5 py-3 rounded-xl border border-blue-500/40 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  Dashboard
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full px-5 py-3 rounded-xl bg-red-600 text-white font-semibold transition-all duration-300 hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            )}

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block text-center mt-3 px-6 py-3 rounded-xl bg-slate-900 border border-slate-900 text-white font-semibold transition-all duration-300 hover:bg-blue-600"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;