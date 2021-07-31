import React from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Tony Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://scontent.fbey4-1.fna.fbcdn.net/v/t1.6435-9/187232640_3961765117238218_7667670703516740324_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=5pcM2HkZ4U8AX_Q0YMV&tn=UqdUDCa1Jxj8EtCH&_nc_ht=scontent.fbey4-1.fna&oh=7e761a7297562f7b2f3836163bd7b0e0&oe=61299EEA"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
