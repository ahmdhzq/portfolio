import React from 'react';
import HeroSection from './components/HeroSection';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-bg-light min-h-screen font-manrope text-text-dark">
      <main>
        <Navbar />
        <HeroSection />
        <WhyWorkWithUs />
      </main>
    </div>
  );
}

export default App;