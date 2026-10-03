import React from 'react';
import { motion } from 'framer-motion';

const TrustBadges = () => {
  const badges = [
    { 
      name: 'STANDAR NASIONAL INDONESIA', 
      svg: (
        <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-44 md:h-44 lg:w-[220px] lg:h-[220px]">
          <rect x="10" y="10" width="80" height="80" rx="20" fill="none" stroke="black" strokeWidth="5" />
          <text x="50" y="58" fontSize="28" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" fill="black">SNI</text>
          <line x1="25" y1="30" x2="75" y2="30" stroke="black" strokeWidth="4" />
          <line x1="25" y1="70" x2="75" y2="70" stroke="black" strokeWidth="4" />
        </svg>
      )
    },
    { 
      name: 'INTERNATIONAL STANDAR OPERATIONAL', 
      svg: (
        <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-44 md:h-44 lg:w-[220px] lg:h-[220px]">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#0033cc" strokeWidth="2.5" />
          <ellipse cx="50" cy="50" rx="15" ry="40" fill="none" stroke="#0033cc" strokeWidth="2.5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#0033cc" strokeWidth="2.5" />
          <line x1="15" y1="30" x2="85" y2="30" stroke="#0033cc" strokeWidth="2.5" />
          <line x1="15" y1="70" x2="85" y2="70" stroke="#0033cc" strokeWidth="2.5" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="#0033cc" strokeWidth="2.5" />
          <text x="50" y="62" fontSize="34" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5">ISO</text>
          <text x="50" y="62" fontSize="34" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" fill="#0033cc">ISO</text>
        </svg>
      )
    },
    { 
      name: 'TERBUKTI HALAL', 
      svg: (
        <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-44 md:h-44 lg:w-[220px] lg:h-[220px]">
          <path d="M50 15 C 60 40, 80 50, 80 75 C 80 85, 70 90, 50 90 C 30 90, 20 85, 20 75 C 20 50, 40 40, 50 15 Z" fill="none" stroke="#660099" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35 85 L35 45 M50 90 L50 35 M65 85 L65 45" stroke="#660099" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M25 70 L45 70 M55 70 L75 70" stroke="#660099" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    { 
      name: 'IZIN BPOM', 
      svg: (
        <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-44 md:h-44 lg:w-[220px] lg:h-[220px]">
          <path d="M20 50 Q 40 60, 50 80 Q 65 40, 90 10 Q 70 40, 50 65 Q 35 50, 20 50 Z" fill="#0055cc" />
          <path d="M70 25 Q 85 10, 90 10 Q 70 40, 50 65 Q 60 45, 70 25 Z" fill="#00cc44" />
        </svg>
      )
    },
  ];

  return (
    <section className="relative py-24 min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-brand-bg-light via-white to-brand-bg-light">
      {/* Subtle violet accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-violet/15 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-violet font-semibold text-sm tracking-widest uppercase mb-3 block">Sertifikasi</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text-dark tracking-tight">
            Terpercaya & Bersertifikat
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-12 md:gap-16">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center group w-full md:w-1/5"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                {badge.svg}
              </div>
              <p className="font-semibold text-brand-text-dark text-sm md:text-base text-center tracking-wide uppercase">
                {badge.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
