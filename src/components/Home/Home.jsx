import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./home.css";
import features from "../../assets/hotelBg.png";


const Home = () => {
  return (
    <div className="main_class section__padding">
      <div className="text_area">
        <Typography className="main_head">
          <span className="stay">Stay In</span> <br />
          Tranquility .
        </Typography>

        <Typography className="sub_head">
          Blessing welcomed ladyship she met humoured sir breeding her. Six
          curiosity day assurance bed necessary.
        </Typography>
        <div className="main_class" style={{gap:"10px"}}>
          <button className="btns">Explore</button>
          <button className="btns">Contact Us</button>
        </div>
      </div>
      <div className="photo_area">
        <img className="photo" src={features} alt="hotelbg"></img>
      </div>
    </div>
  );
};

export default Home;
