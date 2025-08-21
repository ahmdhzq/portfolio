import React from 'react';
import { IoSparkles } from 'react-icons/io5';


const SvgBackground = () => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 220 110"
        className="absolute top-0 left-0 z-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill="#121212"
            d="M219.459 55.3a24.046 24.046 0 0 1 -24.044 24.044 24.046 24.046 0 0 1 -24.044 -24.044 24.044 24.044 0 0 1 48.088 0"
        />
        <path
            d="M185.648 59.078a24.053 24.053 0 0 0 -26.201 -5.212 23.99 23.99 0 0 0 -7.801 5.212l9.944 9.944a9.98 9.98 0 0 1 14.115 0z"
            fill="#121212"
        />
        <path
            d="M185.648 51.605a24.046 24.046 0 0 1 -34.002 0l9.944 -9.943a9.98 9.98 0 0 0 14.115 0z"
            fill="#121212"
        />
        <path
            fill="#121212"
            d="M24.044 31.257H141.858a24.046 24.046 0 0 1 24.044 24.044 24.046 24.046 0 0 1 -24.044 24.044H24.044A24.046 24.046 0 0 1 0 55.3a24.046 24.046 0 0 1 24.044 -24.044"
        />
    </svg>
);

const DownloadButton = () => {
    return (
        <a
            href="/CV_AhmadHaziq.pdf"
            download="CV_AhmadHaziq.pdf"
            className="relative inline-flex items-center justify-center w-[220px] h-[111px] text-gray-50 font-extrabold text-lg no-underline cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
        >
            <SvgBackground />
            <div className="relative z-10 flex items-center justify-between px-3 gap-2 w-full h-full rounded-sm">
                <span className="px-3 py-1">
                    Download CV
                </span>
                <IoSparkles size={20} className="relative" />
            </div>
        </a>
    );
};

export default DownloadButton;