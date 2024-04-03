import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
import Profiles from "./components/profiles/Profiles";

// axios
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profiles" element={<Profiles />} />
      </Routes>
    </Router>
  );
}

export default App;
