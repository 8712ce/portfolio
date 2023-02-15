// DEPENDENCIES //
import React, { useState, useEffect } from "react";

// IMAGES //
import cb01 from "../../assets/graphic_art/cleo_and_bjorn_cover_02.jpeg";
import cb02 from "../../assets/graphic_art/cleo_donations.jpeg";
import cb03 from "../../assets/graphic_art/cleo_poster_jump.jpeg";
import cb04 from "../../assets/graphic_art/cleo.jpeg";
import cb05 from "../../assets/graphic_art/itunes_australia_text.jpeg";
import cb06 from "../../assets/graphic_art/itunes_canada_text.jpeg";
import cb07 from "../../assets/graphic_art/itunes_uk_poster_text.jpeg";
import cb08 from "../../assets/graphic_art/light_david_milton.jpeg";
import cb09 from "../../assets/graphic_art/ritual_david_milton.jpeg";
import hapa from "../../assets/graphic_art/hapa_12.jpeg";
import rebecca01 from "../../assets/graphic_art/rebecca_portfolio.jpeg";
import rebecca02 from "../../assets/graphic_art/rebecca.jpeg";
import tales01 from "../../assets/graphic_art/z_tales_01.jpeg";
import tales02 from "../../assets/graphic_art/z_tales_02.jpeg";

// STYLES // 
import "./graphic_art.css"

function GraphicArt() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [cb01, cb02, cb03, cb04, cb05, cb06, cb07, cb08, cb09, hapa, rebecca01, rebecca02, tales01, tales02];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  const slideStyle = {
    backgroundImage: `url(${images[currentSlide]})`,
  };

  return (
    <div id="graph_art" className="circle-container">
      <div className="circle">
        <div className="slide" style={slideStyle} />
      </div>
    </div>
  );
}

export default GraphicArt;

      
  