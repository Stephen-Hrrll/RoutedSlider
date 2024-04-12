import React, { useState } from 'react';
import './LRSlider.css';
import About from './About';
import Contact from './Contact';

const LRSlider = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const pages = [
    <About/>,
    <Contact/>
  ];

  const goLeft = () => {
    setPageIndex(pageIndex > 0 ? pageIndex - 1 : pages.length - 1);
  };

  const goRight = () => {
    setPageIndex(pageIndex < pages.length - 1 ? pageIndex + 1 : 0);
  };

  return (
    <div className="slider-container">
      {pages[pageIndex]}
      <button onClick={goLeft} className="left-arrow">←</button>
      <button onClick={goRight} className="right-arrow">→</button>
    </div>
  );
};

export default LRSlider;
