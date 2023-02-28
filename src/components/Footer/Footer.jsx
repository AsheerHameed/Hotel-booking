import React from "react";
import "./footer.css";

const Footer = () => {
  const FooterColumn = ({
    heading,
    feature1,
    feature2,
    feature3,
    feature4,
  }) => (
    <div className="footer_column">
      <div>
        <h2>{heading}</h2>
      </div>
      <div>
        <p>{feature1}</p>
      </div>
      <div>
        <p>{feature2}</p>
      </div>
      <div>
        <p>{feature3}</p>
      </div>
      <div>
        <p>{feature4}</p>
      </div>
    </div>
  );

  return (
    <div className="footer_container">
      <div className="footer_content">
        <FooterColumn
          heading="Service"
          feature1="Graphic Designing"
          feature2="Web Developement"
          feature3="Engineering"
          feature4="Marketing"
        />
        <FooterColumn
          heading="Resources"
          feature1="Virtual Assistants"
          feature2="Accountants"
          feature3="Bookkeepers"
          feature4="Free trial"
        />
        <FooterColumn
          heading="Company"
          feature1="Patnerships"
          feature2="Terms of use"
          feature3="Privacy"
        />

        <div className="footer_last-column">
          <div className="footer_column">
            <div style={{textAlign:"center"}}>
              <p>Copyright © amanibeachhomestay All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
