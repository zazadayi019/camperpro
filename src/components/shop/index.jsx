import React from "react";
import Filter from "./filter";
import DataComponents from "./data";

const ShopComponents = () => {
  return (
    <div style={{ display: "flex" }} className="shop-wrapper">
      <div className="filter-wrapper">
        <Filter />
      </div>
      <div className="data-wrapper">
        <DataComponents />
      </div>
    </div>
  );
};

export default ShopComponents;
