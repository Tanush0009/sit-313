import React from "react";
import LogoutButton from "./LogoutButton";
import "./Auth.css"; // Optional, if you want consistent styling

export default function Home() {
  return (
    <div className="auth-container" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="auth-card">
        <h1>Welcome to Home Page!</h1>
        <p>You are successfully logged in.</p>
        <LogoutButton />
      </div>
    </div>
  );
}
