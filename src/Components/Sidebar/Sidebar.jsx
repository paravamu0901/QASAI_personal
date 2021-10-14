import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineHistory } from "react-icons/md";
import { GrSettingsOption, GrUserAdmin } from "react-icons/gr";
import { userAtom } from '../../_state';
import { useRecoilValue } from 'recoil';
import "./Sidebar.scss";

const Sidebar = (props) => {
    const user = useRecoilValue(userAtom);
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
            {user.is_superuser &&
            <div onClick={()=>props.setMenuOption("Admin")} className="menu-items">
                <GrUserAdmin /> Admin
            </div>}
        </div>
    );
};

export default Sidebar;
