import React from "react";
import "./Maintenance.css";
import logofull from '../assets/images/logofull.png'
function Maintenance() {
  return (
    <div className="App">
      <div className="buildingPage">
        <header id="header">
        </header>

        <div className="content" >
            <img style={{width:"30vw"}} src={logofull} alt="" />
           
        </div>
        <h2 style={{color:"brown"}}>www.smvhospitals.com</h2>
        <p style={{color:"brown"}}>(Under Maintenance)</p>
        <div id="outerCraneContainer">
          <div className="buildings">
            <div />
            <div className={1} />
            <div className={2} />
            <div className={3} />
            <div className={4} />
          </div>
          <div className="crane craneThree">
            <div className="line lineOne" />
            <div className="line lineTwo" />
            <div className="line lineThree" />
            <div className="stand" />
            <div className="weight" />
            <div className="cabin" />
            <div className="arm" />
          </div>
          <div className="crane craneTwo">
            <div className="line lineOne" />
            <div className="line lineTwo" />
            <div className="line lineThree" />
            <div className="stand" />
            <div className="weight" />
            <div className="cabin" />
            <div className="arm" />
          </div>
          <div className="crane craneOne">
            <div className="line lineOne" />
            <div className="line lineTwo" />
            <div className="line lineThree" />
            <div className="stand" />
            <div className="weight" />
            <div className="cabin" />
            <div className="arm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
