import React from "react";
import "./Music.css";
import musicData from "../data/musicData";

const Music = () => {
  return (
    <div className="music-container">
      <h1 className="music-title">🎵 Your Music Library</h1>
      <div className="music-grid">
        {musicData.map((song, index) => (
          <div className="music-card" key={index}>
            <img src={song.image} alt={song.title} />
            <h3>{song.title}</h3>
            <audio controls>
              <source src={song.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
