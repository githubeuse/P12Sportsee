import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import UserSelector from "./components/UserSelector/UserSelector";
import UserInfo from "./components/UserInfo/UserInfo";
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
      {selectedUserId ? (
        <div>
          <UserInfo userId={selectedUserId} />
          <Dashboard userId={selectedUserId} />
        </div>
      ) : (
        <UserSelector onSelectUser={handleSelectUser} />
      )}
    </div>
  );
};

export default App;
