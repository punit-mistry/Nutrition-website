import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Navbar";
import Footer from "./Component/Footer";
import Services from "./Component/Pages/Services";
import Aboutme from "./Component/Pages/Aboutme";
import Contact from "./Component/Pages/Contact";
import ServicesInfo from "./Component/Pages/ServicesInfo";
import ServicesCoprate from "./Component/Pages/servicesCoprate";
import ScrollToTopButton from "./Component/ScrollToTopButton";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/services"
          element={<Services />}
        />
        <Route
          path="/services/:id"
          element={<ServicesInfo />}
        />
        <Route
          path="/servicesCoprate/:id"
          element={<ServicesCoprate />}
        />
        <Route
          path="/"
          element={<Aboutme />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default App;
