import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineHistory } from "react-icons/md";
import { GrSettingsOption, GrUserAdmin } from "react-icons/gr";
import "./Sidebar.scss";

const Sidebar = (props) => {
  console.log(props);
  return (
    <div className="Sidebar">
      <div onClick={()=>props.setMenuOption("Home")} className="menu-items">
        <AiFillHome /> Home
      </div>
      <div onClick={()=>props.setMenuOption("History")} className="menu-items">
        <MdOutlineHistory /> History
      </div>
      <div onClick={()=>props.setMenuOption("Settings")} className="menu-items">
        <GrSettingsOption /> Settings
      </div>
      <div onClick={()=>props.setMenuOption("Admin")} className="menu-items">
        <GrUserAdmin /> Admin
      </div>
    </div>
  );
};

export default Sidebar;
