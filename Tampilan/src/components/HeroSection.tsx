import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import botol from '../assets/Gambar Botol Veppo.png';
import videoBg from '../assets/video_landing_page.mp4';
import LilyBackground from './LilyBackground';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ===== Video Background ===== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* ===== Dark Overlay ===== */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* Lily flower decorative backgrounds */}
      <LilyBackground position="top-right" opacity={0.2} color="#A78BFA" />
      <LilyBackground position="bottom-left" opacity={0.15} color="#7F5AF0" className="hidden md:block" />

      {/* Subtle radial glow with violet and pink */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-brand-violet/10 rounded-full blur-[100px] pointer-events-none z-[2]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[100px] pointer-events-none z-[2]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
              Kesegaran Alami dari Pegunungan Ungaran
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/85 leading-relaxed mb-8 max-w-xl drop-shadow">
              <span className="text-violet-pink-gradient font-bold text-2xl">VEPO</span> dengan kemurnian optimal dan mineral baik seimbang yang menyegarkan tiap momen dan aktivitasmu!
            </p>

            <a
              href="#produk"
              className="inline-flex items-center gap-2 font-semibold text-brand-pink hover:text-white transition-colors group drop-shadow"
            >
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              <span className="tracking-wide">LIHAT PRODUK KAMI</span>
            </a>
          </motion.div>

          {/* Right: Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="flex justify-center items-center relative"
          >
            {/* Glowing circle behind the bottle (Violet-Pink gradient) */}
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-br from-brand-violet/20 via-brand-pink/15 to-transparent blur-xl"></div>

            {/* Decorative ring */}
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full border border-brand-pink/20 animate-gentle-sway"></div>
            <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full border border-brand-violet/20 animate-gentle-sway" style={{ animationDirection: 'reverse' }}></div>

            <img
              src={botol}
              alt="VEPO Mineral Water"
              className="relative z-10 h-[350px] md:h-[450px] lg:h-[520px] w-auto object-contain drop-shadow-2xl animate-float"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="#F3F4F6"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
