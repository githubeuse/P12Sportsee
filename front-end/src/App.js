import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import UserSelector from "./components/UserSelector";
import UserInfo from "./components/UserInfo";
import "./index.css";

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleSelectUser = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div className="container">
      <NavBar />
      <SideBar />
      <UserSelector onSelectUser={handleSelectUser} />
      {selectedUserId && <UserInfo userId={selectedUserId} />}
    </div>
  );
};

export default App;
