// DEPENDENCIES //
import React, { useState } from 'react';

// IMAGES //
import s_01 from "../../assets/s_01.jpg"
import s_02 from "../../assets/s_02.jpg"
import s_03 from "../../assets/s_03.jpg"
import s_04 from "../../assets/s_04.jpg"
import s_05 from "../../assets/s_05.jpg"

// STYLES //
import "./slideshowWide.css"

// function Slideshow() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const images = [s_01, s_02, s_03, s_04, s_05];

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
//   };

//   return (
//     <div className="slideshow">
//       <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
//       <button onClick={prevSlide}>Previous</button>
//       <button onClick={nextSlide}>Next</button>
//     </div>
//   );
// }

// export default Slideshow;


function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [s_01, s_02, s_03, s_04, s_05];

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        <div className="prev" onClick={prevSlide}>
          &#10094;
        </div>
        <div className="next" onClick={nextSlide}>
          &#10095;
        </div>
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
    </div>
  );
}

export default Slideshow;
