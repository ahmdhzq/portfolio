import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  "Microsoft Certified: Azure Fundamentals",
  "Dicoding: Belajar Dasar Pemrograman Web",
  "FreeCodeCamp: Responsive Web Design",
  // Tambahkan sertifikasi lainnya di sini
];

const CertificationsCard = () => {
  return (
    <div className="bg-bg-card border border-border-color rounded-2xl shadow-lg p-6 w-full">
      <h3 className="text-xl font-bold text-text-light mb-4">Certifications</h3>
      <ul className="space-y-3">
        {certifications.map((cert, index) => (
          <li key={index} className="flex items-start">
            <FaCertificate className="w-4 h-4 text-text-gray mt-1 mr-3 flex-shrink-0" />
            <span className="text-text-light">{cert}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificationsCard;