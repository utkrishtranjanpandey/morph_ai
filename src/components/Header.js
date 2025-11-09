import React from "react";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="header">
      <nav
        className="nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        {/* LEFT SIDE: Logo + MorphID name (separate entities) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <a href="#home" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/m logo.jpg"
              alt="MorphID Logo"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "6px",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              className="logo"
            />
          </a>

          <a
            href="#home"
            className="brand-name"
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.3rem",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
          >
            MorphID
          </a>
        </div>

        {/* RIGHT SIDE: Navigation + Login/User */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.2rem",
          }}
        >
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#n8n" className="nav-link">Send Image</a>
          <a href="#contact" className="nav-link">Contact</a>

          {isSignedIn ? (
            <div className="user-btn">
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <SignInButton mode="modal">
              <button className="btn">Login</button>
            </SignInButton>
          )}
        </div>
      </nav>
    </header>
  );
}
