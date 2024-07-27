import React from "react";
import FilterComponent from "./filter";
import DataComponent from "./data";

const ShopComponent = () => {
  return (
    <div className="shop-wrapper">
      <div className="filter-wrapper">
        <FilterComponent />
      </div>
      <div className="data-wrapper">
        <DataComponent />
      </div>
    </div>
  );
};

export default ShopComponent;
