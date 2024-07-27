import React from "react";
import Wallpaper from "./wallpaper";
import LocationComponent from "./location";

const CampingPlaceComponent = () => {
  return (
    <div>
      <Wallpaper />
      <div style={{display: "flex", justifyContent:"center"}}>
        <LocationComponent />
      </div>
    </div>
  );
};

export default CampingPlaceComponent;
