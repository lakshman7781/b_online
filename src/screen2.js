import React from "react";
import Styles from "./screen2css";
const Screen2 = () => {
  return (
    <div style={Styles.container} className="container">
      <div style={Styles.navbar} className="navbar">
        <p>meiugivg</p>
      </div>
      <div style={Styles.header1} className="header1">
        <button style={Styles.button1} className="button">
          Click me
        </button>
        <button style={Styles.button1} className="button">
          Click me
        </button>
      </div>
      <div style={Styles.div2} className="div2">
        <p>spotlight</p>
        <p>spotlight</p>
        <p>spotlight</p>
      </div>
      <hr style={Styles.hr} />
      <div style={Styles.div2} className="div2">
        <p>spotlight</p>
        <p>spotlight</p>
      </div>
      <div style={Styles.div2} className="div2">
        <p>spotlight</p>
        <p>spotlight</p>
      </div>
      <div style={Styles.div2} className="div2">
        <p>spotlight</p>
        <p>spotlight</p>
      </div>
      
    </div>
  );
};

export default Screen2;
