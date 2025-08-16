import React from 'react';
import { motion } from 'framer-motion';
import EducationList from './EducationList';
import NametagCard from './NametagCard';

const leftPanelVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const rightPanelVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};


const CredentialsSection = () => {
    return (
        <section className="mt-20 font-manrope">
            <div className="container mx-auto">
                <div className="lg:grid lg:grid-cols-2 rounded-3xl md:rounded-[3rem] overflow-hidden">

                    <motion.div
                        className="bg-bg-dark text-text-light p-12 md:p-28 md:py-8 flex flex-col justify-center"
                        variants={leftPanelVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="space-y-6">

                            <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                                Education
                            </h2>

                            <p className="text-lg text-text-gray max-w-lg">
                                A timeline of my academic journey and the path that shaped me into the developer I am today.
                            </p>

                            <div>
                                <EducationList />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-bg-card flex items-center justify-center min-h-[500px] lg:min-h-0"
                        variants={rightPanelVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <NametagCard />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CredentialsSection;