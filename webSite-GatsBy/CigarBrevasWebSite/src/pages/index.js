import React, { useEffect } from "react";
import { Link } from "gatsby";


import Footer from "../components/footer/Footer";
import { StaticImage } from "gatsby-plugin-image"
import Btn_select from "../components/Btn-y&n";

import Banner from "../components/banner/banner";

import Seo from "../components/seo";
import Heropage_features from "../components/hero-Page/heropage";
import Welcome from "../components/welccome/welcome";

import Showproduct from "../components/showProduct/Showproduct";
import CigarVitolar from "../components/cigarVitola/cigarvitola";

import PrivacyBanner from "../components/privacyBanner/bannerPrivacy";
import react from "react";

import sharePage from "../pages/sharePage/sharePage";
import LanguageSelector from "../components/selector-idiomas/LanguageSelector"
import { useTranslation } from "react-i18next"; 




const IndexPage = () => {


 const {t} = useTranslation("translation");  // ✅ usar el hook para obtener la función de traducción

 useEffect(() => {

    const age_approve = localStorage.getItem("edad_Accepted") === "true";

    const _visit_cigarBrevas = localStorage.getItem("visited_cigarBbrevas.com") === "true";


    if (typeof document !== "undefined") {

      const canScroll = age_approve && _visit_cigarBrevas;
      document.body.style.overflow = canScroll ? "auto" : "hidden";

          console.log("Accediendo al objeto document para activar el scroll:", canScroll);


        if(canScroll){

          document.getElementById("btn-action").style.opacity = "0.5";
          console.log("El scroll está habilitado. Puedes navegar por el sitio.");
      
        }


    }else{

      console.log(" No se puede acceder al objeto document en este entorno.");
      alert("No se puede acceder al objeto document en este entorno. Asegúrate de que este código se ejecute en un entorno compatible con el DOM, como un navegador web.");
    }


// document.querySelectorAll('*').forEach(el => {
//   const hasScroll =
//     el.scrollHeight > el.clientHeight ||
//     el.scrollWidth > el.clientWidth;

//   if (hasScroll) {
//     console.log(el);
//   }
// });


        }, []);

  return (
  <>

<PrivacyBanner />

    <main className="bg-main border border-[#007F0D]  relative left-0 top-0  h-dvh overflow-hidden">
      <div class="left"> </div>
      <div class="right"> </div>



      <section className="z-10 text-bungeespice text-fluid w-full  h-dvh flex flex-col absolute left-0 top-0">
        {/* Primer div con grid responsivo */}
        <div className="grid place-items-center w-full px-4 sm:px-8 md:px-16 lg:px-24">



          <span className="mr-[4rem] mt-[4rem] w-full bungee-Tint-regular"> {t("tienes")} </span>
        </div>



        <div className="w-dvh ml-[22rem] mt-[2rem] bungee-Tint-regular  mx-auto text-[clamp(1rem,2vw+0.5rem,2.5rem)]">
          IDADE
        </div>

        <span className = "absolute top-[10.5rem] z-11 left-8  ">  
  

</span>

    
<svg viewBox="0 0 400 150" width="400" height="150">
  <text x="150" y="80" font-size="40" font-family="Fira Code" fill="black">
    constancia
  </text>
  <ellipse cx="200" cy="75" rx="250" ry="50" 
           stroke="red" fill="none" stroke-width="3"
           class="anim-ellipse" />
</svg>





        <div className="relative w-[85%] h-dvh flex items-center justify-center">
          <div className="mt-[4svh] ml-[12rem] bungee-Tint-regular-large ">SUFICIENTE</div>
        </div>



        <div className="ml-[27svw] bungee-Tint-regular mt-[1rem] mb-[2rem] mx-auto text-fluid">
          PARA FUMAR?
          <div className="flex justify-end-safe  items-stretch float-right">
            <StaticImage
              src="../assets/images/page1/icon-alarm.webp"
              alt="Imagen Icon Alarm"
              className="aspect-square  w-33  col-start-4 row-start-3  right-0 object-cover  pointer-events-none block  user-select-none"
              layout="constrained"
              placeholder="dominantColor"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </section>

      <section className="w-full h-dvh flex items-center justify-center absolute left-0 top-0">
        <section className=" grid grid-cols-4 w-full h-dvh grid-rows-3 gap-[3svw] gap-y-0.5  p-0">
          {/* Fila 1 */}
          <div className="bg-black/1"></div> {/* Columna 1 */}
          <div className="bg-black/1"></div> {/* Columna 2 */}
          <StaticImage
            src="../assets/images/page1/perilla-cigar-Brevas.webp"
            alt="Imagen perillas bitola N°5"
            className="aspect-square  w-full h-full object-cover  pointer-events-none user-select-none"
            layout="constrained"
            placeholder="dominantColor"
            onContextMenu={(e) => e.preventDefault()}
          />{" "}
          {/* Columna 3 */}
          <div className="bg-black/20 w-full wrap-normal">
            {" "}
            {/* Columna 4 */}

            <span className = " z-40 relative ">  
                  <LanguageSelector className = "z-88 "/>

              <Btn_select  classsName = " z-8"/>
            </span>
    

            </div>{" "}
            {/* Columna 4 */}
            {/* Fila 2 */}
          <StaticImage
            src="../assets/images/page1/fachada-cigar-Brevas.webp"
            alt="Imagen fachada de Cigar Brevas"
            className="aspect-square  w-1/2 h-1/2 object-cover  pointer-events-none user-select-none"
            layout="constrained"
            placeholder="dominantColor"
            onContextMenu={(e) => e.preventDefault()}
          />
          <StaticImage
            src="../assets/images/page1/abue-rosa-cigar-Brevas.webp"
            alt="Imagen abuela torcedora trabajadora"
            className="aspect-square  w-full h-full object-cover  pointer-events-none user-select-none"
            layout="constrained"
            placeholder="dominantColor"
            onContextMenu={(e) => e.preventDefault()}
          />
          <div className="bg-black/1"></div>

          <div className="flex justify-end-safe items-stretch">
            <StaticImage
              src="../assets/images/page1/solo-cortadora-Cigar-Brevas.webp"
              alt="Imagen Cortadora de Cigarro Brevas"
              className=" w-3/4 h-3/4 object-cover  pointer-events-none right-0    user-select-none"
              layout="constrained"
              placeholder="dominantColor"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          {/* Fila 3 */}
          <div className="flex justify-start bottom-0 items-stretch">
            <StaticImage
              src="../assets/images/page1/rollero-cortadora-cigar-brevas.webp"
              alt="Imagen Maquina de Rollero y cortadora"
              className=" w-3/4 h-3/4 object-cover  pointer-events-none  user-select-none"
              layout="constrained"
              placeholder="dominantColor"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div className="bg-black/1"></div>
          <div className="bg-black/1"></div>
          <div className="flex justify-end-safe items-stretch">
            <StaticImage
              src="../assets/images/page1/cigar-Brevas-tabaco-Flor.webp"
              alt="Imagen tabaco flor"
              className=" w-33  h-full col-start-4 row-start-3  right-0 object-cover   pointer-events-none  user-select-none "
              layout="constrained"
              placeholder="dominantColor"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </section>
      </section>

      <section className=" w-full h-dvh grid grid-cols-4 grid-rows-3 absolute left-0 top-0 ">
        <div className=" chevron transform rotation-190 w-full">
          <div>
            <span className="firstPage-word-font text-fluid-mini text-center w-full  vertical-text text-[funnel]">
              tiempo
            </span>
            <span className="mr-22 mt-12 text-[2px] firstPage-word-font text-fluid-mini text-center w-full  vertical-text text-[funnel]">
              jubilo
            </span>
          </div>
        </div>


<svg viewBox="0 0 400 100" class="w-full h-24 mx-auto">
  <text x="0" y="60" class="text-[3.2em] letter-spacing-[2px]  stroke-[#dfc114] fill-none" stroke-width="1">
    Cigarros Brevas
    <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="2s" fill="freeze" />
  </text>
</svg>


        <div className="chevron w-full">
          <div>
            <span className="text-[funnel] firstPage-word-font text-center w-full">Sistematico</span>
          </div>
        </div>

        <div class=" firstPage-word-font text-center w-full  vertical-text  text-white">Pasión</div>

        <div className="chevron w-full">
          <div>
            <span className="firstPage-word-font left-[-9em] vertical-text  relative  bottom-0.1 text-left w-full">equipo</span>
          </div>
        </div>

        <div className="chevron w-full">
          <div>
            <span className="firstPage-word-font text-fluid-mini text-center w-full text-gray-100">arte</span>
          </div>
        </div>

        <div className="chevron w-full">
          <div>
            <span className="firstPage-word-font text-[2px] text-fluid-mini text-center w-full">serenidad</span>
          </div>
        </div>

        <div class="flecha-completa firstPage-word-font text-center w-full  vertical-text text-[funnel] font-color[#000000] color-[white]">
          Constancia
        </div>

        <div className="chevron w-full">
          <div>
            <span className="firstPage-word-font text-white text-fluid-mini text-center w-full">
              Tecnica <br></br>
              "Cada hoja, una historia; cada puro, una obra"
            </span>
          </div>
        </div>

        <div className="chevron w-full firstPage-word-font block-0 bottom-0">
          <div>
            <span className="text-white  text-[2px] text-fluid-mini text-center w-full">Calidad</span>
          </div>
        </div>

        <div className="chevron w-full">
          <div>
            <span className="firstPage-word-font text-center w-full">satisfacción</span>
          </div>
        </div>

        <span class=" flecha-completa w-1/2 col-span-2 firstPage-word-font text-center ">Dedicación</span>
      </section>



      <section className="w-full h-14 firstPage-word-font bottom-0 absolute flex flex-row ">
        <span class=" text-[black] m-auto p-1.5 firstPage-word-font-bold text-center box-content">
          “Prohibida la venta a menores de 18 años. El consumo de tabaco es nocivo para la salud.”
        </span>
      </section>
    </main>

    <span className=" m-auto  bg-amber-400 max-w-full">
      <Banner />
    </span>

    <div className="h-screen">
      {/* otras secciones */}
      <Heropage_features />
      {/* otras secciones */}
    </div>

<div className = "mt-15 h-[calc(content + 12rem)] w-[78vw] relative top-0 left-0  z-1  m-auto h-full bg-white flex flex-col items-center justify-center  ">
        <Welcome />
  </div>



    <div className = "h-screen relative  left-0 top-3  m-17 mb-5 ">
      <CigarVitolar />

    </div>

<div className = "h-[20px] pt-2 top-[15px] relative w-full m-auto mt-16"></div>
      <div className="h-screen w-full relative flex flex-col justify-center   left-0 top-43  m-auto ">
        <Showproduct  className = "absolute min-h-screen  block-2 "/>
      </div>

<div className = "h-[22px]  relative w-full m-auto top-[10]">f</div>
        <div className=" h-[content] bg-[#FFA800] top-3 ">
        <Footer />
        </div>



  </>
);

};
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () =>

  {
    return (
  <>
    <title>Puros Brevas&reg;</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  </>
);

  }
export default IndexPage;