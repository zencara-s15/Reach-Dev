import { useEffect } from "react";

const ScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay || "0";
            entry.target.style.transitionDelay = `${delay}s`;
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    requestAnimationFrame(() => {
      revealElements.forEach((el) => observer.observe(el));
    });

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
};

export default ScrollReveal;
