import React from "react";
import songs from "../data/musicData";
import "./Music.css";

const Music = () => {
  return (
    <div className="page fade-in">
      <h1>Music Library</h1>
      <div className="song-grid">
        {songs.map((song, idx) => (
          <div key={idx} className="song-card">
            <img src={song.image} alt={song.title} />
            <h3>{song.title}</h3>
            <audio controls src={song.url}></audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
