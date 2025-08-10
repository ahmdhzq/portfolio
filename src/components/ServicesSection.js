import React from 'react';

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

const ServicesSection = () => {
    return (
        <div id="services" className="bg-white font-manrope py-24 px-[10%]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-6xl lg:text-7xl font-extrabold text-gray-900 mb-20 tracking-tight">
                    Services
                </h2>

                <div className="border-t border-gray-200">
                    {servicesData.map((service, index) => (
                        <div key={index} className="py-12 border-b border-gray-200">
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;