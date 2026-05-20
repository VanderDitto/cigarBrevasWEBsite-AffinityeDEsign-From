import  React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import LanguageSelector from '../selector-idiomas/LanguageSelector';
import { useTranslation } from "react-i18next";  // ✅ importar el hook



const Welcome  = () =>
{

   
const {t} = useTranslation("translation");  // ✅ usar el hook para obtener la función de traducción

return <>
<section id='section-dir' className=" border border-[#191fe3]  relative left-0 top-0  h-[110%]  ">
    <div id = "left">

    </div>
    <div id = "right">

    </div>
{/* /*
<section className = "flex  text-center text-fluid w-full  h-dvh flex-wrap  flex-col absolute left-0 top-0 ">
<h2 className = "text-[clamp(4rem , 45dvh, 6rem) font-uyred font-[bungee-shade] bungee-shade-regular">Welcome</h2>
<p className = "text-[2rem] color-black poiret-strong-large w-screen absolute text-center top-[8rem] right-1/2 vertical-text">Hand Made</p>

<div className="border flex justify-center relative mt-12  ">
        <StaticImage src="../../assets/images/welcome/cigar-brevas-torpedo.webp" alt="Imagen cigar brevas Torpedo" className="object-cover  pointer-events-none  user-select-none"
            layout="fixed" placeholder="dominantColor" onContextMenu={(e) => e.preventDefault()} />
        </div>
</section>
*/ }


<section className = "flex flex-col items-center w-full flex-wrap  absolute left-0 top-0  h-auto  text-center">
  <h2 className=" bungee-shade-regular  text-[3.2em] ">
                    {t("wellcome")}
  </h2>


<span className = "grow content-center" >
  <p class = "text-black vertical-text  " className= "text-black vertical-text mt-8  text-[1.8em]">
  {t("hecho")}
  </p>
</span>

  <div className="border-2 border-[#3a8744] relative max-w-[22rem] ">
    <StaticImage
      src="../../assets/images/welcome/cigar-brevas-torpedo.webp"
      alt="Imagen cigar brevas Torpedo"
      className="object-cover pointer-events-none select-none "
      placeholder="dominantColor"
      onContextMenu={(e) => e.preventDefault()}
    />
  </div>



<p class = "caption-label-img"  className="mt-6 caption-label-img text-white">
    fermentacion y  paciencia del maestro Torcedor
</p>


</section>

{/*
<span className= '  flex flex-col-1 absolute  w-full left-100 right-0 '>

<div className="border-2 border-[#91A559]  left-[2rem] top-[2rem] relative w-[34vw] sm:min-w[45vw] ">
    <StaticImage
      src="../../assets/images/welcome/cigar-vitolas-brevas.webp"
      alt="Imagen vitolas brevas"
      className="object-cover pointer-events-none select-none "
      placeholder="dominantColor"
      onContextMenu={(e) => e.preventDefault()}
    />
</div>

<span className ="  absolute  top-1/2   m-auto   text-center w-2xs   content-between place-content-baseline ">
<aside>
<p className='max-w-prose  leading-relaxed text-[poiret] font-semibold font-[funnel] text-funnel-welcome  '> Cada hoja, cada capa, cada detalle refleja el legado de generaciones dedicadas al tabaco, donde la calidad no es una promesa, sino una herencia.</p>
</aside>
</span>

</span>
*/}

<span className='absolute m-[2rem]'>
     <div className="text-white  caption-label-img w-[10vw] sm:min-w-[19vw]">
      <StaticImage
        src="../../assets/images/welcome/cigar-moldes-brevas.webp"
        alt="Imagen vitolas brevas"
        className="object-cover pointer-events-none  select-none"
        placeholder="dominantColor"
        onContextMenu={(e) => e.preventDefault()}
      />
      moldes
    </div>
</span>

<span className='absolute'>

<section className="grid grid-cols-2 w-full min-h-screen">
  {/* Mitad izquierda vacía o para otro contenido */}
  <div>

  </div>

  {/* Mitad derecha: imagen + texto */}
  <div className="flex flex-col text-white   items-center relative top-[3vh] gap-8 px-9 mt-[3rem]" >
    
    <div className=" w-[17vw]  sm:min-w-[20vw] font-[sans] caption-label-img relative left-[7vw]">
      <StaticImage
        src="../../assets/images/welcome/cigar-vitolas-brevas.webp"
        alt="Imagen vitolas brevas"
        className="object-cover pointer-events-none select-none  font-light font-[sans]  caption-label-img "
        placeholder="dominantColor"
        onContextMenu={(e) => e.preventDefault()}
      />
    vitolas  
    </div>
    <span>
        
    </span>


    <span className = 'relative flex flex-col text-center justify-center items-center left-[43vh] '>
    <aside className="text-center  ">
      <p className="max-w-prose  w-[33%] text-justify sm:text-[2rem] m-12  leading-relaxed font-[sans] text-funnel-descripcion ">
        Cada hoja, cada capa, cada detalle refleja el legado de generaciones dedicadas al tabaco,
        donde la calidad no es una promesa, sino una herencia.
      </p>
    </aside>
    </span>

  </div>
</section>
</span>

</section>





</>;
}

export default  Welcome;