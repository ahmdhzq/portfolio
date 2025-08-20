import React from "react";
import { motion } from "framer-motion";
import FlowingMenu from "./FlowlingMenu";

const servicesData = [
    {
        link: "#",
        text: "Web Development",
        image: "/assets/web.jpg",
    },
    {
        link: "#",
        text: "UI/UX Design",
        image: "/assets/ui.png",
    },
    {
        link: "#",
        text: "Database Management",
        image: "/assets/data.jpg",
    },
    {
        link: "#",
        text: "System Integration",
        image: "/assets/system.jpg",
    },
];

const ServicesSection = () => {
    return (
        <section
            id="services"
            className="font-manrope relative my-16 bg-bg-dark text-gray-100 overflow-hidden"
        >

            <div className="relative mx-auto py-24">
                <motion.h2
                    className="text-4xl md:text-6xl text-center font-bold mb-6 tracking-tight"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Our Services
                </motion.h2>

                <motion.p
                    className="max-w-2xl mx-auto text-center text-lg text-gray-400 mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    We provide end-to-end digital solutions that empower businesses — from{" "}
                    <span className="text-white font-semibold">modern websites</span> to{" "}
                    <span className="text-white font-semibold">integrated systems</span>.
                </motion.p>

                {/* Flowing Menu */}
                <div className="relative h-[600px]">
                    <FlowingMenu items={servicesData} />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
