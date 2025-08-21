import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    number: "01",
    date: "Okt 2023 - Present",
    title: "Informatics Engineering",
    place: "Asia Cyber University",
  },
  {
    number: "02", 
    date: "Jun 2022 - Jul 2023",
    title: "Software Development",
    place: "PeTIK II Jombang",
  },
  {
    number: "03",
    date: "Jul 2019 - May 2022",
    title: "Electrical Engineering",
    place: "SMKN 1 Nganjuk",
  },
];

const EducationList = () => {
  return (
    <div className="space-y-8">
      {educationData.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          viewport={{ once: true }}
          className="group cursor-pointer"
        >
          <motion.div 
            className="border-b border-border-color pb-3 hover:border-text-light transition-all duration-300"
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <motion.p 
              className="text-sm text-text-gray font-medium mb-2 tracking-wider uppercase"
              whileHover={{ color: '#FFFFFF' }}
            >
              {edu.date}
            </motion.p>
            
            <h3 className="text-3xl font-black text-text-light mb-2 leading-tight group-hover:text-text-light transition-colors duration-300">
              {edu.title}
            </h3>
            
            <p className="text-lg text-text-gray font-medium">
              {edu.place}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationList;