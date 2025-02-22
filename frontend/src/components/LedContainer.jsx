import React, { useEffect } from "react";
// import "./LedContainer.css";

const LedContainer = () => {
  useEffect(() => {
    const container = document.getElementById("led-container");
    const ROWS = 7;
    const COLS = 50;

    if (container) {
      container.innerHTML = "";
      
      for (let i = 0; i < ROWS; i++) {
        const row = document.createElement("div");
        row.className = "led-row";
        
        for (let j = 0; j < COLS; j++) {
          const led = document.createElement("div");
          led.className = "led";
          row.appendChild(led);
        }
        container.appendChild(row);
      }
    }
  }, []);

  return (
    <div className="git-contributions">
      <div className="months">
        {[
          "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ].map((month) => (
          <p key={month}>{month}</p>
        ))}
      </div>
      <div className="contribute-calendar">
        <div className="weeks">
          {["Mon", "Wed", "Fri"].map((day) => (
            <p key={day}>{day}</p>
          ))}
        </div>
        <div>
          <div id="led-container"></div>
          <div className="bottom-scale">
            <p>Less</p>
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`color-box legend-${i + 1}`}></div>
            ))}
            <p>More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LedContainer;
