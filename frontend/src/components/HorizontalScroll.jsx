import React, { useEffect, useRef } from "react";
import "../styles/HorizontalScroll.css";

const HorizontalScroll = () => {
  const stickyRef = useRef(null);
  const stickyParentRef = useRef(null);

  useEffect(() => {
    const horizontalScroll = () => {
      if (!stickyRef.current || !stickyParentRef.current) return;
      
      let sticky = stickyRef.current;
      let stickyParent = stickyParentRef.current;

      let scrollWidth = sticky.scrollWidth;
      let verticalScrollHeight = stickyParent.getBoundingClientRect().height - sticky.getBoundingClientRect().height;

      let stickyPosition = sticky.getBoundingClientRect().top;
      if (stickyPosition > 1) return;

      let scrolled = stickyParent.getBoundingClientRect().top;
      sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * (-scrolled) * 0.85;
    };

    document.addEventListener("scroll", horizontalScroll);
    return () => document.removeEventListener("scroll", horizontalScroll);
  }, []);

  return (
    <>
      <div className="br" style={{ height: "100px", width: "100%" }}>
        <p>Scroll</p>
      </div>
      <div className="sticky-parent" ref={stickyParentRef}>
        <div className="sticky" ref={stickyRef}>
          <div className="horizontal">
            <div className="dim" style={{ backgroundColor: "aqua" }}></div>
            <div className="dim" style={{ backgroundColor: "rgb(255, 238, 0)" }}></div>
            <div className="dim" style={{ backgroundColor: "rgb(81, 255, 0)" }}></div>
            <div className="dim" style={{ backgroundColor: "rgb(247, 0, 255)" }}></div>
            <div className="dim" style={{ backgroundColor: "rgb(27, 24, 179)" }}></div>
            <div className="dim" style={{ backgroundColor: "black" }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalScroll;