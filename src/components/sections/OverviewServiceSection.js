import React from 'react';
import FeatureCard from '../ui/FeaturedCard';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

const OverviewServiceSection = () => {
  return (
    <motion.div 
        className="py-20 px-6 md:px-12 lg:px-16 font-manrope"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 flex flex-col sm:flex-row justify-center items-center gap-4"
        variants={itemVariants}
      >
        How I Build 
        <span className='bg-bg-dark text-text-light px-5 py-2 sm:px-6 sm:py-3 rounded-full font-extralight text-xl sm:text-2xl whitespace-nowrap'>
          Great App
        </span>
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
            <FeatureCard number="01" title="Reusable Components">
                Proven success in boosting development efficiency by up to 30% through the creation of reusable and modular components.
            </FeatureCard>
        </motion.div>

        <motion.div variants={itemVariants}>
            <FeatureCard number="02" title="Full-Stack Foundation">
                Experienced with both frontend (React, Next.js) and backend technologies (Laravel, Node.js), ensuring a comprehensive understanding of the full development lifecycle.
            </FeatureCard>
        </motion.div>
        
        <motion.div variants={itemVariants}>
            <FeatureCard number="03" title="User-Focused Approach">
                Combines technical expertise with experience in User Acceptance Testing (UAT) to ensure products are not only well-built, but also align with user needs.
            </FeatureCard>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OverviewServiceSection;