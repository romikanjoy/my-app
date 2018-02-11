import React from 'react';

const Button = ({ incrementCounter, incrementValue }) => {
  const handleClick = () => {
    incrementCounter(incrementValue);
  };
  
  return (
    <button onClick={handleClick}>+{incrementValue}</button>
  );
};

export default Button;
