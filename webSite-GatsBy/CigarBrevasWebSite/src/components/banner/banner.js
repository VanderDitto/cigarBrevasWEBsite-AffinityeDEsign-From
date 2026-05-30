import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Banner = () => {
  return (
    <>
      <style>{`
        @keyframes card-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes sunrise-glow {
          0%, 100% { transform: translate(-50%, -40%) scale(1); opacity: 0.35; }
          50% { transform: translate(-50%, -55%) scale(1.15); opacity: 0.50; }
        }
      `}</style>

      <section className="relative w-full min-h-[60vh] py-12 md:py-16 flex flex-col md:flex-row items-center justify-center md:justify-around px-6 md:px-16 lg:px-24 overflow-hidden bg-gradient-to-b from-[#fffcf2] via-[#c3d3a2] to-[#324f2b]">
        {/* Sunrise Animation Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-20 animate-pulse pointer-events-none"></div>
        
        {/* Glowing Sun Effect */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-gradient-to-br from-[#fff6d6] to-transparent blur-[80px] md:blur-[130px] pointer-events-none" 
          style={{ animation: 'sunrise-glow 10s ease-in-out infinite' }}
        ></div>

        {/* Left Side: Brand Identity */}
        <div className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start px-4 transition-all duration-1000 hover:scale-105 md:w-[45%]">
          <h1 className="bungee-shade-regular text-5xl md:text-8xl text-[#1c3311] drop-shadow-[0_4px_12px_rgba(28,51,17,0.15)] mb-4 tracking-tighter">
            CIGAR BREVAS
          </h1>
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="h-[1px] w-12 bg-[#c79941]"></div>
            <div className="flex items-center space-x-2.5">
              <StaticImage
                src="../../assets/images/page2/logo-cigar-brevas.webp"
                alt="Logo Cigar Brevas"
                className="w-16 md:w-24 h-auto object-contain rounded-md border border-[#c79941]/10 bg-white/5 p-1 shadow-sm"
                placeholder="blurred"
              />
              <p className="uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#D06F1F] font-semibold text-sm md:text-lg select-none">
                The Art of Colombian Tobacco
              </p>
            </div>
            <div className="h-[1px] w-12 bg-[#c79941]"></div>
          </div>
        </div>

        {/* Decorative Magazine-style Overlay (Desktop Only) */}
        <div className="absolute bottom-10 left-10 border-l-2 border-[#c79941] pl-4 hidden md:block z-10">
          <span className="block text-[#c79941] font-serif italic text-xl">Premium Selection</span>
          <span className="block text-white font-bold text-xs tracking-widest uppercase">Issue No. 01 — 2026</span>
        </div>

        {/* Right Side: Information Panel with Glassmorphism & Floating Animation */}
        <aside 
          className="relative z-10 mt-10 md:mt-0 w-full max-w-md px-6 py-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex flex-col items-center justify-center text-center transform transition-all duration-700 hover:shadow-emerald-950/40 hover:border-emerald-300/30 md:w-[45%]"
          style={{ animation: 'card-float 6s ease-in-out infinite' }}
        >
          <div className="relative w-full">
            <h2 className="font-name-vitolas uppercase tracking-wider text-2xl md:text-3xl text-[#c79941] mb-6 select-none">
              Tradición artesanal
            </h2>
            
            <p className="sulphur-point-regular text-[#E7AD7C] text-base md:text-lg leading-relaxed mb-6 select-none">
              Cigar Brevas: tabaco colombiano hecho a mano, suave y auténtico, con tradición familiar en cada elaboración.
            </p>
            
            <div className="space-y-4 w-full border-t border-white/10 pt-5">
              <span className="block text-[#DD8F4F]/90 text-sm md:text-base sulphur-point-regular leading-relaxed select-none">
                🍃 Hoja de tabaco seleccionada tanto nacional como importada.
              </span>
              
              <span className="block text-[#D06F1F]/95 text-sm md:text-base sulphur-point-bold leading-relaxed select-none mt-2">
                Fabricante y Distribuidor de Cigarros Gamos desde
                <span className="inline-block text-4xl md:text-5xl font-name-vitolas font-bold text-[#c79941] mt-3 px-6 py-2 rounded-xl bg-[#1c3311]/90 border border-[#c79941]/30 tracking-widest transition-all duration-300 hover:scale-105 hover:bg-[#1c3311] hover:border-[#c79941] hover:text-white drop-shadow-[0_4px_10px_rgba(28,51,17,0.3)]">
                  1974
                </span>
              </span>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Banner;