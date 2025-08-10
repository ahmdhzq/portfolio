import React, { useState, useRef, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import AboutMe from './components/AboutMe';

function App() {
  const heroSectionRef = useRef(null);
  const [isNavbarOverDark, setIsNavbarOverDark] = useState(false);

  useEffect(() => {
    const node = heroSectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavbarOverDark(entry.isIntersecting);
      },
      {
        rootMargin: "-80px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  return (
    <div className="App bg-bg-light min-h-screen font-manrope text-text-dark">
      <Navbar isOverDark={isNavbarOverDark} />
      <main>
        <HeroSection ref={heroSectionRef} />
        <AboutMe/>
        <WhyWorkWithUs />
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App;