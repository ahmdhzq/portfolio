import React from 'react';
import HeroSection from './components/HeroSection';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import AboutMe from './components/AboutMe';
import ServicesSection from './components/ServicesSection';
import SkillsRibbon from './components/SkillsRibbon';
import MostUsefulTools from './components/MostUseFullTools';
import EducationSection from './components/EducationSection';

function App() {

  return (
    <div className="App bg-bg-light min-h-screen font-manrope text-text-dark">
      <Navbar/>
      <main>
        <HeroSection/>
        <WhyWorkWithUs />
        <AboutMe/>
        <ServicesSection />
        <MostUsefulTools/>
        <EducationSection/>
        <ProjectsSection />
        <SkillsRibbon />
      </main>
    </div>
  );
}

export default App;