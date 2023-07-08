import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Blog from "./views/Blog";
import Museum from "./views/Museum";
import Kontak from "./views/Kontak";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </Router>
  );
};

export default App;
