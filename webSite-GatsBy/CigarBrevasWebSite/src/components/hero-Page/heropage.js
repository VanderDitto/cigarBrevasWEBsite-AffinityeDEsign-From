import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

const Heropage_features = () => {
  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 bg-[url('../../assets/images/page2/Background-Image-cigar-Brevas.webp')] bg-cover md:bg-contain bg-no-repeat bg-center overflow-hidden">
        {/* Soft background dark overlay to increase contrast on large monitors */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none"></div>

        {/* Frosted glass container to bundle the elements beautifully */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl px-8 py-10 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl space-y-8 mx-4 transform transition-all duration-1000 hover:shadow-amber-900/10 hover:border-white/20">
          
          {/* Name Image - centered and scaled */}
          <div className="w-full max-w-md select-none transform transition-all duration-700 hover:scale-105">
            <StaticImage 
              src="../../assets/images/page2/name-cigar-brevas.webp" 
              alt="Name Cigar Brevas" 
              className="w-full h-auto object-contain pointer-events-none user-select-none select-none"
              layout="constrained" 
              width={1000}
              quality={95}
              placeholder="dominantColor" 
              onContextMenu={(e) => e.preventDefault()} 
            />
          </div>

          {/* Centered Beneficio Panel (Larger fonts) */}
          <div className="w-full border-t border-white/20 pt-6">
            <h3 className="font-name-vitolas uppercase tracking-wider text-2xl md:text-3xl text-[#c79941] mb-3 select-none">
              Beneficio
            </h3>
            <p className="poiret-one-Festy text-white text-2xl md:text-3xl leading-relaxed select-none font-semibold px-4">
              El placer de una pausa: tradición colombiana que acompaña tu descanso.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Heropage_features;
