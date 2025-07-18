import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Music from "./pages/Music";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  return (
    <div className={darkTheme ? "dark" : "light"}>
      <Navbar />
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkTheme ? "☀️ Light" : "🌙 Dark"}
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
