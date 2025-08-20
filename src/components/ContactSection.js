import React from 'react';
import { motion } from 'framer-motion';

// Varian animasi untuk staggered text
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ContactSection = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted!");
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        alert("Thank you! Your message has been sent.");
        event.target.reset();
    };

    return (
        <section id="contact" className="pt-28 pb-10 px-4 font-manrope">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative container mx-auto" 
            >
                <svg
                    viewBox="0 0 838 488"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full fill-bg-dark"
                    strokeWidth="1.5"
                    preserveAspectRatio="none" 
                >
                    <path
                        d="M140 1c-20.158 0-36.5 16.342-36.5 36.5S87.158 74 67 74H51C23.386 74 1 96.386 1 124v313c0 27.614 22.386 50 50 50h736c27.614 0 50-22.386 50-50V124c0-27.614-22.386-50-50-50h-15c-20.158 0-36.5-16.342-36.5-36.5S719.158 1 699 1z"
                    />
                </svg>

                <motion.div
                    className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center p-8 md:p-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.div variants={itemVariants} className="inline-block bg-border-color text-text-gray text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                        Get in Touch
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-text-light tracking-tight mb-4">
                        Let's build something great together.
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-gray max-w-2xl mx-auto mb-10">
                        I'm currently available for freelance projects and full-time roles. If you have a project in mind, a question, or just want to say hello, my inbox is always open.
                    </motion.p>
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-md mx-auto flex flex-col gap-5 text-left"
                    >
                        <motion.div variants={itemVariants}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                className="w-full bg-transparent border border-border-color text-text-light placeholder-text-gray rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label htmlFor="messenger" className="block text-text-gray mb-2 ml-2">Preferred messenger to contact you</label>
                            <div className="relative">
                                <select
                                    name="messenger"
                                    id="messenger"
                                    required
                                    className="w-full appearance-none bg-transparent border border-border-color text-text-light rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                                >
                                    <option value="Telegram" className="bg-bg-dark">Telegram</option>
                                    <option value="WhatsApp" className="bg-bg-dark">WhatsApp</option>
                                    <option value="Email" className="bg-bg-dark">Email</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-gray">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your phone"
                                required
                                className="w-full bg-transparent border border-border-color text-text-light placeholder-text-gray rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <textarea
                                name="message"
                                placeholder="Brief description of the task or question (optional)"
                                rows="4"
                                className="w-full bg-transparent border border-border-color text-text-light placeholder-text-gray rounded-3xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 resize-none"
                            ></textarea>
                        </motion.div>

                        <motion.div variants={itemVariants} className="text-center">
                            <button
                                type="submit"
                                className="bg-white text-bg-dark font-bold text-lg py-3 px-12 rounded-full hover:bg-opacity-90 transition-all duration-300"
                            >
                                Submit
                            </button>
                        </motion.div>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactSection;