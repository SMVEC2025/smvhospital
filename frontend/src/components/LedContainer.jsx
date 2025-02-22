// import React, { useEffect } from "react";
// import '../styles/LedContainer.css'
// import React, { useEffect, useState } from "react";
// import "./LEDMatrix.css";

// const LEDMatrix = ({ text = "WELCOME TO SMV HOSPITAL" }) => {
//   const [displayText, setDisplayText] = useState(text);
//   const [scrollIndex, setScrollIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setScrollIndex((prev) => (prev + 1) % (displayText.length + 20));
//     }, 150);

//     return () => clearInterval(interval);
//   }, [displayText]);

//   return (
//     <div className="led-board">
//       {[...Array(10)].map((_, row) => (
//         <div key={row} className="led-row">
//           {[...Array(40)].map((_, col) => {
//             const charIndex = (scrollIndex + col) % displayText.length;
//             const isLit = Math.random() > 0.8 || displayText[charIndex] !== " ";
//             return <div key={col} className={`led-dot ${isLit ? "on" : "off"}`} />;
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LedContainer;
