import React from 'react';
import EducationList from './EducationList';
import NametagCard from './NametagCard';
import { motion } from 'framer-motion';

const CredentialsSection = () => {
    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold text-center text-black dark:text-white mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Education & Credentials
                </motion.h2>

                {/* Layout 2 Kolom */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Kolom Kiri: Daftar Edukasi */}
                    <div>
                        <EducationList />
                    </div>

                    {/* Kolom Kanan: Nametag */}
                    <div style={{ height: "100vh" }} className='bg-slate-200'>
                        <NametagCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CredentialsSection;