import React, { useState } from "react";
import "./navbar.css";
export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="logo">Graduation 25</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Yearbook</a></li>
          <li><a href="#">Teachers</a></li>
          <li><a href="#">Students</a></li>
          <li><a href="#">Memories</a></li>
        </ul>
        <button
          className="menu-button"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Sidebar Overlay */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-button" onClick={() => setSidebarOpen(false)}>×</button>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Yearbook</a></li>
          <li><a href="#">Teachers</a></li>
          <li><a href="#">Students</a></li>
          <li><a href="#">Memories</a></li>
        </ul>
      </div>

      {/* Overlay background */}
      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}
    </>
  );
}
