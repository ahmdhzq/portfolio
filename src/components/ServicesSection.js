import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
    {
        number: '01',
        title: 'Web Development',
        description: 'Providing end-to-end web solutions, from interactive user interfaces to robust backend systems.'
    },
    {
        number: '02',
        title: 'UI/UX Design',
        description: 'Designing user-friendly and visually appealing interfaces to deliver seamless experiences.'
    },
    {
        number: '03',
        title: 'Database Management',
        description: 'Ensuring data reliability through robust database design and optimization.'
    },
    {
        number: '04',
        title: 'System Integration',
        description: 'Streamlining system functionalities by integrating APIs and enhancing overall performance.'
    }
];
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2 // Jeda antar item layanan
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};


const ServicesSection = () => {
    return (
        // 3. Terapkan motion ke kontainer utama
        <motion.div 
            id="services" 
            className="font-manrope py-20 px-[10%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                <motion.h2 
                    className="text-6xl lg:text-7xl font-extrabold text-gray-900 mb-10 tracking-tight"
                    variants={itemVariants}
                >
                    Services
                </motion.h2>

                <motion.div 
                    className="border-t border-gray-200"
                    // Varian container di sini untuk men-stagger list layanan
                    variants={containerVariants}
                >
                    {servicesData.map((service, index) => (
                        // Setiap item layanan diberi animasi
                        <motion.div 
                            key={index} 
                            className="py-8 border-b border-gray-200"
                            variants={itemVariants}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                
                                <div className="md:col-span-3 lg:col-span-2">
                                    <p className="text-8xl font-bold text-gray-200">
                                        {service.number}
                                    </p>
                                </div>

                                <div className="md:col-span-9 lg:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                                    <div className="md:col-span-1">
                                        <h3 className="text-3xl font-extrabold text-gray-900 tracking-wide uppercase">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div className="md:col-span-2">
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ServicesSection;