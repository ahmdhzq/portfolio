import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

    return (
        <>
            {/* Navbar Utama */}
            <div className="fixed container top-4 left-1/2 -translate-x-1/2 z-50">
                <div className="bg-bg-dark/60 backdrop-blur-lg text-text-light py-2.5 px-6 rounded-full shadow-lg border border-white/10">
                    <nav className='flex items-center justify-between'>
                        {/* Logo */}
                        <ul className="flex items-center gap-x-6 text-lg font-bold">
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                                className="hover:text-gray-400 transition-colors duration-200 cursor-pointer"
                                activeClass="text-white font-semibold"
                            >
                                <h2>Ahmdhzq</h2>
                            </Link>
                        </ul>

                        {/* Menu Desktop */}
                        <ul className="hidden md:flex items-center gap-x-6 text-sm font-medium">
                            {navLinks.map((link) => (
                                <li key={link}>
                                    <Link
                                        to={link.toLowerCase()}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        className="hover:text-gray-400 transition-colors duration-200 cursor-pointer"
                                        activeClass="text-white font-semibold"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Tahun */}
                        <ul className="hidden md:flex items-center gap-x-6 text font-semibold">
                            <p>{new Date().getFullYear()}</p>
                        </ul>

                        {/* Tombol Hamburger */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-text-light focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Menu Mobile Overlay */}
            <div className={`
                fixed top-0 left-0 w-full h-screen bg-bg-dark/95 backdrop-blur-lg z-40
                flex flex-col items-center justify-center gap-y-8
                transition-transform duration-300 ease-in-out md:hidden
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
            `}>
                {navLinks.map((link) => (
                    <Link
                        key={link}
                        to={link.toLowerCase()}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="text-xl font-medium text-gray-300 hover:text-gray-400 cursor-pointer"
                        activeClass="text-white font-semibold"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link}
                    </Link>
                ))}
            </div>

            {/* Elemen blur di belakang */}
            <div className="fixed container top-4 left-1/2 -translate-x-1/2 -z-50">
                <div className="bg-black py-6 px-6 rounded-full">
                </div>
            </div>
        </>
    );
};

export default Navbar;