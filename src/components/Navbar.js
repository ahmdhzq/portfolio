import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

    return (
        <>
            <div className="fixed container top-4 left-1/2 -translate-x-1/2 z-50">
                <div className="bg-bg-dark/20 backdrop-blur-lg text-text-light py-2.5 px-6 rounded-full shadow-lg border border-white/10">
                    <nav className='flex items-center justify-between'>
                        <ul className="flex items-center gap-x-6 text-lg font-bold">
                            <Link 
                                to="home" 
                                smooth={true}
                                duration={500}
                                className="cursor-pointer"
                            >
                                <h2>Ahmdhzq</h2>
                            </Link>
                        </ul>
                        
                        <ul className="flex items-center gap-x-6 text-sm font-medium">
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

                        <ul className="flex items-center gap-x-6 text font-semibold">
                            <p>{new Date().getFullYear()}</p>
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