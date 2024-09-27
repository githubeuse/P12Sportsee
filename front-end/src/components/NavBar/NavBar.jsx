import React from "react";
import logo from "../../assets/logoSportSee.png";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <img src={logo} alt="logo" className="logoNavBar" />
      <button>Accueil</button>
      <button>Profil</button>
      <button>Réglages</button>
      <button>Communauté</button>
    </div>
  );
};

export default NavBar;
