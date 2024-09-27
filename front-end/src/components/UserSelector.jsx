import React from "react";
import "./styles.css";

const UserSelector = ({ onSelectUser }) => {
  return (
    <div className="userSelector">
      <button onClick={() => onSelectUser(12)}>Karl</button>
      <button onClick={() => onSelectUser(18)}>Cecilia</button>
    </div>
  );
};

export default UserSelector;
