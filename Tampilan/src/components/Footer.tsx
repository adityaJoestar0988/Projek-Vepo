import React from 'react';
import { Phone, MapPin, Heart } from 'lucide-react';
import logo from '../assets/Logo Veppo.png';

const Footer = () => {
  return (
    <footer
      id="kontak"
      className="relative pt-24 pb-10 overflow-hidden bg-violet-pink-gradient"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-violet/30 opacity-50"></div>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6 bg-white p-3 rounded-2xl w-max shadow-lg shadow-black/10">
              <img src={logo} alt="Veppo Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-white/80 mb-6 italic border-l-4 border-brand-violet-soft pl-4 py-1 leading-relaxed">
              "Seperti doa Ibu yang tak pernah putus, VEPO selalu ada
              untuk keluarga Indonesia."
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
              Hubungi Kami
            </h4>
            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="p-3 bg-white/10 rounded-full mr-4 group-hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Marketing Phone</p>
                  <a
                    href="tel:024-6925460"
                    className="text-lg font-bold text-white hover:text-brand-violet-soft transition-colors"
                  >
                    (024) 6925460
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
              Pabrik & Kantor
            </h4>
            <div className="flex items-start group">
              <div className="p-3 bg-white/10 rounded-full mr-4 group-hover:bg-white/20 transition-colors">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-2 tracking-wide">CV. TIRTA MAKMUR</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Jl. Cempaka III No. 62
                  <br />
                  Genuk, Ungaran Barat
                  <br />
                  Kab. Semarang, Jawa Tengah
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} CV. TIRTA MAKMUR. All rights
            reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-1.5">
            Dibuat dengan{' '}
            <Heart className="w-4 h-4 text-brand-violet-soft fill-brand-violet-soft" /> untuk
            keluarga Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
