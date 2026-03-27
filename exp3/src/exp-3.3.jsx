import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./exp-3.3.css";
import profilePic from "./assets/wallpaper.jpeg";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="app-name">MyApp</h2>
    </div>
  );
}

function Profile() {
  return (
    <div className="container">
      <div className="card">
        <h1>Profile Page</h1>

        <img src={profilePic} className="profile-img" />

        <h2>Projects</h2>
        <ol className="list">
          <li>Fake News Chatbot</li>
          <li>Real-time Chat Application</li>
        </ol>

        <h2>Achievements</h2>
        <ol className="list">
          <li>Cosmic Hackathon Winner</li>
        </ol>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="container">
      <div className="card">
        <h1>Dashboard</h1>

        <h2>Skills</h2>
        <ol className="list">
          <li>Java</li>
          <li>Python</li>
          <li>SQL</li>
          <li>MERN Stack</li>
        </ol>

        <h2>About Me</h2>
        <p>
          I am a full-stack developer interested in building scalable
          web applications.
        </p>
      </div>
    </div>
  );
}

function Exp33() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Exp33;
