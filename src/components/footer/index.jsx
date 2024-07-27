import React from "react";
import youtube from "../../assets/youtube.png";
import Vector from "../../assets/Vector.png";
import naver from "../../assets/naver.png";

const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="footer-title-wrapper">
        <div className="footer-logo">
          <p>Camper</p>
        </div>
        <div className="services-wrapper">
          <h3>Services</h3>
          <p>Camping</p>
          <p>Lodging</p>
          <p>Harbor</p>
          <p>Day Use</p>
        </div>
        <div className="services-wrapper">
          <h3>Menu</h3>
          <p>About</p>
          <p>Services</p>
          <p>Booking</p>
          <p>Blog</p>
        </div>
        <div className="services-wrapper">
          <h3>Contact</h3>
          <div>
            <img src={youtube} alt="youtube-img" />
            <img src={Vector} alt="Vector-img" />
            <img src={naver} alt="naver-img" />
          </div>
          <p>021 Korea Seul, LA</p>
          <p>camper@example.com</p>
          <p>(021) 345-6789-99</p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
