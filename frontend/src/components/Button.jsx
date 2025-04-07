import React from "react";
import '../styles/Button.css'
import { useNavigate } from "react-router-dom";

const Button = ({ name,event }) => {
  const navigate = useNavigate()
  const handleRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Define your app store URLs
    const iosAppStoreURL = "https://apps.apple.com/in/app/healthray-for-patients/id6470002190";
    const androidPlayStoreURL = "https://play.google.com/store/apps/details?id=com.healthray.patient&hl=en";

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS device
      window.location.href = iosAppStoreURL;
    } else if (/android/i.test(userAgent)) {
      // Android device
      window.location.href = androidPlayStoreURL;
    } else {
      // Optional: Fallback for desktop or unknown devices
      alert("Please open this on your mobile device to download the app.");
    }
  };
  function handleClick(){
    if(event=='handleRedirect'){
      handleRedirect()
    }else{
      navigate(event)
    }
  }
  return (
    <button className="button" onClick={handleClick}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
     {name}
  </button>
  
    
    
  );
};

export default Button;
