import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";

export default function AuthPage() {
  return (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center", padding: "3rem" }}>
      <div>
        <h2>Sign In</h2>
        <SignIn redirectUrl="/" />
      </div>
      <div>
        <h2>Sign Up</h2>
        <SignUp redirectUrl="/" />
      </div>
    </div>
  );
}
