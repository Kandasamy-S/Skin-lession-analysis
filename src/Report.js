import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Report.css"; // Import CSS file

function Report() {
  const location = useLocation();
  const navigate = useNavigate();
  const { image_url, class_name, additional_info } = location.state || {};

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
        {image_url ? (
          <>
            <img src={image_url} alt="Analyzed" className="report-image" />
            <div className="report-details">
              <p><b>Class Name:</b> {class_name}</p>
              <p><b>Additional Info:</b> {additional_info}</p>
            </div>
            <button className="back-button" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </>
        ) : (
          <p>No data available. Please analyze an image first.</p>
        )}
      </div>
    </div>
  );
}

export default Report;
