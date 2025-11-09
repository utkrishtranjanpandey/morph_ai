import React from "react";
import { SignIn } from "@clerk/clerk-react";

export default function LoginModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal open">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Welcome to MorphID</h3>
        <p>Sign in or sign up to continue</p>

        {/* Clerk SignIn modal handles Sign In / Sign Up toggle automatically */}
        <SignIn
          appearance={{
            elements: {
              rootBox: "w-full",
            },
          }}
          afterSignInUrl="/"
          afterSignUpUrl="/"
          redirectUrl="/"
        />
      </div>
    </div>
  );
}
