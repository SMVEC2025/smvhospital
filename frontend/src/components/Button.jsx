import React from "react";
import '../styles/Button.css'

const Button = ({ name }) => {
  return (
    <button class="button">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
     {name}
  </button>
  
    
    
  );
};

export default Button;
