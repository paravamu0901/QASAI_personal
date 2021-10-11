import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <Link className="LinkName" to="/dashboard">
        <div className="Name">QAS.AI</div>
      </Link>
      <div className="Menu">
        <HiOutlineUserCircle />
      </div>
    </div>
  );
};

export default Header;
