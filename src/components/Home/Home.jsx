import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./home.css";
import features from "../../assets/grouphomwbg.png";
const Home = () => {
  return (
    <div style={{ position: "relative" }} id="home">
      <div className="main_class section__padding">
        <div className="text_area">
          <Typography className="main_head">
            <span className="stay">Stay In</span> <br />
            Tranquility.
          </Typography>

          <Typography className="sub_head">
            Our guests have given us glowing reviews with an average rating of
            4.7 stars. We strive to provide exceptional service and comfort to
            all of our guests, making your stay with us an unforgettable
            experience. Come and enjoy a relaxing getaway at our hotel near the
            sea shore.
          </Typography>
          <div className="main_class_btn" style={{ gap: "10px" }}>
            <button className="explore_btn">Explore</button>
            <a href="tel:7259028706">
              <button className="contact_btn">Contact Us</button>
            </a>
          </div>
        
        </div>
        <div className="photo_area">
          <Typography style={{ textAlign: "center" }}>
            <img className="photo" src={features} alt="hotelbg"></img>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
