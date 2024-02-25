import "./App.css";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { upload } from "@testing-library/user-event/dist/upload";

function App() {
  const upload = () => {
    alert("product added to cart");
  };
  return (
    <div className="App">
      <div className="navbar">
        <div>
          <FaAngleLeft className="icon1" />
        </div>
        <div className="nav2">
          <CiSearch className="icon2" />
          <IoMdShare className="icon3" />
        </div>
      </div>
      <div className="header">
        <h3>BO SUPERMARKET</h3>
        <p style={{ marginLeft: "10%" }}>delivery available</p>
        <div className="header2">
          <div className="header2-1">
            <div>
              <FaStar />
              <p>4.5 rating</p>
            </div>
          </div>
          <div className="header2-2">
            <p>view timing</p>
          </div>
        </div>
      </div>
      <h3>spotlight</h3>
      <div className="div2">
        <div className="image">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
            alt="img1"
          />
          <p style={{ margin: "1%" }}>narayana</p>
          <p style={{ margin: "1%" }}>narayana</p>
          <p style={{ margin: "1%" }}>narayana</p>
          <button onClick={upload} className="button">add</button>
        </div>
        <div className="image">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
            alt="img1"
          />
          <p style={{ margin: "1%" }}>narayana</p>
          <p style={{ margin: "1%" }}>narayana</p>
          <p style={{ margin: "1%" }}>narayana</p>
          <button onClick={upload} className="button">add</button>
        </div>
        <div className="image">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
            alt="img1"
          />
          <p style={{ margin: "1%" }}>narayana</p>
          <p style={{ margin: "1%" }}>narayana</p>
          <p style={{ margin: "1%" }}>narayana</p>
          <button onClick={upload} className="button">add</button>
        </div>
      </div>
      <div>
        <hr style={{ height: "5px", backgroundColor: "black" }} />
      </div>

      <h3 style={{ textDecorationColor: "blueviolet" }}>products</h3>
      <div className="div3">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
          alt="img1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
          alt="img1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
          alt="img1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
          alt="img1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
          alt="img1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
          alt="img1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
          alt="img1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
          alt="img1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
          alt="img1"
        />
      </div>
      <button onClick={upload} className="upload">
        Upload Grocery List
      </button>
    </div>
  );
}

export default App;
