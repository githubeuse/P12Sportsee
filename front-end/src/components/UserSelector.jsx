import React from "react";

const UserSelector = ({ onSelectUser }) => {
  return (
    <div>
      <button onClick={() => onSelectUser(12)}>Karl</button>
      <button onClick={() => onSelectUser(18)}>Cecilia</button>
    </div>
  );
};

export default UserSelector;
