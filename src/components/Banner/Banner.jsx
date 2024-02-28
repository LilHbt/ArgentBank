import React from "react";
import BannerText from "./BannerText";
import imgBanner from "../../assets/img/bank-tree.jpeg";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <img className="banner--img" src={imgBanner} alt="Little money plant" />
      <BannerText />
    </div>
  );
}

export default Banner;
