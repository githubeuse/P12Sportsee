import React, { useState } from "react";
import UserSelector from "./components/UserSelector";
import UserInfo from "./components/UserInfo";

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleSelectUser = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div>
      <h1>Select User</h1>
      <UserSelector onSelectUser={handleSelectUser} />
      {selectedUserId && <UserInfo userId={selectedUserId} />}
    </div>
  );
};

export default App;
