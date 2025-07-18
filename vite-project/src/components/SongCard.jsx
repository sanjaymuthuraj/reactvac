import React from 'react';

const SongCard = ({ song }) => (
  <div className="bg-[#1e1e1e] p-4 rounded-xl shadow-md hover:scale-105 transition">
    <img
      src={song.cover}
      alt={song.title}
      className="rounded-lg w-full h-40 object-cover mb-3"
    />
    <h3 className="text-xl font-semibold">{song.title}</h3>
    <p className="text-gray-400">{song.artist}</p>
    <button
      onClick={() => new Audio(song.url).play()}
      className="bg-green-500 mt-4 px-4 py-2 rounded-full hover:bg-green-600 transition shadow"
    >
      Play
    </button>
  </div>
);

export default SongCard;
