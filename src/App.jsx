import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles/styles.css";

const App = () => (
  <div className="app">
    <h1 className="title">Weather App</h1>
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca de Nosotros</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
);

export default App;
