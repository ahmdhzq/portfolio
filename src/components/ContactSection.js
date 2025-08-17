import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// Varian animasi untuk staggered text
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 px-6 font-manrope bg-bg-card text-text-light">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="inline-block bg-border-color text-text-gray text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          Get in Touch
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Let's build something great together.
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-gray max-w-2xl mx-auto mb-10">
          I'm currently available for freelance projects and full-time roles. If you have a project in mind, a question, or just want to say hello, my inbox is always open.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a
            href="mailto:haziexahmad18@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-bg-dark font-bold text-lg py-4 px-8 rounded-full group hover:bg-opacity-90 transition-all duration-300"
          >
            Say Hello
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;