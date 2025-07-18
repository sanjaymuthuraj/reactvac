// 📄 src/pages/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About MelodyStream 🎶</h1>
      <p className="subtitle">
        Your gateway to a world of music, vibes, and creativity.
      </p>

      <div className="about-content">
        <div className="about-card">
          <h2>🎧 Our Mission</h2>
          <p>
            MelodyStream is a passion project inspired by Spotify, built for music lovers who want a sleek, fast, and modern experience. Our goal is to make music discovery enjoyable and beautiful.
          </p>
        </div>

        <div className="about-card">
          <h2>🚀 Features</h2>
          <ul>
            <li>✅ Play 10+ copyright-free songs</li>
            <li>✅ Responsive and fast navigation</li>
            <li>✅ Stylish transitions and 3D hover effects</li>
            <li>✅ Built with React + Vite</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>🛠️ Tech Stack</h2>
          <p>React, Vite, JavaScript, HTML5, CSS3</p>
        </div>
      </div>
    </div>
  );
};

export default About;
