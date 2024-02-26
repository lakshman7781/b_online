import React from "react";
import Styles from "./screen2css";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Screen2 = () => {
  const navigate = useNavigate();
  return (
    <div style={Styles.container} className="container">
      <div style={Styles.navbar} className="navbar">
      <FaAngleLeft className="icon1" onClick={() => navigate("/screen1")} />
      </div>
      <div style={Styles.header1} className="header1">
        <a href="https://wa.me/9949961421" style={Styles.button1} className="button">
          WhatsApp Chat
        </a>
        <a href="tel:9949961421" style={Styles.button1} className="button">
          Call
        </a>
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
