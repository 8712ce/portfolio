// DEPENDENCIES //
import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
import './App.css';

// COMPONENTS //
import Header from "./components/Header";
import Footer from "./components/Footer";
import SlideshowWide from "./components/SlideshowWide";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Header />

      <SlideshowWide />

      <AboutMe />

    </div>
  );
}

export default App;
