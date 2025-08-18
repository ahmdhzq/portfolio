import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Footer = () => {
    const socialLinks = [
        { icon: <FiGithub />, url: 'https://github.com' },
        { icon: <FiLinkedin />, url: 'https://linkedin.com' },
        { icon: <FiTwitter />, url: 'https://twitter.com' },
        { icon: <FiInstagram />, url: 'https://instagram.com' },
    ];

    return (
        <section className="font-manrope">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative mx-auto bg-bg-dark border"
            >

                <motion.div
                    className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center p-8 md:py-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.div variants={itemVariants} className="flex items-center gap-6 mb-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-gray hover:text-white transition-colors duration-300"
                            >
                                {React.cloneElement(link.icon, { size: 24 })}
                            </a>
                        ))}
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-text-gray text-sm">
                        &copy; {new Date().getFullYear()} Ahmad Haziq. All Rights Reserved.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Footer;