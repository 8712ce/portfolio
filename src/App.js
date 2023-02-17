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
import GraphicArt from "./components/GraphicArt";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <SlideshowWide />

      <AboutMe />

      <Resume />

      <WebDev />

      <GraphicArt />

      <Faq />

      <Footer />

      <p className="credit">Built with ReactJS by 8712CE</p>

    </div>
  );
}

export default App;
