import React from 'react';

const Navbar = () => {
    const navLinks = ["Home", "About", "Projects", "Contact"];

    return (<>
        <div className="fixed container top-4 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-bg-dark/20 backdrop-blur-lg text-text-light py-2.5 px-6 rounded-full shadow-lg border border-white/10">
                <nav className='flex items-center justify-between '>
                    <ul className="flex items-center gap-x-6 text-lg font-bold">
                        <h2>Ahmdhzq</h2>
                    </ul>
                    <ul className="flex items-center gap-x-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="hover:text-gray-400 transition-colors duration-200">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center gap-x-6 text font-semibold">
                        <p>2025</p>
                    </ul>
                </nav>
            </div>

        </div>
        <div className="fixed container top-4 left-1/2 -translate-x-1/2 -z-50">
            <div className="bg-bg-dark py-6 px-6 rounded-full">
            </div>
        </div>
    </>
    );
};

export default Navbar;