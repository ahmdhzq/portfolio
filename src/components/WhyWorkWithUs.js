import React from 'react';
import FeatureCard from './FeaturedCard';

const WhyWorkWithUs = () => {
  return (
    <div className="py-20 px-[10%] font-manrope">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-text-dark">
        Why Work With Me?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <FeatureCard number="01" title="Efficient & Scalable Development">
          By leveraging best practices like modular components, I build solutions that are not only fast to market but also easy to maintain and scale for future growth, proven to increase development efficiency by up to 30%. 
        </FeatureCard>

        <FeatureCard number="02" title="From Concept to Reality">
          I specialize in understanding core business objectives and translating them into intuitive, engaging web applications that resonate with users and achieve your goals. 
        </FeatureCard>
        
        <FeatureCard number="03" title="Collaborative & Quality-Driven">
          With experience in mentoring  and formal User Acceptance Testing (UAT), I ensure a transparent, collaborative process and a final product that is polished, reliable, and user-approved.
        </FeatureCard>

      </div>
    </div>
  );
};

export default WhyWorkWithUs;