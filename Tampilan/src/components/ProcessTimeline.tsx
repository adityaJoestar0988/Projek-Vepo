import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import bgBakteri from '../assets/background_bebas bakteri berbahaya.png';
import bgLogam from '../assets/background_bebas kontaminasi logam berat.png';
import bgPH from '../assets/background_kadar PH optimal.png';

const ProcessTimeline = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = [bgBakteri, bgLogam, bgPH];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const processes = [
    { name: 'Mata Air Alami', desc: 'Sumber', icon: '💧' },
    { name: 'Sedimentasi', desc: 'Penyaringan awal', icon: '🏔️' },
    { name: 'Micro Filter I', desc: 'Penyaringan mikro', icon: '🔬' },
    { name: 'Raw Water', desc: 'Penampungan awal', icon: '🏗️' },
    { name: '2x Ozonisasi', desc: 'Sterilisasi ganda', icon: '⚡' },
    { name: 'Sand/Carbon Filter', desc: 'Filtrasi lanjutan', icon: '🧪' },
    { name: 'Finish Tank', desc: 'Penampungan akhir', icon: '🏭' },
    { name: 'Ultraviolet (UV)', desc: 'Sterilisasi UV', icon: '☀️' },
    { name: 'Siap Dikemas', desc: 'Produk akhir', icon: '✅' },
  ];

  return (
    <section id="proses" className="py-24 overflow-hidden relative bg-white">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, #7F5AF0 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-violet font-semibold text-sm tracking-widest uppercase mb-3 block">Quality Control</span>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-text-dark mb-4 tracking-tight">
            Proses Pemurnian Berstandar Tinggi
          </h3>
          <p className="text-brand-text-gray max-w-2xl mx-auto leading-relaxed">
            Setiap tetes air melewati tahapan purifikasi ketat yang diawasi oleh
            laboratorium modern internal dan laboratorium eksternal terverifikasi.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[28px] left-0 w-full h-0.5 bg-gradient-to-r from-brand-bg-light via-brand-violet-soft to-brand-bg-light z-0"></div>

          <div className="grid grid-cols-2 md:grid-cols-9 gap-4 md:gap-0 relative z-10">
            {processes.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col items-center group"
              >
                <div className="w-14 h-14 rounded-full bg-white border-2 border-brand-border flex items-center justify-center mb-4 group-hover:border-brand-violet group-hover:bg-brand-violet-bg transition-all duration-300 shadow-md group-hover:shadow-brand-violet/20 group-hover:scale-110">
                  <span className="text-lg">{step.icon}</span>
                </div>
                <div className="text-center px-1">
                  <h4 className="text-xs font-bold text-brand-text-dark mb-1 leading-tight group-hover:text-brand-violet transition-colors">
                    {step.name}
                  </h4>
                  <p className="text-[10px] text-brand-text-light">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-brand-violet/5 border border-brand-border grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h4 className="text-2xl font-bold text-brand-text-dark mb-4 tracking-tight">
              Uji Kualitas Tanpa Kompromi
            </h4>
            <p className="text-brand-text-gray mb-6 leading-relaxed">
              Fasilitas produksi kami dilengkapi dengan laboratorium pengujian
              kualitas air internal yang mutakhir. Tidak hanya itu, kami secara
              rutin bekerja sama dengan laboratorium independen bersertifikat
              untuk memastikan standar tertinggi.
            </p>
            <ul className="space-y-4">
              {[
                'Bebas bakteri berbahaya',
                'Kadar pH optimal',
                'Bebas kontaminan logam berat',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center text-sm font-medium text-brand-text-dark"
                >
                  <span className="w-6 h-6 rounded-full bg-brand-violet-bg text-brand-violet flex items-center justify-center mr-3 text-xs font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-brand-border relative bg-gray-100">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentImageIndex}
                src={carouselImages[currentImageIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                alt={`Quality Control ${currentImageIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            {/* Subtle violet tint */}
            <div className="absolute inset-0 bg-brand-violet/10 mix-blend-multiply pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
