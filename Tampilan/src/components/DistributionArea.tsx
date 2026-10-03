import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import LilyBackground from './LilyBackground';

const DistributionArea = () => {
  const cities = [
    'Semarang',
    'Kab. Semarang',
    'Solo',
    'Kudus',
    'Yogyakarta',
    'Surabaya',
    'Bandung',
    'Kalimantan',
  ];

  return (
    <section id="distribusi" className="py-24 relative overflow-hidden bg-brand-bg-light">
      {/* Decorative lily background */}
      <LilyBackground position="center" opacity={0.2} color="#7F5AF0" className="scale-150 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-brand-violet font-semibold text-sm tracking-widest uppercase mb-3 block">Jangkauan Distribusi Kami</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-brand-text-dark tracking-tight">
              Membawa Kesegaran ke Berbagai Wilayah
            </h3>
            <p className="text-brand-text-gray text-lg mb-8 leading-relaxed">
              Jaringan distribusi kami terus berkembang untuk memastikan setiap
              keluarga dapat menikmati air mineral berkualitas dari VEPO. Kami
              siap melayani kebutuhan Anda di berbagai kota besar.
            </p>

            <div className="flex flex-wrap gap-3">
              {cities.map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="bg-white border border-brand-border shadow-sm px-4 py-2 rounded-full flex items-center text-sm font-medium text-brand-text-dark hover:bg-brand-violet hover:border-brand-violet hover:text-white transition-all duration-300 cursor-default group"
                >
                  <MapPin className="w-4 h-4 mr-2 text-brand-violet group-hover:text-white transition-colors" />
                  {city}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-brand-violet/10 border border-brand-border"
          >
            <h4 className="text-2xl font-bold text-brand-text-dark mb-2 tracking-tight">
              Tertarik Menjadi Mitra?
            </h4>
            <p className="text-brand-text-gray mb-8">
              Bergabunglah bersama kami dan sebarkan kesegaran VEPO di wilayah Anda.
            </p>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-brand-text-dark mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-brand-bg-light border border-brand-border focus:ring-2 focus:ring-brand-violet focus:border-brand-violet transition-all outline-none text-brand-text-dark placeholder-brand-text-light"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-brand-text-dark mb-2">
                    No. WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-brand-bg-light border border-brand-border focus:ring-2 focus:ring-brand-violet focus:border-brand-violet transition-all outline-none text-brand-text-dark placeholder-brand-text-light"
                    placeholder="08..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-text-dark mb-2">
                    Wilayah
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-brand-bg-light border border-brand-border focus:ring-2 focus:ring-brand-violet focus:border-brand-violet transition-all outline-none text-brand-text-dark placeholder-brand-text-light"
                    placeholder="Kota Anda"
                  />
                </div>
              </div>
              <button
                type="button"
                className="w-full bg-violet-pink-gradient hover:opacity-90 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-pink/25 transition-all mt-4 transform hover:-translate-y-0.5"
              >
                Kirim Permintaan Mitra
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DistributionArea;
