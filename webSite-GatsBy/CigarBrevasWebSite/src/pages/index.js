import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Seo from "../components/seo"


const IndexPage = () => (

  <main className="bg-main  relative left-0 top-0 w-[85%] h-dvh">
  <div class="left"></div>
  <div class="right"></div>

      <section className="text-bungeespice text-fluid w-full  h-dvh flex flex-col absolute left-0 top-0">

  {/* Primer div con grid responsivo */}
  <div className="grid place-items-center w-full px-4 sm:px-8 md:px-16 lg:px-24">
    <span className="mr-[31rem] mt-[4rem]  text-fluid">Você tem </span>
  </div>

  <div className="w-dvh ml-[22rem] mt-[2rem]  mx-auto text-[clamp(1rem,2vw+0.5rem,2.5rem)]">
    IDADE
  </div>

  <div className="relative w-dvh h-dvh flex items-center justify-center">
    <div className="mt-[4svh]">SUFICIENTE</div>
  </div>

  <div className="ml-[27svw] mt-[1rem] mb-[2rem] mx-auto text-fluid">
    PARA FUMAR?
  </div>
</section>

<section className="w-full h-dvh flex items-center justify-center absolute left-0 top-0">

<section className="grid grid-cols-4 w-full h-dvh grid-rows-3 gap-[45px] p-4">
  {/* Fila 1 */}
  <div className="bg-black/50"></div>   {/* Columna 1 */}
  <div className="bg-black/50"></div>   {/* Columna 2 */}

  <StaticImage src="../images/page1/perilla-cigar-Brevas.webp" alt="Imagen perillas bitola N°5" className="w-full h-auto object-cover pointer-events-none user-select-none"
  layout="constrained" placeholder = "dominantColor" onContextMenu={(e) => e.preventDefault()}
  /> {/* Columna 3 */}
  <div className="bg-black/50"></div>   {/* Columna 4 */}

  {/* Fila 2 */}
  <div className="bg-black/50"></div>
  <div className="bg-black/50"></div>
  <div className="bg-black/50"></div>
  <div className="bg-black/50"></div>

  {/* Fila 3 */}
  <div className="bg-black/50"></div>
  <div className="bg-black/50"></div>
  <div className="bg-black/50"></div>
  <div className="bg-black/50"></div>
</section>

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
    <meta name="description" content="Cigarros Brevas Web Page" />


</>
export default IndexPage
