import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import Styles from "./screen1css.js";
import { useNavigate } from "react-router-dom";

function Screen1() {
  const navigate = useNavigate();

  return (
    <div style={Styles.container} className="container">
      <div style={Styles.navbar} className="navbar">
        <div>
          <FaAngleLeft className="icon1" onClick={() => navigate("/")} />
        </div>
        <div style={Styles.nav2} className="nav2">
          <h3 style={{ marginTop: "20%", marginRight: "0%" }}>Fruits</h3>
          <div style={Styles.nav21} className="nav2-1">
            <p style={{ marginTop: "0%" }}>categories</p>
            <FaAngleDown  className="icon2" />
          </div>
        </div>
        <CiSearch style={{ height: "50px", width: "35px" }} className="icon3" />
      </div>
      <hr style={{ height: "3px", width: "100%", backgroundColor: "black" }} />
      <div style={Styles.div3} className="div3">
        <div style={{ margin: "2%", height: "20px" }}>
          <IoIosArrowDropdown />
          sort by
        </div>
        <div style={{ margin: "2%", height: "20px" }}>
          <IoIosArrowDropdown />
          offers
        </div>
        <div style={{ margin: "2%", height: "20px" }}>
          <IoIosArrowDropdown />
          my favorites
        </div>
      </div>
      <div className="div4" style={Styles.section}>
        <div className="leftsection" style={Styles.leftsection}>
          <p>fresh fruits</p>
        </div>
        <div className="rightsection" style={Styles.rightsection}>
          <div style={Styles.image} className="">
            <div style={Styles.image1} className="image1">
              <p style={{ margin: "1%" }}>narayana</p>
              <p style={{ margin: "1%" }}>narayana</p>
              <p style={{ margin: "1%" }}>narayana</p>
            </div>
            <div style={Styles.image2} className="image2">
              <img style={Styles.img1}
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
                alt="img1"
              />
              {/* <button className="button">add</button> */}
            </div>
          </div>
          <div style={Styles.image} className="">
            <div className="image1">
              <p style={{ margin: "1%" }}>narayana</p>
              <p style={{ margin: "1%" }}>narayana</p>
              <p style={{ margin: "1%" }}>narayana</p>
            </div>
            <div className="image2">
              <img style={Styles.img1}
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
                alt="img1"
              />
              {/* <button className="button">add</button> */}
            </div>
          </div>
          <div style={Styles.image} className="">
            <div className="image1">
              <p style={{ margin: "1%" }}>narayana</p>
              <p style={{ margin: "1%" }}>narayana</p>
              <p style={{ margin: "1%" }}>narayana</p>
            </div>
            <div className="image2">
              <img style={Styles.img1}
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
                alt="img1"
              />
              {/* <button className="button">add</button> */}
            </div>
          </div>
          <div style={Styles.image} className="">
            <div className="image1">
              <p style={{ margin: "1%" }}>narayana</p>
              <p style={{ margin: "1%" }}>narayana</p>
              <p style={{ margin: "1%" }}>narayana</p>
            </div>
            <div className="image2">
              <img style={Styles.img1}
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
                alt="img1"
              />
              {/* <button className="button">add</button> */}
            </div>
          </div>
          <div style={Styles.image} className="">
            <div className="image1">
              <p style={{ margin: "1%" }}>narayana</p>
              <p style={{ margin: "1%" }}>narayana</p>
              <p style={{ margin: "1%" }}>narayana</p>
            </div>
            <div className="image2">
              <img style={Styles.img1}
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
                alt="img1"
              />
              {/* <button className="button">add</button> */}
            </div>
          </div>
          <div style={Styles.image} className="">
            <div className="image1">
              <p style={{ margin: "1%" }}>narayana</p>
              <p style={{ margin: "1%" }}>narayana</p>
              <p style={{ margin: "1%" }}>narayana</p>
            </div>
            <div className="image2">
              <img style={Styles.img1}
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
                alt="img1"
              />
              {/* <button className="button">add</button> */}
            </div>
          </div>
          <div style={Styles.image} className="">
            <div className="image1">
              <p style={{ margin: "1%" }}>narayana</p>
              <p style={{ margin: "1%" }}>narayana</p>
              <p style={{ margin: "1%" }}>narayana</p>
            </div>
            <div className="image2">
              <img style={Styles.img1}
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-8ccd0.appspot.com/o/narayana.clg.png?alt=media&token=69267cb2-79d4-4f94-bf8c-2412b574eebf"
                alt="img1"
              />
              {/* <button className="button">add</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen1;
