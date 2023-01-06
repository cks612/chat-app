import React from "react";
import "./InfoBar.scss";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img
          className="onlineIcon"
          src={"/images/onlineIcon.png"}
          alt="online icon"
        />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={"/images/closeIcon.png"} alt="close icon" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
