import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="glow-text">Welcome to Spotify Clone</h1>
        <p>Discover, stream, and enjoy your favorite tracks in a beautiful experience.</p>
        <Link to="/music" className="explore-button">🎧 Explore Music</Link>
      </div>
    </div>
  );
};

export default Home;
