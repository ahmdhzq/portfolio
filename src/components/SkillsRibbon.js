import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const BaseRibbon = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  background: #121212;
  color: white;
  padding: 1rem 0;
  transform-origin: center;
`;

const RibbonWrapper = styled(BaseRibbon)`
  transform: rotate(-4deg) translateY(30px);
`;

const RibbonWrapperReverse = styled(BaseRibbon)`
  transform: rotate(4deg) translateY(-30px);
`;

const GradientFade = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 10;
  pointer-events: none;
`;

const GradientLeft = styled(GradientFade)`
  left: 0;
  background: linear-gradient(to right, #0f172a, transparent);
`;

const GradientRight = styled(GradientFade)`
  right: 0;
  background: linear-gradient(to left, #0f172a, transparent);
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
        <section className="relative -mx-2 py-16">
            <div className="relative">
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
                    <GradientLeft />
                    <GradientRight />
                </RibbonWrapper>
            </div>

            <div className="relative">
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
                    <GradientLeft />
                    <GradientRight />
                </RibbonWrapperReverse>
            </div>
        </section>
    );
};

export default SkillsRibbon;
