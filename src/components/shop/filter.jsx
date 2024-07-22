import React from "react";
import drop from "../../assets/drop.png";

const Filter = () => {
  return (
    <div>
      <div className="Cost-of-car">
        <h3>Cost of car</h3>
        <div className="filter-line"></div>
        <div className="input-wrapper">
          <div className="input-from-to">
            <label htmlFor="">from</label>
            <input type="text" />
          </div>
          <div className="input-from-to">
            <label htmlFor="">to</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="filters">
        <div className="filter-drop-wrapper">
          <h3>Brand</h3>
          <img src={drop} alt="drop-img" />
        </div>
        <div className="filter-line"></div>
        <div className="checkbox-wrapper">
          <input type="checkbox" />
          <label htmlFor="">Aidal</label>
        </div>
        <div className="checkbox-wrapper">
          <input type="checkbox" />
          <label htmlFor="">Aidal</label>
        </div>
        <div className="checkbox-wrapper">
          <input type="checkbox" />
          <label htmlFor="">Aidal</label>
        </div>
      </div>
      <div className="filters">
        <div className="filter-drop-wrapper">
          <h3>Company</h3>
          <img src={drop} alt="drop-img" />
        </div>
        <div className="filter-line"></div>
        <div className="checkbox-wrapper">
          <input type="checkbox" />
          <label htmlFor="">escape</label>
        </div>
        <div className="checkbox-wrapper">
          <input type="checkbox" />
          <label htmlFor="">Aidal</label>
        </div>
      </div>
      <div className="filters">
        <div className="filter-drop-wrapper">
          <h3>License type</h3>
          <img src={drop} alt="drop-img" />
        </div>
        <div className="filter-line"></div>
        <div className="checkbox-wrapper">
          <input type="checkbox" />
          <label htmlFor="">1 year</label>
        </div>
        <div className="checkbox-wrapper">
          <input type="checkbox" />
          <label htmlFor="">2 year</label>
        </div>
        <div className="checkbox-wrapper">
          <input type="checkbox" />
          <label htmlFor="">1.5 year</label>
        </div>
      </div>
      <div className="filters">
        <div className="filter-drop-wrapper">
          <h3>Number of travelers</h3>
          <img src={drop} alt="drop-img" />
        </div>
        <div className="filter-line"></div>
        <div className="checkbox-wrapper">
          <input type="checkbox" />
          <label htmlFor="">2</label>
        </div>
        <div className="checkbox-wrapper">
          <input type="checkbox" />
          <label htmlFor="">3-4</label>
        </div>
        <div className="checkbox-wrapper">
          <input type="checkbox" />
          <label htmlFor="">5+</label>
        </div>
      </div>
      <div className="filters">
        <div className="filter-drop-wrapper">
          <h3>Location</h3>
          <img src={drop} alt="drop-img" />
        </div>
        <div className="filter-line"></div>
        <div className="checkbox-wrapper">
          <input type="checkbox" />
          <label htmlFor="">Seoul</label>
        </div>
        <div className="checkbox-wrapper">
          <input type="checkbox" />
          <label htmlFor="">Korea</label>
        </div>
        <div className="checkbox-wrapper">
          <input type="checkbox" />
          <label htmlFor="">Pusan</label>
        </div>
      </div>
      <div className="button-wrapper">
        <button style={{ background: " #FF7A00" }}>Cancel</button>
        <button style={{ background: " #006DAB" }}>Search</button>
      </div>
    </div>
  );
};

export default Filter;
