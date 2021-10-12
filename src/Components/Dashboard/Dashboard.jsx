import React, { useState } from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import History from "../History/History";
import Sidebar from "../Sidebar/Sidebar";
import Settings from "../Settings/Settings";
import Admin from "../Admin/Admin";
import "./Dashboard.scss";

const Dashboard = () => {
  const [menuOption, setMenuOption] = useState("Home");
  console.log(menuOption);
  return (
    <div className="Dashboard">
      <Header />
      <div className="Seperator">
        <Sidebar
          className="Side"
          setMenuOption={setMenuOption}
          menuOption={menuOption}
        />
        <div className="displayed">
          <div className="displayedComponent">
            {menuOption === "Home" ? <Home /> : <></>}
          </div>
          <div className="displayedComponent">
            {menuOption === "History" ? <History /> : <></>}
          </div>
          <div className="displayedComponent">
            {menuOption === "Settings" ? <Settings /> : <></>}
          </div>
          <div className="displayedComponent">
            {menuOption === "Admin" ? <Admin /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
