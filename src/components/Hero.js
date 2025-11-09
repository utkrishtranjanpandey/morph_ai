import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ textAlign: "center" }}>
      <div className="hero-text" style={{ textAlign: "left" }}>
        <h1>AI-Based Morphed Image Identifier</h1>
        <p>
          Detect morphed faces with precision using AI and image forensics. Built
          for transparency and academic research.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src={`${process.env.PUBLIC_URL}/morphine-image.jpg`}
          alt="MorphID System"
          style={{
            maxWidth: "450px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        />
        <p
          style={{
            marginTop: "10px",
            color: "#2563eb",
            fontWeight: "600",
            fontSize: "1.1rem",
          }}
        >
          Morphed 20%
        </p>
      </div>
    </section>
  );
}
