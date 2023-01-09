import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <img
          src={logo}
          alt="logo"
          width="90"
          height="60"
          title="Home"
          className="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
