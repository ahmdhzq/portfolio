import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  padding: 2.5rem;
  height: 250px;
  border-radius: 1.5rem; 

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 40px; 
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
`;

const FeatureCard = ({ number, title, children,}) => {
    return (
        <CardWrapper className='border-2'>
            <div className="relative">
                <span className="absolute -top-8 -left-4 text-8xl font-extrabold z-0 text-gray-200">
                    {number}
                </span>
                
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6">{title}</h3>
                    <p className="leading-relaxed text-current opacity-80">
                        {children}
                    </p>
                </div>
            </div>
        </CardWrapper>
    );
};

export default FeatureCard;