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
        <h2>About the Project</h2>
        <p>Skin cancer is one of the most common and rapidly growing forms of cancer worldwide. Early detection plays a crucial role in improving survival rates, but manual diagnosis through visual inspection can often be time-consuming, subjective, and inconsistent. To address this, our project leverages state-of-the-art deep learning techniques to provide a fast, accurate, and accessible tool for skin lesion analysis.
This project utilizes two advanced models — Swin UNet for segmentation and Swin Transformer for classification — to create a complete pipeline for skin lesion detection and categorization. Together, these models provide both visual insights through lesion masking and diagnostic predictions based on the image content.</p>
        <h2>Swin UNet for Lesion Segmentation</h2>
        <p>The first stage of the pipeline involves Swin UNet, a transformer-based segmentation model built upon the original U-Net architecture but enhanced with hierarchical self-attention mechanisms. This model is responsible for accurately segmenting the lesion area from the surrounding skin in dermoscopic images. Swin UNet offers superior performance over traditional CNN-based segmentation networks due to its ability to model long-range dependencies and spatial relationships within the image. By generating a clear lesion mask, it helps localize the region of interest and prepares it for further classification.</p>
        <h2>Swin Transformer for Lesion Classification</h2>
        <p>Once the lesion has been segmented, the system passes the image to a Swin Transformer — a powerful image classification model designed to analyze hierarchical visual patterns. Swin Transformers divide the image into non-overlapping windows and apply self-attention within and across windows in a hierarchical fashion. This allows the model to understand complex structures and variations in skin lesions, resulting in highly accurate classification. It predicts the lesion type from a set of classes such as Melanoma, Basal Cell Carcinoma, Nevus, and others.</p>
        <h2>How It Works</h2>
        <p>Users can simply upload a dermoscopic image through the web interface. The image is first processed by the Swin UNet model, which returns a masked output highlighting the lesion. This segmented image is then analyzed by the Swin Transformer, which predicts the category of the lesion. Both the segmented image and predicted class name are displayed on the interface, along with a brief description of the identified lesion type to help users understand the results.</p>
      </div>
    </div>
  );
}

export default About;
