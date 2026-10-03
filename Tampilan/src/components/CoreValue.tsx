import React from 'react';
import { motion } from 'framer-motion';

const CoreValue = () => {
  const values = [
    {
      title: "Care",
      description: "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque\""
    },
    {
      title: "Compassion",
      description: "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque\""
    },
    {
      title: "Courage",
      description: "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque\""
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Subtle violet glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-violet/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-brand-violet font-semibold text-sm tracking-widest uppercase mb-3 block">Nilai Inti</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text-dark tracking-tight">
            Core Value
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: 3C Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center relative h-[350px] sm:h-[450px] lg:h-[500px]"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* The "3" */}
              <span 
                className="text-[250px] sm:text-[350px] lg:text-[450px] leading-none absolute left-0 sm:left-10 lg:left-0 z-10" 
                style={{ 
                  color: '#7F5AF0', 
                  fontFamily: 'sans-serif', 
                  fontWeight: 300,
                  textShadow: '0 20px 60px rgba(127,90,240,0.2)'
                }}
              >
                3
              </span>
              {/* The "C" */}
              <span 
                className="text-[180px] sm:text-[250px] lg:text-[300px] leading-none absolute right-10 sm:right-24 lg:right-16 bottom-0 sm:bottom-10 lg:bottom-10 z-20" 
                style={{ 
                  color: '#EC4899', 
                  fontFamily: 'sans-serif', 
                  fontWeight: 500,
                  textShadow: '0 10px 30px rgba(236,72,153,0.3)'
                }}
              >
                C
              </span>
            </div>
          </motion.div>

          {/* Right: Cards */}
          <div className="flex flex-col gap-6">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-brand-violet/5 border border-brand-border hover:border-brand-violet-soft hover:shadow-brand-violet/10 transition-all duration-300"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-brand-violet mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-brand-text-gray text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
