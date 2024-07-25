import React, { useState } from "react";
import drop from "../../assets/drop.png";
import grid from "../../assets/grid.png";
import list from "../../assets/list.png";
import Grid from "./grid";
import Listcar from "./datalist";

const Shop = () => {
  const [pages, setpages] = useState(false)
  return (
    <div>
      <div className="shop">
        <div className="item-wrapper">
          <p>
            Item <span>25.156</span>{" "}
          </p>
          <div className="shop-filter">
            <div className="select-wrapper">
              <p>Sort by</p>
              <input type="text" placeholder="Select" />
              <img className="drop" src={drop} alt="drop-img" />
            </div>
            <div className="wrapper-60">
              <input type="text" placeholder="60" />
              <img className="drop" src={drop} alt="drop-img" />
            </div>
            <div className="grid-list">
              <button className="grid" onClick={() => setpages(false)}>
                <img src={grid} alt="grid-img" />
              </button>
              <button className="list" onClick={() => setpages(true)}>
                <img src={list} alt="list-img" />
              </button>
            </div>
          </div>
        </div>
        <div className="shop-line"></div>
        {pages ? <Listcar/> : <Grid/>}
      </div>
    </div>
  );
};

export default Shop;
