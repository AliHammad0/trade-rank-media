
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Pages/Header";
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Contact from "./Pages/ContactUs";
import Services from "./Pages/Services";
import Hero from "./Pages/Hero";
import HowWeWork from "./Pages/HowWeWork";


const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
