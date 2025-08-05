import React from 'react';

const Navbar = () => {
    const navLinks = ["Home", "About", "Projects", "Contact"];

    return (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-bg-card/50 backdrop-blur-lg text-text-light py-2.5 px-6 rounded-full shadow-lg border border-white/10">
                <nav>
                    <ul className="flex items-center gap-x-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="hover:text-gray-400 transition-colors duration-200">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default Navbar;