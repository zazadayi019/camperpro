import React from "react";
import Navbar from "../navbar";
import "./style.css";
import Wallpaper from "../wallpaper";
import ShopComponents from "../shop";

const MotorComponents = () => {
  return (
    <div>
      <Navbar />
      <Wallpaper />
      <ShopComponents />
    </div>
  );
};

export default MotorComponents;
