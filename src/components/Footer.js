import React from 'react';
import { FiMail, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-bg-dark text-text-gray py-10 px-6 font-manrope">
            <div className="max-w-7xl mx-auto text-center">
                {/* Bagian Atas: Nama & Social Links */}
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-text-light mb-2">Ahmad Haziq M.W.</h3>
                    <p className="max-w-md mx-auto mb-6">
                        A Frontend Developer focused on creating beautiful and functional web experiences.
                    </p>
                    <div className="flex justify-center items-center gap-6">
                        <a href="mailto:haziexahmad18@gmail.com" aria-label="Email" className="hover:text-text-light transition-colors">
                            <FiMail size={24} />
                        </a>
                        <a href="https://linkedin.com/in/ahmdhzq18/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-text-light transition-colors">
                            <FiLinkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* Garis Pemisah */}
                <hr className="border-border-color w-1/2 mx-auto mb-6" />

                {/* Bagian Bawah: Copyright */}
                <div className="text-sm">
                    <p>&copy; {currentYear} Ahmad Haziq. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;