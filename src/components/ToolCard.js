import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

const ToolCard = ({ name, IconComponent, color }) => {
    return (
        <motion.div
            variants={itemVariants}
            className="group flex flex-col items-center"
        >
            <div
                className="w-28 h-28 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-5xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_var(--tool-color)]"
                style={{ "--tool-color": color }}
            >
                <IconComponent color={color} />
            </div>
            <p className="mt-3 text-gray-400 text-sm transition-colors">
                {name}
            </p>
        </motion.div>
    );
};

export default ToolCard;