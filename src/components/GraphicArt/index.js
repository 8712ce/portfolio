// DEPENDENCIES //
import React, { useState, useEffect } from "react";

// IMAGES //
import pi01 from "../../assets/graphic_art/portfolio_images_01.jpg";
import pi02 from "../../assets/graphic_art/portfolio_images_02.jpg";
import pi03 from "../../assets/graphic_art/portfolio_images_03.jpg";
import pi04 from "../../assets/graphic_art/portfolio_images_04.jpg";
import pi05 from "../../assets/graphic_art/portfolio_images_05.jpg";
import pi06 from "../../assets/graphic_art/portfolio_images_06.jpg";
// import pi07 from "../../assets/graphic_art/portfolio_images_07.jpg";
import pi08 from "../../assets/graphic_art/portfolio_images_08.jpg";
import pi09 from "../../assets/graphic_art/portfolio_images_09.jpg";
import pi10 from "../../assets/graphic_art/portfolio_images_10.jpg";
import pi11 from "../../assets/graphic_art/portfolio_images_11.jpg";
import pi12 from "../../assets/graphic_art/portfolio_images_12.jpg";
// import pi13 from "../../assets/graphic_art/portfolio_images_13.jpg";
// import pi14 from "../../assets/graphic_art/portfolio_images_14.jpg";
import pi15 from "../../assets/graphic_art/portfolio_images_15.jpg";
import pi16 from "../../assets/graphic_art/portfolio_images_16.jpg";
import pi17 from "../../assets/graphic_art/portfolio_images_17.jpg";
// import pi18 from "../../assets/graphic_art/portfolio_images_18.jpg";
import pi19 from "../../assets/graphic_art/portfolio_images_19.jpg";
import pi20 from "../../assets/graphic_art/portfolio_images_20.jpg";
import pi21 from "../../assets/graphic_art/portfolio_images_21.jpg";
import pi22 from "../../assets/graphic_art/portfolio_images_22.jpg";
import pi23 from "../../assets/graphic_art/portfolio_images_23.jpg";
import pi24 from "../../assets/graphic_art/portfolio_images_24.jpg";
import pi25 from "../../assets/graphic_art/portfolio_images_25.jpg";
import pi26 from "../../assets/graphic_art/portfolio_images_26.jpg";

// STYLES // 
import "./graphic_art.css"

function GraphicArt() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [pi01, pi02, pi03, pi04, pi05, pi06, pi08, pi09, pi10, pi11, pi12, pi15, pi16, pi17, pi19, pi20, pi21, pi22, pi23, pi24, pi25, pi26];

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
    <div id="graph_art" className="square-container">
      <div className="square">
        <div className="slide" style={slideStyle} />
      </div>
    </div>
  );
}

export default GraphicArt;