import React from 'react';
import { motion } from 'framer-motion';
import bgSumberMataAir from '../assets/background_sumbermataair.png';
import bgProsesOzonasi from '../assets/background_proses ozonasi.png';
import LilyBackground from './LilyBackground';

const qualityItems = [
  {
    id: 1,
    title: "Proses Seleksi",
    description: '"Setiap tetes air mineral alami VEPO melalui proses seleksi sumber mata air yang terpercaya untuk memastikan kualitas dan kemurniannya.',
    reverse: false,
    image: bgSumberMataAir,
  },
  {
    id: 2,
    title: "Proses Ozonasi",
    description: 'Melalui proses ozonasi, air VEPO dimurnikan dengan teknologi ozon yang membantu mengurangi mikroorganisme dan menjaga kualitas air tetap bersih serta segar.',
    reverse: true,
    image: bgProsesOzonasi,
  }
];

const OurQuality = () => {
  return (
    <section className="relative py-24 min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      {/* Decorative lily */}
      <LilyBackground position="bottom-right" opacity={0.25} color="#7F5AF0" />

      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-violet/20 to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand-violet font-semibold text-sm tracking-widest uppercase mb-3 block">Kualitas Terjamin</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text-dark tracking-tight">
            Our Quality
          </h2>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {qualityItems.map((item) => (
            <div 
              key={item.id} 
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${item.reverse ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image/Illustration Side */}
              <motion.div 
                initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full md:w-1/2 flex justify-center"
              >
                <div className="w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-brand-violet/10 border border-brand-border flex items-center justify-center p-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: item.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full md:w-1/2"
              >
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg shadow-brand-violet/5 border border-brand-border hover:border-brand-violet-soft transition-colors duration-300">
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-text-dark mb-6 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-brand-text-gray text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurQuality;
