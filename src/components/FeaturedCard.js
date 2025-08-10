// src/components/FeatureCard.js

import React from 'react';
import styled from 'styled-components';

// 1. Kita buat 'CardWrapper' menggunakan styled-components
const CardWrapper = styled.div`
  position: relative;
  padding: 2.5rem; // 40px
  border-radius: 1.5rem; // 24px
  background-color: ${props => props.theme === 'light' ? '#FFFFFF' : 'var(--bg-dark)'};
  border: 1px solid ${props => props.theme === 'light' ? '#E5E7EB' : 'var(--border-color)'};
  color: ${props => props.theme === 'light' ? 'var(--text-dark)' : 'var(--text-light)'};

  /* 2. Ini adalah bagian untuk membuat segitiga 'callout' */
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 40px; 
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;

    /* 3. Logika untuk menentukan arah dan warna segitiga */
    ${props => props.direction === 'left' ? `
      left: -20px;
      border-right: 20px solid ${props.theme === 'light' ? '#FFFFFF' : 'var(--bg-dark)'};
    ` : `
      right: -20px;
      border-left: 20px solid ${props.theme === 'light' ? '#FFFFFF' : 'var(--bg-dark)'};
    `}
  }
`;

const FeatureCard = ({ number, title, children, theme = 'light', direction = 'left' }) => {
    return (
        <CardWrapper theme={theme} direction={direction}>
            <div className="relative">
                <span className={`absolute -top-8 -left-4 text-8xl font-extrabold z-0 ${theme === 'light' ? 'text-gray-100' : 'text-gray-800/50'}`}>
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