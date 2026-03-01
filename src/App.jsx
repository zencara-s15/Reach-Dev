import React from "react";
import { useState, useEffect } from "react";

import { Header } from "./components/layout";
import { Hero, About, Skills, Work, Contact, Footer } from "./components/sections";
import { ScrollProgress, BackToTop, ScrollReveal } from "./components/ui";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <>
    <ScrollProgress />
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </main>
    <Footer/>
    <BackToTop />
    <ScrollReveal />
    </>

  )
}

export default App
