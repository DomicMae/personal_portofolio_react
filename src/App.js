import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SkillPage from "./Pages/SkillPage";
import ProjectPage from "./Pages/ProjectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage auth={{ user: { name: "Test User" } }} />}
        />
        <Route
          path="/about"
          element={<AboutPage auth={{ user: { name: "Test User" } }} />}
        />
        <Route
          path="/skill"
          element={<SkillPage auth={{ user: { name: "Test User" } }} />}
        />
        <Route
          path="/project"
          element={<ProjectPage auth={{ user: { name: "Test User" } }} />}
        />
        <Route
          path="/contact"
          element={<ProjectPage auth={{ user: { name: "Test User" } }} />}
        />
        {/* Tambahkan rute baru */}
      </Routes>
    </Router>
  );
}

export default App;
