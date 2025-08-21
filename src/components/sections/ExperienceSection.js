import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
    {
        role: "Project-Based Frontend Developer",
        company: "PT. Eternal Jaya Engineering",
        date: "July 2024 - Present",
        location: "South Jakarta, Jakarta",
        descriptions: [
            "Develop and maintain user interfaces for procurement web applications using Next.js, with a focus on clean and maintainable code.",
            "Design and implement interactive features to streamline user workflows, enhancing automation and transparency."
        ],
    },
    {
        role: "Web Developer & Mentor",
        company: "PeTIK II Jombang",
        date: "August 2023 - May 2024",
        location: "Jombang, East Java",
        descriptions: [
            "Developed and maintained a web-based licensing application using Laravel and Bootstrap 5, focusing on an intuitive interface design.",
            "Mentored and trained over 30 students on the fundamentals of web development (HTML, CSS) and IT project planning."
        ],
    },
    {
        role: "Full-Stack Developer (Intern)",
        company: "STT Stikma International",
        date: "May 2023 - August 2023",
        location: "Jombang, East Java",
        descriptions: [
            "Built responsive web applications from scratch using Laravel and Bootstrap, ensuring cross-device compatibility.",
            "Designed and implemented reusable Ul components, successfully increasing team development efficiency by 30%."
        ],
    },
];

const ExperienceSection = () => {
    return (
        <section className="py-16 font-manrope">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-20 tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Work Experience
                </motion.h2>

                <div className="relative max-w-7xl mx-auto">
                    <div className="absolute left-1/2 top-2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2" />

                    {experienceData.map((exp, i) => {
                        const isLeft = i % 2 === 0;

                        const cardVariants = {
                            hidden: { opacity: 0, x: isLeft ? -50 : 50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        };

                        const CardContent = () => (
                            <div className={`relative rounded-3xl p-6 ${isLeft ? 'bg-bg-card border border-bg-dark' : 'border-2 border-border-color'}`}>
                                <div className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent ${isLeft ? '-right-2 border-l-8 border-l-bg-card' : '-left-2 border-r-8 border-r-bg-card'}`}></div>
                                {isLeft ? (
                                    <>
                                        <p className="text-xs text-text-gray mb-2">{exp.date}</p>
                                        <h3 className="text-xl font-bold text-text-light mb-1">{exp.role}</h3>
                                        <p className="text-md text-text-gray font-semibold mb-4">{exp.company}</p>
                                        <ul className="list-disc list-inside space-y-2 text-text-light/80">
                                            {exp.descriptions.map((desc, index) => <li key={index}>{desc}</li>)}
                                        </ul>
                                    </>
                                ) : (
                                    <>
                                        <div className="absolute top-1/2 -left-[9.5px] transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-200 -z-10"></div>
                                        <p className="text-xs text-gray-500 mb-2">{exp.date}</p>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                                        <p className="text-md text-gray-600 font-semibold mb-4">{exp.company}</p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            {exp.descriptions.map((desc, index) => <li key={index}>{desc}</li>)}
                                        </ul>
                                    </>
                                )}
                            </div>
                        );

                        return (
                            <div key={i} className="mb-8 flex justify-between w-full">

                                <div className="w-[47%] ">
                                    {isLeft && (
                                        <motion.div
                                            variants={cardVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.4 }}
                                        >
                                            <CardContent />
                                        </motion.div>
                                    )}
                                </div>


                                <div className="w-[47%]">
                                    {!isLeft && (
                                        <motion.div
                                            variants={cardVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.4 }}
                                        >
                                            <CardContent />
                                        </motion.div>
                                    )}
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;