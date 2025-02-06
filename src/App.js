import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Homes.js";
import Profile from "./pages/Profile.js";
import Messages from "./pages/Messages.js";
import Schedule from "./pages/Schedule.js";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav className = "section-end">
        <div className = "wrapper-inner">
          <Link to="/">
            <button id = "home-button" className = "home-button">
              <i className ="fa fa-home" aria-hidden="true"></i>
            </button>
          </Link>
          <Link to="/messages">
            <button id = "message-button" className = "message-button">
              <i className = "fa fa-comment" aria-hidden="true"></i>
            </button>
          </Link>
          <Link to="/schedule">
            <button id = "schedule-button" className = "schedule-button">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            </button>
          </Link>
          <Link to="/profile/*">
            <button id = "profile-button" className = "profile-button">
              <i className = "fa fa-user" aria-hidden="true"></i>
            </button>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
