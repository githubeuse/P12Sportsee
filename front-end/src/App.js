import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import UserSelector from "./components/UserSelector/UserSelector";
import UserInfo from "./components/UserInfo/UserInfo";
import {
  userMainData,
  userActivity,
  userAverageSessions,
  userPerformance,
} from "./data/mockedData"; // Importer les données de mockedData.js
import "./index.css";

/**
 * @component
 * @returns {JSX.Element} - Retourne les datas userMainData de façon brute pour un utilisateur donné
 */

const RawUserMainData = () => {
  const { id } = useParams();
  const userId = parseInt(id, 10);
  const userData = userMainData.find((user) => user.id === userId);

  if (!userData) {
    return <div className="rawInfos">User not found</div>;
  }

  return (
    <div className="rawInfos">
      <pre>{JSON.stringify({ data: userData }, null, 2)}</pre>
    </div>
  );
};

/**
 * @component
 * @returns {JSX.Element} - Retourne les datas userActivity de façon brute pour un utilisateur donné
 */

const RawUserActivity = () => {
  const { id } = useParams();
  const userId = parseInt(id, 10);
  const userData = userActivity.find((user) => user.userId === userId);

  if (!userData) {
    return <div className="rawInfos">User not found</div>;
  }

  return (
    <div className="rawInfos">
      <pre>{JSON.stringify({ data: userData }, null, 2)}</pre>
    </div>
  );
};

/**
 * @component
 * @returns {JSX.Element} - Retourne les datas userAverageSessions de façon brute pour un utilisateur donné
 */

const RawUserAverageSessions = () => {
  const { id } = useParams();
  const userId = parseInt(id, 10);
  const userData = userAverageSessions.find((user) => user.userId === userId);

  if (!userData) {
    return <div className="rawInfos">User not found</div>;
  }
  return (
    <div className="rawInfos">
      <pre>{JSON.stringify({ data: userData }, null, 2)}</pre>
    </div>
  );
};

/**
 * @component
 * @returns {JSX.Element} - Retourne les datas userPerformance de façon brute pour un utilisateur donné
 */

const RawUserPerformance = () => {
  const { id } = useParams();
  const userId = parseInt(id, 10);
  const userData = userPerformance.find((user) => user.userId === userId);

  if (!userData) {
    return <div>User not found</div>;
  }
  return (
    <div className="rawInfos">
      <pre>{JSON.stringify({ data: userData }, null, 2)}</pre>
    </div>
  );
};

/**
 * Composant App qui retourne l'ensemble du site
 * @component
 * @returns {JSX.Element} - retourne le composant App
 */

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const handleSelectUser = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <Router>
      <div className="container">
        <NavBar />
        <SideBar />
        <Routes>
          <Route
            path="/"
            element={
              selectedUserId ? (
                <div>
                  <UserInfo userId={selectedUserId} />
                  <Dashboard userId={selectedUserId} />
                </div>
              ) : (
                <UserSelector onSelectUser={handleSelectUser} />
              )
            }
          />
          <Route path="/user/:id" element={<RawUserMainData />} />
          <Route path="/user/:id/activity" element={<RawUserActivity />} />
          <Route
            path="/user/:id/average-sessions"
            element={<RawUserAverageSessions />}
          />
          <Route
            path="/user/:id/performance"
            element={<RawUserPerformance />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
