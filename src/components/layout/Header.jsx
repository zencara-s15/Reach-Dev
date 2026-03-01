import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header
      className="fixed top-0 left-0 w-full h-20 flex items-center z-40"
      style={{
        background: 'linear-gradient(to bottom, rgba(9, 9, 11, 0.95), rgba(9, 9, 11, 0.8) 60%, transparent)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr, 3fr, 1fr]">
        <h1>
          <a href="/" className="logo">
            <img src="/Images/Eye.jpg" width={40} height={40} alt="Zencara" className="rounded-lg" />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        <a href="#contact" id="contact-me-btn" className="btn btn-secondary">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
