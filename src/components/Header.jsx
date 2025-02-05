import React from "react";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full h-20 
    flex items-center z-40 bg-gradient-to-b
     from-zinc-900 to-zinc-900/0"
    >
      <div className="max-w-screen-2xl w-full mx-auto px-4">
        <h1>
          Hi
          <a href="/" className="logo">
            <img src="/images/logo.png" width={40} height={40} alt="Zencara" />
          </a>
        </h1>
      </div>
    </header>
  );
};

export default Header;
