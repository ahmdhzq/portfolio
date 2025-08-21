import React from 'react';
import HeroSection from './components/sections/HeroSection';
import Navbar from './components/layout/Navbar';
import ProjectsSection from './components/sections/ProjectsSection';
import ServicesSection from './components/sections/ServicesSection';
import SkillsRibbon from './components/layout/SkillsRibbon';
import EducationSection from './components/sections/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import OverviewServiceSection from './components/sections/OverviewServiceSection';
import AboutSection from './components/sections/AboutSection';
import ToolsSection from './components/sections/ToolsSection';

function App() {

  return (
    <div className="App bg-bg-light min-h-screen font-manrope text-text-dark">
      <Navbar/>
      <main>
        <HeroSection/>
        <OverviewServiceSection />
        <AboutSection/>
        <EducationSection />  
        <ToolsSection/>
        <ExperienceSection/>
        <ServicesSection />
        <ProjectsSection />
        <SkillsRibbon />
        <ContactSection/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;