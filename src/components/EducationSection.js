import React from "react";
import { motion } from "framer-motion";

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

const EducationSection = () => {
    return (
        <section className="py-12 my-12">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold text-center text-black dark:text-white mb-20"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Education Journey
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    {educationData.map((edu, i) => (
                        <div key={i}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="group -mx-6 px-6 py-8 rounded-2xl transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-[#1a1a1a]"
                            >
                                <div className="flex items-start gap-8">
                                    <span className="text-5xl font-bold text-gray-200 dark:text-gray-700 transition-colors duration-300 group-hover:text-gray-300 dark:group-hover:text-gray-600">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>

                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-2">
                                            <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-1 md:mb-0">
                                                {edu.title}
                                            </h3>
                                            <p className="text-sm text-gray-400 dark:text-gray-500 font-mono">
                                                {edu.date}
                                            </p>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {edu.place}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {i < educationData.length - 1 && (
                                <hr className="border-gray-200 dark:border-gray-800" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;