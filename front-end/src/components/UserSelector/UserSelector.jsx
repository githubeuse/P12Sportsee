import React from "react";
import "./styles.css";

/**
 * Composant UserSelector permet de sélectionner l'utilisateur et d'afficher les données correspondantes
 * @component
 * @param {function} onSelectUser - fonction qui permet de sélectionner un utilisateur
 * @returns {JSX.Element} - retourne le composant UserSelector (2 boutons)
 */

const UserSelector = ({ onSelectUser }) => {
  return (
    <div className="userSelector">
      <button onClick={() => onSelectUser(12)}>Karl</button>
      <button onClick={() => onSelectUser(18)}>Cecilia</button>
    </div>
  );
};

export default UserSelector;
