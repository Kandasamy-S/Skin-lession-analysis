import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-title">Skin Lesion Analysis</div>
        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/report")}>Report</li>
          <li onClick={() => navigate("/about")}>About</li>
        </ul>
      </nav>

      <div className="report-container">
        <h1>Skin Lesion Analysis Report</h1>
        <h2>About</h2>
        <p>This a about the Skin lession analysis</p>
      </div>
    </div>
  );
}

export default About;
