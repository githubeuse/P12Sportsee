import React from "react";
import "./styles.css";

const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <div className="iconButtonContainer">
        <button className="icon iconYoga"></button>
        <button className="icon iconNatation"></button>
        <button className="icon iconCyclisme"></button>
        <button className="icon iconMasse"></button>
      </div>
      <div className="copyrightContainer">Copyright, SportSee 2020</div>
    </div>
  );
};

export default SideBar;
