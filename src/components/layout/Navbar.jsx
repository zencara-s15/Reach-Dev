import React from "react";
import { useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { navItems } from "../../constants/navigation";

const Navbar = ({ navOpen }) => {

  const lastActiveLink = useRef();
  const activeBox = useRef();
  const navLinksRef = useRef([]);

  const updateActiveBox = useCallback((element) => {
    if (!element || !activeBox.current) return;
    activeBox.current.style.top = element.offsetTop + "px";
    activeBox.current.style.left = element.offsetLeft + "px";
    activeBox.current.style.width = element.offsetWidth + "px";
    activeBox.current.style.height = element.offsetHeight + "px";
  }, []);

  const initActiveBox = useCallback(() => {
    updateActiveBox(lastActiveLink.current);
  }, [updateActiveBox]);

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, [initActiveBox]);

  useEffect(() => {
    const sectionIds = ["home", "about", "work", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY + 200;

      let currentSection = sectionIds[0];
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY) {
          currentSection = id;
        }
      }

      const matchingLink = navLinksRef.current.find(
        (link) => link && link.getAttribute("href") === `#${currentSection}`
      );

      if (matchingLink && matchingLink !== lastActiveLink.current) {
        lastActiveLink.current?.classList.remove("active");
        matchingLink.classList.add("active");
        lastActiveLink.current = matchingLink;
        updateActiveBox(matchingLink);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateActiveBox]);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;
    updateActiveBox(event.target);
  };

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          ref={(el) => {
            navLinksRef.current[key] = el;
            if (key === 0) lastActiveLink.current = el;
          }}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;
