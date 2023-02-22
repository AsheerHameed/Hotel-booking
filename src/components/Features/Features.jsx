import React from "react";
import { features, Rectangle1, Rectangle2, Rectangle3 } from "./imports";
import "./features.css";
const Features = () => {
  return (
    <div className="features_container section__padding">
      <div className="features_heading">
        <h2>Why Choose Us?</h2>
      </div>
      <div className="features_image">
        <img src={features} alt="features" />
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
              And residence for met the estimable disposing. Mean if he they
              been no hold mr. Is at much do made took held help.
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
              And residence for met the estimable disposing. Mean if he they
              been no hold mr. Is at much do made took held help.
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
              And residence for met the estimable disposing. Mean if he they
              been no hold mr. Is at much do made took held help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
