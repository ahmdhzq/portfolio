import React from "react";
import { motion } from "framer-motion";
import { tools } from "../data/toolData";
import ToolCard from "./ToolCard";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.07 }
    }
};

const MostUsefulTools = () => {
    return (
        <section className="py-20 text-black">
            <div className="container mx-auto px-6 text-center">

                {/* Judul */}
                <motion.h2
                    className="text-4xl font-bold mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Most Used <span className="text-gray-500">Tools</span>
                </motion.h2>

                {/* Grid Ikon */}
                <motion.div
                    className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {tools.map((tool) => (
                        <ToolCard
                            key={tool.name}
                            name={tool.name}
                            IconComponent={tool.IconComponent}
                            color={tool.color}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MostUsefulTools;