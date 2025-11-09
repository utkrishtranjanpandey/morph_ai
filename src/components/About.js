import React from "react";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About MorphID</h2>

      <p className="about-intro">
        MorphID is an AI-powered system that detects digitally altered or morphed images
        with high accuracy. It merges artificial intelligence and forensic imaging
        to enhance transparency, security, and digital trust.
      </p>

      <div className="card-grid">
        <div className="card about-card">
          <h3>🎯 Our Mission</h3>
          <p>
            We aim to make digital authenticity measurable — identifying altered
            or forged media swiftly and transparently to combat misinformation.
          </p>
        </div>

        <div className="card about-card">
          <h3>⚙️ How It Works</h3>
          <p>
            MorphID uses facial preprocessing, deep feature extraction, and AI-based
            inference to identify hidden inconsistencies across image layers and pixel patterns.
          </p>
        </div>

        <div className="card about-card">
          <h3>🧠 Technology Stack</h3>
          <p>
            Powered by Python, TensorFlow, and OpenCV on the backend with a React-based
            interface, MorphID integrates with n8n for streamlined image handling and automation.
          </p>
        </div>

        <div className="card about-card">
          <h3>🔍 Applications</h3>
          <p>
            MorphID assists digital forensics, academic research, and cybersecurity
            teams in verifying media authenticity and detecting identity manipulation.
          </p>
        </div>
      </div>
    </section>
  );
}
