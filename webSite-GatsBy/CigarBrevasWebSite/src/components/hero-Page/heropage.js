import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
const Heropage_features = () => {
  return (
    <>
<div class="grid grid-cols-6 grid-rows-5 gap-4  h-screen bg-[url('../../assets/images/page2/Background-Image-cigar-Brevas.webp')] bg-contain bg-no-repeat bg-center">
        <div class="col-span-2 col-start-2 row-start-2">

           <StaticImage src="../../assets/images/page2/name-cigar-brevas.webp" alt="Imagen Maquina de Rollero y cortadora" className=" w-[100%- 20px] h-auto object-cover  pointer-events-none  user-select-none"
             layout="constrained" placeholder="dominantColor" onContextMenu={(e) => e.preventDefault()} />
        </div>

    <div class="col-start-6 row-start-2 z-77 text-center text-white text-[2px]">2
      {/* <div className="bg-[url('../../assets/images/page2/logo-cigar-brevas.webp')] bg-no-repeat bg-contain bg-center w-[49svh] h-aauto " */}
         {/* ></div> */}
    </div>

    <div class="col-span-2 row-span-2 col-start-5 row-start-3">

       <div className="w-full relative   right-0   text-center">
           <div className="p-6 bg-[#B55832] shadow absolute rounded">
            <h3 className="font-semibold text-xl text-white  mb-2">Beneficio</h3>
             <p className ="poiret-one-Festy text-[#B59A2E]" >
               El placer de una pausa: tradición colombiana que acompaña tu
               descanso.
             </p>
           </div>
         </div>


    </div>
</div>
    </>
    //</>
//       <section
//         id="features"
//         className="py-12 pl-7.5 w-full h-screen bg-[url('../../assets/images/page2/Background-Image-cigar-Brevas.webp')] bg-contain bg-no-repeat bg-center relative flex  justify-between items-center flex-row z-50"
//       >
// <div className = " w-1/2 h-auto flex flex-col-1 justify-center items-center gap-1 right-0 flex-row-reverse"> 
//         <div
//           className="bg-[url('../../assets/images/page2/logo-cigar-brevas.webp')] bg-no-repeat bg-contain bg-center w-[49svh] h-aauto "
//         ></div>

        
//         <div className="max-w-5xl relative  bottom-0  right-0 size-1/2  text-center">
//           <div className="p-6 bg-[#a0875b7e] shadow absolute rounded">
//             <h3 className="font-semibold text-xl text-white  mb-2">Beneficio</h3>
//             <p className ="poiret-one-Festy text-[#B59A2E]" >
//               El placer de una pausa: tradición colombiana que acompaña tu
//               descanso.
//             </p>
//           </div>
//         </div>

// </div>

//         <div className="flex justify-start relative  top-[1rem] items-stretch">
//           <StaticImage src="../../assets/images/page2/name-cigar-brevas.webp" alt="Imagen Maquina de Rollero y cortadora" className=" w-[20vw] h-auto object-cover  pointer-events-none  user-select-none"
//             layout="constrained" placeholder="dominantColor" onContextMenu={(e) => e.preventDefault()} />
//         </div>


//       </section>

    
  );
};

export default Heropage_features;
