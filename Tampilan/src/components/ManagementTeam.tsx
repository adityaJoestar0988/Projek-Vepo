import React, { useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, wrap } from 'framer-motion';

const teamMembers = [
  { name: "Nama orangnya", role: "jabatanya", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
  { name: "Nama orangnya", role: "jabatanya", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
  { name: "Nama orangnya", role: "jabatanya", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" },
  { name: "Nama orangnya", role: "jabatanya", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" },
  { name: "Nama orangnya", role: "jabatanya", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
];

const ManagementTeam = () => {
  const marqueeItems = [...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers];
  
  const [isDragging, setIsDragging] = useState(false);
  
  const x = useMotionValue(0);
  
  const setWidth = 1440;
  const velocity = 1;

  useAnimationFrame((t, delta) => {
    if (isDragging) return;
    const moveBy = velocity * (delta / 16);
    x.set(wrap(-setWidth, 0, x.get() - moveBy));
  });

  const handleDrag = () => {
    x.set(wrap(-setWidth, 0, x.get()));
  };

  return (
    <section className="relative py-24 min-h-screen flex flex-col justify-center overflow-hidden bg-brand-bg-light">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-brand-violet/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-[250px] h-[250px] bg-brand-violet-soft/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <span className="text-brand-violet font-semibold text-sm tracking-widest uppercase mb-3 block">Tim Kami</span>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-text-dark mb-16 tracking-tight text-center">
          Management Team
        </h2>

        {/* Draggable Marquee Container */}
        <div className="w-full relative mb-12 overflow-hidden cursor-grab active:cursor-grabbing py-4"
             onMouseDown={() => setIsDragging(true)}
             onMouseUp={() => setIsDragging(false)}
             onMouseLeave={() => setIsDragging(false)}
             onTouchStart={() => setIsDragging(true)}
             onTouchEnd={() => setIsDragging(false)}>
          <motion.div 
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -10000, right: 10000 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            onDrag={handleDrag}
            className="flex w-max"
          >
            {marqueeItems.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center w-64 mx-4 flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-brand-violet/20 shadow-xl shadow-brand-violet/10 bg-white group pointer-events-none hover:border-brand-violet/40 transition-colors">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-brand-text-dark mb-1 text-center tracking-tight pointer-events-none">{member.name}</h3>
                <p className="text-brand-text-gray font-normal text-sm text-center pointer-events-none">{member.role}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex gap-4 mb-16">
          <div className="w-3 h-3 rounded-full bg-brand-violet/40 shadow-[0_0_8px_rgba(127,90,240,0.3)]"></div>
          <div className="w-3 h-3 rounded-full bg-brand-violet shadow-[0_0_12px_rgba(127,90,240,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-brand-violet/40 shadow-[0_0_8px_rgba(127,90,240,0.3)]"></div>
        </div>

        {/* Footer Text */}
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-brand-text-gray text-sm md:text-base leading-relaxed">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
