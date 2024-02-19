import React, { useState } from 'react';
import './App.css'; 

const RotatingCard = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleMouseLeave = () => {
    setIsRotated(true);
  };

  const handleMouseEnter = () => {
    setIsRotated(false);
  };

  return (
    <div className={`card ${isRotated ? 'rotate' : ''}`} 
    onMouseEnter={handleMouseEnter}
   onMouseLeave={handleMouseLeave}>
      <div  className="card-inner">
        <div className="card-front">
          <h2>card</h2>
        </div>
        <div className="card-back">
          <h4>SPYD TECH</h4>
        </div>
      </div>
    </div>
  );
  
};

const MultipleCards = () => {
  return (
    <><div className="container">
      <RotatingCard/>
      </div>
      </>
    
    
    
  );
};

export default MultipleCards;
