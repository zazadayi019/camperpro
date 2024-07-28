import React from "react";
import "./style.css";
import cart from "../../assets/cart.png";
import user from "../../assets/user.png";
import drop from "../../assets/drop.png";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          <p>Camper</p>
        </div>
        <div className="menubar">
          <Link
            to={"/motor"}
            style={{ textDecoration: "none", color: "#373737" }}
          >
            <p>
              Motor <img src={drop} alt="" />
            </p>
          </Link>
          <Link
            to={"/caravan"}
            style={{ textDecoration: "none", color: "#373737" }}
          >
            <p>
              Caravan <img src={drop} alt="" />
            </p>
          </Link>
          <Link
            to={"/tuning"}
            style={{ textDecoration: "none", color: "#373737" }}
          >
            <p>
              Tuning <img src={drop} alt="" />
            </p>
          </Link>
          <Link
            to={"/usedcar"}
            style={{ textDecoration: "none", color: "#373737" }}
          >
            <p>
              Used Car <img src={drop} alt="" />
            </p>
          </Link>
          <Link
            to={"/campingplace"}
            style={{ textDecoration: "none", color: "#373737" }}
          >
            <p>Camping Place</p>
          </Link>
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

export default NavbarComponent;
