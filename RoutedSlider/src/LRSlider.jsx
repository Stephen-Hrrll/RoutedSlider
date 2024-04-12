import React, { useState } from 'react';
import './styles/LRSlider.css';
import About from './routes/About';
import Contact from './routes/Contact';
import { useNavigate } from 'react-router-dom';

const LRSlider = ({Route, left, right}) => {
  const [pageIndex, setPageIndex] = useState(0);

  const navigate = useNavigate();
  console.log("whats happening")
  const goLeft = () => navigate(left);
  const goRight = () => navigate(right);

  return (
    <div className="slider-container">
      {Route}
      <button onClick={goLeft} className="left-arrow">←</button>
      <button onClick={goRight} className="right-arrow">→</button>
    </div>
  );
};

export default LRSlider;
