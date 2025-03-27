import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css"; // Updated CSS

function Home() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file)); // Show preview
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:5000/analyze", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResult(response.data);
    } catch (error) {
      console.error("Error analyzing image:", error);
      alert("Failed to analyze the image.");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-title">Skin Lesion Analysis</div>
        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/report", { state: result })}>Report</li>
          <li onClick={() => navigate("/about")}>About</li>
        </ul>
      </nav>

      {/* Upload Section */}
      <div className="upload-section">
        <h1>Upload an Image for Analysis</h1>

        <label htmlFor="file-upload" className="file-label">Choose Image</label>
        <input
          id="file-upload"
          type="file"
          className="file-input"
          onChange={handleImageChange}
          accept="image/*"
        />

        {previewUrl && (
          <div className="preview-container">
            <img src={previewUrl} alt="Preview" className="preview-image" />
          </div>
        )}

        <button className="analyze-button" onClick={handleUpload}>Analyze</button>
      </div>

      {/* Display Results */}
      {result && (
        <div className="result-container">
          <h2>Analysis Result:</h2>
          <img src={result.image_url} alt="Analyzed" className="result-image" />
          <p><b>Class Name:</b> {result.class_name}</p>
          <p><b>Additional Info:</b> {result.additional_info}</p>
          <button className="report-button" onClick={() => navigate("/report", { state: result })}>
            View Full Report
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
