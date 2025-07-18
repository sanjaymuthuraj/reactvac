import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Spotify Clone</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/music">Music</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
