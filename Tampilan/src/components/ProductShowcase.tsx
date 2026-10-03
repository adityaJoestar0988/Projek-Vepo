import React from 'react';
import { motion } from 'framer-motion';
import bg650ml from '../assets/background_kemasan_650 ml.png';
import bg19l from '../assets/background_kemasan_19liter.png';
import bg200ml from "../assets/background_kemasan_200ml.png";
import bg1500ml from "../assets/background_kemasan_1500ml.png";

interface Product {
  size: string;
  description: string;
  backgroundImage: string;
  cardPosition: 'left' | 'right';
  isComingSoon?: boolean;
}

const products: Product[] = [
  {
    size: '1500ml',
    description: 'Kemasan yang cocok utnuk dibawa traveling bersama teman - teman atau keluarga, dan dapat berbagi dengan banyak orang',
    backgroundImage:bg1500ml,
    cardPosition: 'right',
    isComingSoon: true,
  },
  {
    size: '19 Liter',
    description: 'Penuhi kebutuhan air keluargamu dengan kemasan 19 Liter',
    backgroundImage: bg19l,
    cardPosition: 'left',
  },
  {
    size: '650ml',
    description: 'Kemasan yang cocok untuk menamani kamu berolahraga dan memenuhi kebutuhan air disaat selesai olahraga',
    backgroundImage: bg650ml,
    cardPosition: 'right',
  },
  {
    size: '200ml',
    description: 'Kemasan yang cocok untuk suguhan dirumah dan di acara',
    backgroundImage: bg200ml,
    cardPosition: 'left',
  },
];

const ProductCard = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  const isLeft = product.cardPosition === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative w-full rounded-3xl overflow-hidden group flex"
      style={{ height: 'clamp(400px, 60vw, 540px)' }}
    >
      {/* Background lifestyle image */}
      <div className="absolute inset-0">
        <img
          src={product.backgroundImage}
          alt={`VEPO ${product.size}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle overlay for better contrast, less dark than before to keep it clean */}
        <div className={`absolute inset-0 ${isLeft ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-white/75 via-white/50 to-transparent md:w-2/3 ${!isLeft && 'md:ml-auto'}`}></div>
      </div>

      {/* Outer border glow */}
      <div className="absolute inset-0 rounded-3xl border border-brand-border group-hover:border-brand-violet-soft/50 transition-colors duration-500 z-20 pointer-events-none"></div>

      {/* Product Info */}
      <div className={`relative z-10 flex flex-col justify-end md:justify-center h-full p-8 md:p-16 w-full md:w-1/2 ${isLeft ? 'mr-auto text-left' : 'ml-auto text-left md:text-right'}`}>
        <h3 className="text-4xl md:text-6xl font-bold text-brand-text-dark mb-4 tracking-tight">
          {product.size}
        </h3>
        <p className="text-base md:text-xl text-black mb-8 leading-relaxed max-w-sm">
          {product.description}
        </p>
        <div className={`flex flex-wrap items-center gap-4 ${isLeft ? '' : 'md:justify-end'}`}>
          <button className="bg-violet-pink-gradient text-white px-6 md:px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-brand-pink/25 transform hover:-translate-y-0.5">
            Beli Sekarang
          </button>
          {product.isComingSoon && (
            <span className="px-6 py-3.5 bg-brand-bg-light text-brand-text-gray font-semibold rounded-xl border border-brand-border">
              Segera Hadir
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  return (
    <section id="produk" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="mb-6 text-3xl md:text-5xl lg:text-6xl text-brand-text-dark font-bold leading-[1.1] tracking-tight max-w-4xl mx-auto">
            VEPO Hadir dengan Berbagai Pilihan Ukuran yang Sesuai Kebutuhan
          </h2>
          <p className="text-brand-text-gray text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Dari acara spesial, rutinitas harian yang padat, hingga momen kebersamaan untuk berbagi
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
