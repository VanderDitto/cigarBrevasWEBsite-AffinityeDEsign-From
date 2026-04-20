import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import  Btn_select  from "../components/Btn-y&n"

import Seo from "../components/seo"


const IndexPage = () => (

  <main className="bg-main  relative left-0 top-0 w-[7] h-dvh">
  <div class="left"></div>
  <div class="right"></div>

  <section className="z-10 text-bungeespice text-fluid w-full  h-dvh flex flex-col absolute left-0 top-0">

  {/* Primer div con grid responsivo */}
  <div className="grid place-items-center w-full px-4 sm:px-8 md:px-16 lg:px-24">
    <span className="mr-[4rem] mt-[4rem] w-full text-fluid">Você tem </span>
  </div>

  <div className="w-dvh ml-[22rem] mt-[2rem]  mx-auto text-[clamp(1rem,2vw+0.5rem,2.5rem)]">
    IDADE
  </div>

  <div className="relative w-[85%] h-dvh flex items-center justify-center">
    <div className="mt-[4svh] ml-[12rem]">SUFICIENTE</div>
  </div>


  <div className="ml-[27svw] mt-[1rem] mb-[2rem] mx-auto text-fluid">
    PARA FUMAR?
    <div className="flex justify-end-safe items-stretch float-right">
      <StaticImage src="../assets/images/page1/icon-alarm.webp" alt="Imagen Icon Alarm" className="aspect-square  w-33  col-start-4 row-start-3  right-0 object-cover  pointer-events-none block  user-select-none"
    layout="constrained" placeholder = "dominantColor" onContextMenu={(e) => e.preventDefault()}
  />
    </div>
    </div>

</section>

<section className="w-full h-dvh flex items-center justify-center absolute left-0 top-0">

<section className=" grid grid-cols-4 w-full h-dvh grid-rows-3 gap-[3svw] gap-y-0.5  p-0">
  {/* Fila 1 */}
  <div className="bg-black/1"></div>   {/* Columna 1 */}
  <div className="bg-black/1"></div>   {/* Columna 2 */}

  <StaticImage src="../assets/images/page1/perilla-cigar-Brevas.webp" alt="Imagen perillas bitola N°5" className="aspect-square  w-full h-full object-cover  pointer-events-none user-select-none"
  layout="constrained" placeholder = "dominantColor" onContextMenu={(e) => e.preventDefault()}
  /> {/* Columna 3 */}



<div className="bg-black/50">


<section className="w-full gap-4 h-full flex items-center  justify-center">
<Btn_select />
<span className="text-white text-xl  font-bold">Co </span>
<StaticImage src="../assets/images/page1/colombia.webp" alt="Imagen Bandera Colombia" className="inline-block align-middle w-9 h-9 mr-2 rounded-full object-cover pointer-events-none user-select-none"
  layout="constrained"  placeholder = "dominantColor" onContextMenu={(e) => e.preventDefault()}
/>


  <span className="text-white text-xl font-bold">Br</span>
<StaticImage src="../assets/images/page1/Brazil.webp" alt="Imagen bandera de Brazil" className="inline-block align-middle w-9 h-9 mr-2 rounded-full object-cover pointer-events-none user-select-none"
  layout="constrained" placeholder = "dominantColor" onContextMenu={(e) => e.preventDefault()}
  />

<span className="text-white text-xl font-bold">USA</span>
  <StaticImage src="../assets/images/page1/usa.webp" alt="Imagen Bandera" className="inline-block align-middle w-9 h-9 mr-2 rounded-full object-cover pointer-events-none user-select-none"
  layout="constrained" placeholder = "dominantColor" onContextMenu={(e) => e.preventDefault()}
  />



</section>

</div>  {/* Columna 4 */}



  {/* Fila 2 */}
 <StaticImage src="../assets/images/page1/fachada-cigar-Brevas.webp" alt="Imagen fachada de Cigar Brevas" className="aspect-square  w-1/2 h-1/2 object-cover  pointer-events-none user-select-none"
  layout="constrained" placeholder = "dominantColor" onContextMenu={(e) => e.preventDefault()}
  />

  <StaticImage src="../assets/images/page1/abue-rosa-cigar-Brevas.webp" alt="Imagen abuela torcedora trabajadora" className="aspect-square  w-full h-full object-cover  pointer-events-none user-select-none"
  layout="constrained" placeholder = "dominantColor" onContextMenu={(e) => e.preventDefault()}
  />

  <div className="bg-black/1"></div>

<div className="flex justify-end-safe items-stretch">
  <StaticImage src="../assets/images/page1/solo-cortadora-Cigar-Brevas.webp" alt="Imagen Cortadora de Cigarro Brevas" className=" w-3/4 h-3/4 object-cover  pointer-events-none right-0    user-select-none"
  layout="constrained" placeholder = "dominantColor" onContextMenu={(e) => e.preventDefault()}
  />
</div>

  {/* Fila 3 */}
  <div className="flex justify-start bottom-0 items-stretch">
  <StaticImage src="../assets/images/page1/rollero-cortadora-cigar-brevas.webp" alt="Imagen Maquina de Rollero y cortadora" className=" w-3/4 h-3/4 object-cover  pointer-events-none  user-select-none"
  layout="constrained" placeholder = "dominantColor" onContextMenu={(e) => e.preventDefault()}
  />
</div>

  <div className="bg-black/1"></div>
  <div className="bg-black/1"></div>


<div className="flex justify-end-safe items-stretch">
  <StaticImage src="../assets/images/page1/cigar-Brevas-tabaco-Flor.webp" alt="Imagen tabaco flor" className=" w-33  col-start-4 row-start-3  right-0 object-cover   pointer-events-none  user-select-none "
    layout="constrained" placeholder = "dominantColor" onContextMenu={(e) => e.preventDefault()}
  />
</div>

</section>

</section>

<section className="w-full h-dvh flex  items-center justify-center absolute left-0 top-0">

</section>


  </main>


)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () =>
  <>

    <title>Puros Brevas&reg;</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

</>
export default IndexPage
