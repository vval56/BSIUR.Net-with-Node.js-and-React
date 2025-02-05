import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Homes.js";
import Profile from "./pages/Profile.js";
import Messages from "./pages/Messages.js";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/profile">Профиль</Link>
        <Link to="/messages">Сообщения</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>
  );
};

export default App;
