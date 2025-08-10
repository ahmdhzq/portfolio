/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { IoSparkles } from 'react-icons/io5';

const DownloadButton = () => {
    return (
        <a
            href="#"
            download="nama-file-cv.pdf"
            className="group inline-flex items-center justify-center my-8"
        >
            <div
                className="
            bg-black text-white  
            flex items-center 
            py-4 pl-8 pr-6 
            rounded-l-full 
            font-bold text-lg 
            transition-transform duration-300 ease-in-out
            group-hover:scale-105"
            >
                <span>Download CV</span>
            </div>
            <div
                className="
        bg-black text-white  
        p-4 
        rounded-r-full 
        transition-transform duration-300 ease-in-out
        group-hover:scale-105"
            >
                <IoSparkles size={28} />
            </div>
        </a>
    );
};

export default DownloadButton;