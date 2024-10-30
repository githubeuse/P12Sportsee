import React from "react";
import "./styles.css";

/**
 * Composant sidebar qui se situe sur la gauche de la page
 * @component
 * @returns {JSX.Element} - retourne le composant SideBar
 */

const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <div className="iconButtonContainer">
        <button className="icon iconYoga"></button>
        <button className="icon iconNatation"></button>
        <button className="icon iconCyclisme"></button>
        <button className="icon iconMasse"></button>
      </div>
      <div className="copyrightContainer">
        <span>Copyright, SportSee 2020</span>
      </div>
    </div>
  );
};

export default SideBar;
