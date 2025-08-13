import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    date: "Okt 2023 - Present",
    title: "Informatics Engineering",
    place: "Asia Cyber University",
  },
  {
    date: "Jun 2022 - Jul 2023",
    title: "Software Development",
    place: "PeTIK II Jombang",
  },
  {
    date: "Jul 2019 - May 2022",
    title: "Electrical Engineering",
    place: "SMKN 1 Nganjuk",
  },
];

const EducationList = () => {
    return (
        <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
            {educationData.map((edu, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    {/* Dot */}
                    <span className="absolute -left-[10px] w-5 h-5 bg-blue-500 border-4 border-white dark:border-black rounded-full shadow" style={{ top: `${i * 115}px` }} />

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                        {edu.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        {edu.place}
                    </p>
                    <span className="text-sm text-gray-400">{edu.date}</span>
                </motion.div>
            ))}
        </div>
    );
};

export default EducationList;
