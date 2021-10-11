import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineHistory } from "react-icons/md";
import { GrSettingsOption, GrUserAdmin } from "react-icons/gr";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="menu-items">
        <AiFillHome /> Home
      </div>
      <div className="menu-items">
        <MdOutlineHistory /> History
      </div>
      <div className="menu-items">
        <GrSettingsOption /> Settings
      </div>
      <div className="menu-items">
        <GrUserAdmin /> Admin
      </div>
    </div>
  );
};

export default Sidebar;
