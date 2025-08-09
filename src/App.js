import React from 'react';
import HeroSection from './components/HeroSection';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="App bg-bg-light min-h-screen font-manrope text-text-dark">
      <main>
        <Navbar />
        <HeroSection />
        <WhyWorkWithUs />
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App;