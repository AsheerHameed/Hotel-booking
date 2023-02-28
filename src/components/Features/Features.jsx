import React from "react";
import { features, Rectangle1, Rectangle2, Rectangle3 ,bonfire_1} from "./imports";
import "./features.css";
const Features = () => {
  return (
    <div className="features_wrapper section__padding" id="features">
      <div className="features_heading flex__center">
        <h2>Why Choose Us?</h2>
      </div>

      <div className="features_container" >
        <div className="features_image flex__center">
          <img src={bonfire_1} alt="features" />
        </div>
        <div className="features_content_container">
          <div className="features_content">
            <div className="features_rectangle_image">
              <img src={Rectangle1} alt="" />
            </div>
            <div className="feature_number">
              <h2>01</h2>
            </div>
            <div className="feature_description">
              <p>
                Our guests have given us glowing reviews with an average rating
                of 4.7 stars. We strive to provide exceptional service and
                comfort to all of our guests, making your stay with us an
                unforgettable experience. Come and enjoy a relaxing getaway at
                our hotel near the sea shore.
              </p>
            </div>
          </div>
          <div className="features_content">
            <div className="features_rectangle_image">
              <img src={Rectangle2} alt="" />
            </div>
            <div className="feature_number">
              <h2>02</h2>
            </div>
            <div className="feature_description">
              <p>
                In the evenings, we provide a bonfire experience where you can
                gather around the flames and enjoy a cozy ambiance with your
                friends and family. For those looking for a unique and
                adventurous experience, we offer tents for a memorable night
                under the stars.
              </p>
            </div>
          </div>
          <div className="features_content">
            <div className="features_rectangle_image">
              <img src={Rectangle3} alt="" />
            </div>
            <div className="feature_number">
              <h2>03</h2>
            </div>
            <div className="feature_description">
              <p>
                Our hotel offers 24/7 wifi access, so you can stay connected
                with loved ones or work remotely if needed. We understand the
                importance of hot water, which is why our rooms are equipped
                with it round the clock, ensuring a refreshing shower any time
                of day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
