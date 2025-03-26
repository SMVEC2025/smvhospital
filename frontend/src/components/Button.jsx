import React from "react";
import '../styles/Button.css'
import { useNavigate } from "react-router-dom";

const Button = ({ name,event }) => {
  const navigate = useNavigate()
  
  return (
    <button className="button" onClick={()=>{navigate(event)}}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
     {name}
  </button>
  
    
    
  );
};

export default Button;
