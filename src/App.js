import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage auth={{ user: { name: "Test User" } }} />}
        />
        <Route path="/about" element={<AboutPage />} />{" "}
        {/* Tambahkan rute baru */}
      </Routes>
    </Router>
  );
}

export default App;
