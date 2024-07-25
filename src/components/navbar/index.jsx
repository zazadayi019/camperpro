import React from "react";
import cart from "../../assets/cart.png";
import user from "../../assets/user.png";
import drop from "../../assets/drop.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          <p>Camper</p>
        </div>
        <div className="menubar">
          <p>
            Motor <img src={drop} alt="" />
          </p>
          <p>
            Caravan <img src={drop} alt="" />
          </p>
          <p>
            Tuning <img src={drop} alt="" />
          </p>
          <p>
            Used Car <img src={drop} alt="" />
          </p>
          <p>Camping Place</p>
        </div>
        <div className="navright">
          <img src={cart} alt="cart" />
          <img src={user} alt="user" />
          <p>EN</p>
          <img src={drop} alt="drop" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
