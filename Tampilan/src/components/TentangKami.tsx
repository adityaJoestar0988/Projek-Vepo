import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-brand-violet/10 bg-white border border-brand-border">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ x: "100%", opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0.5 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Tentang kami"
        />
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-brand-violet w-6' : 'bg-white/70 hover:bg-white'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const StorySection = () => {
  const slider1Images = [
    "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=800",
    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=800",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800"
  ];

  const slider2Images = [
    "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?q=80&w=800",
    "https://images.unsplash.com/photo-1455214514120-e2d422396b2e?q=80&w=800",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800"
  ];

  return (
    <section id="tentang" className="py-24 relative overflow-hidden bg-brand-bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand-violet font-semibold text-sm tracking-widest uppercase mb-3 block">Tentang Perusahaan</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text-dark tracking-tight">
            Tentang Kami
          </h2>
        </motion.div>

        {/* Row 1: Slider Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <ImageSlider images={slider1Images} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-brand-text-gray text-sm md:text-base leading-relaxed text-justify">
              "PT. Karya Beta Sejahtera adalah perusahaan yang bergerak di bidang perdagangan dan distribusi Air Minum Dalam Kemasan (AMDK) sekaligus sebagai pemilik merek (brand owner) "VEPO". Perusahaan didirikan dengan komitmen untuk menghadirkan produk air minum yang berkualitas, higienis, aman dikonsumsi, serta mudah dijangkau oleh masyarakat melalui jaringan distribusi yang profesional dan terpercaya."
            </p>
          </motion.div>
        </div>

        {/* Row 2: Text Left, Slider Right */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <p className="text-brand-text-gray text-sm md:text-base leading-relaxed text-justify">
              "Sebagai pemegang hak atas merek VEPO, PT. Karya Beta Sejahtera tidak hanya berfokus pada pengembangan pasar dan distribusi produk, tetapi juga menjaga konsistensi kualitas, identitas merek, dan kepuasan pelanggan. Seluruh proses pengembangan bisnis dilakukan dengan mengedepankan prinsip integritas, inovasi, dan pelayanan prima."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2"
          >
            <ImageSlider images={slider2Images} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
