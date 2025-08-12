import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const BaseRibbon = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  background: #0f172a;
  color: white;
  padding: 1rem 0;
  transform-origin: center;
`;

const RibbonWrapper = styled(BaseRibbon)`
  transform: rotate(-5deg) translateY(30px);
`;

const RibbonWrapperReverse = styled(BaseRibbon)`
  transform: rotate(5deg) translateY(-30px);
`;

const skills = [
    "App Design",
    "Dashboard",
    "Wireframe",
    "Website",
    "UI/UX",
    "System Integration",
    "Database Management",
    "API Development",
];

const SkillsRibbon = () => {
    return (
        <div className="relative py-16">
            {/* Baris 1 */}
            <RibbonWrapper>
                <motion.div
                    className="flex gap-16 items-center"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25,
                    }}
                >
                    {[...skills, ...skills].map((skill, index) => (
                        <span
                            key={index}
                            className="flex items-center gap-2 text-lg font-semibold tracking-wide"
                        >
                            <FaCheckCircle className="text-green-400" />
                            {skill}
                        </span>
                    ))}
                </motion.div>
            </RibbonWrapper>

            {/* Baris 2 */}
            <RibbonWrapperReverse>
                <motion.div
                    className="flex gap-16 items-center"
                    animate={{ x: ["-100%", "0%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25,
                    }}
                    style={{ marginLeft: "8rem" }} 
                >
                    {[...skills, ...skills].map((skill, index) => (
                        <span
                            key={index}
                            className="flex items-center gap-2 text-lg font-semibold tracking-wide"
                        >
                            <FaCheckCircle className="text-green-400" />
                            {skill}
                        </span>
                    ))}
                </motion.div>
            </RibbonWrapperReverse>
        </div>
    );
};

export default SkillsRibbon;
