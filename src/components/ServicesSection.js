import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const servicesData = [
    {
        number: "01",
        title: "Web Development",
        description:
            "Providing end-to-end web solutions, from interactive user interfaces to robust backend systems."
    },
    {
        number: "02",
        title: "UI/UX Design",
        description:
            "Designing user-friendly and visually appealing interfaces to deliver seamless experiences."
    },
    {
        number: "03",
        title: "Database Management",
        description:
            "Ensuring data reliability through robust database design and optimization."
    },
    {
        number: "04",
        title: "System Integration",
        description:
            "Streamlining system functionalities by integrating APIs and enhancing overall performance."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const ServicesSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleService = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="services"
            className="font-manrope my-16 py-16 px-[10%] bg-bg-dark text-text-light"
        >
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <motion.h2
                    className="text-6xl lg:text-7xl font-extrabold mb-10 tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Services
                </motion.h2>

                {/* Service Items */}
                <motion.div
                    className="border-t border-border-color"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="py-8 border-b border-border-color relative group"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                <div className="md:col-span-3 lg:col-span-2">
                                    <p className="text-8xl font-bold text-border-color group-hover:text-text-gray transition-colors duration-300">
                                        {service.number}
                                    </p>
                                </div>

                                <div className="md:col-span-8 lg:col-span-9">
                                    <h3 className="text-3xl font-extrabold tracking-wide uppercase group-hover:text-accent transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                </div>

                                <div className="md:col-span-1 flex justify-end items-center">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => toggleService(index)}
                                        className="p-2 rounded-full hover:bg-border-color transition"
                                    >
                                        <FiChevronDown
                                            className={`w-6 h-6 transition-transform ${openIndex === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Expandable Description */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, height: "auto", scale: 1 }}
                                        exit={{ opacity: 0, height: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="mt-4 md:pl-[calc(25%)] lg:pl-[calc(16.666%)]"
                                    >
                                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                                            <p className="text-lg text-text-gray leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
