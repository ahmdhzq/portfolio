import React from 'react';
import FeatureCard from './FeaturedCard';

const WhyWorkWithUs = () => {
  return (
    <div className="py-20 px-[10%] font-manrope">
      <h2 className="text-5xl font-extrabold text-center mb-12">
        Why Work With Me?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard number="01" title="Reusable Components">
            Proven success in boosting development efficiency by up to 30% through the creation of reusable and modular components.
        </FeatureCard>

        <FeatureCard number="02" title="Full-Stack Foundation">
            Experienced with both frontend (React, Next.js) and backend technologies (Laravel, Node.js), ensuring a comprehensive understanding of the full development lifecycle.
        </FeatureCard>
        
        <FeatureCard number="03" title="User-Focused Approach">
            Combines technical expertise with experience in User Acceptance Testing (UAT) to ensure products are not only well-built, but also align with user needs.
        </FeatureCard>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;