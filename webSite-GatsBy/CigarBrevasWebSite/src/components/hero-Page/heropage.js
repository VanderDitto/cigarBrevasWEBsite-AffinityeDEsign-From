import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
const Heropage_features = () => {
  return (
    <>
      <section
        id="features"
        className="py-12 pl-7.5 w-full h-screen bg-[url('../../assets/images/page2/Background-Image-cigar-Brevas.webp')] bg-cover bg-center relative flex justify-between items-center z-50"
      >
        <div
          className="bg-[url('../../assets/images/page2/logo-cigar-brevas.webp')] bg-no-repeat bg-contain bg-center w-[49svh] h-40 absolute bottom-12"
        ></div>

        <div className="flex justify-start relative  bottom-[30svh] items-stretch">
          <StaticImage src="../../assets/images/page2/name-cigar-brevas.webp" alt="Imagen Maquina de Rollero y cortadora" className=" w-3/4 h-3/4 object-cover  pointer-events-none  user-select-none"
            layout="constrained" placeholder="dominantColor" onContextMenu={(e) => e.preventDefault()} />
        </div>


        <div className="max-w-5xl relative  bottom-0  right-0 size-1/2  text-center">
          <div className="p-6 bg-[#a0875b7e] shadow absolute rounded">
            <h3 className="font-semibold text-xl text-white  mb-2">Beneficio</h3>
            <p className ="poiret-one-Festy text-[#B59A2E]" >
              El placer de una pausa: tradición colombiana que acompaña tu
              descanso.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Heropage_features;
