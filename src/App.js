// DEPENDENCIES //
import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
import './App.css';

// COMPONENTS //
import Header from "./components/Header";
import SlideshowWide from "./components/SlideshowWide";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import WebDev from "./components/WebDev";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <SlideshowWide />

      <AboutMe />

      <Resume />

      <WebDev />

      <Footer />

    </div>
  );
}

export default App;
