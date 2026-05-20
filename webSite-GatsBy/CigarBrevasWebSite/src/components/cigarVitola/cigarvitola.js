import React, { useMemo, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./style.css";
import { Info_Vitola } from "./../../page-data/page-data";

const CigarVitolar = () => {
  
const  data = useMemo(() => ({ Info_Vitola }), []);

  let Show_Image1 = "";
  let Show_Image2 = "";

   Show_Image1 = data.FirstCardPhoto;
   Show_Image2 = data.SecondCardPhoto;

    // console.log(Show_Image1  ,    "pppppppppp"  );
    // console.log(Show_Image2 ,  "pppppppppp" );


  const [cardSelected, setCardSelected] = useState(null);
  const [hoveredCircle, setHoveredCircle] = useState(null);
  
  const handleInfo = (index) => {

//     // console.log(index);
    //  let evettarget = _event.target;
    //   console.log(evettarget  ,   " llllllllllllll");
//   // evettarget.classList.add("display-lapiz-amarillo");

    const selected = Info_Vitola[`Card${index}`];
    setCardSelected(selected);

    if (selected) {
      console.log(selected ,    "" , selected.Image_bitola);
                }
  };

  const lang = typeof window !== "undefined" ? localStorage.getItem("selectedLang") || "es" : "es";
  
  const textByLang =
    lang === "es"
      ? "text_es"
      : lang === "pt"
      ? "text_pt"
      : lang === "en"
      ? "text_en"
      : "text_es";


  return (

    // <section className=" w-[88vw] relative top-0 left-0   z-1  m-auto *:h-[content]
    //                     bg-[linear-gradient(45deg,#D5D1CD,#D1C8C0,#C2AB94,#BC9B7B,#BB9B7C,#C89C6F)] ">


<> 
 <section className = " bg-[url('../../static/cigar-vitola/fondo_2.jpg')] bg-cover  w-[88vw] relative top-[3rem] left-0   z-1  m-auto h-[content]" >



      <div className="w-[6.5rem] absolute h-[90vh] bg-[#ECCD00]  left-0  bottom-0 flex flex-col ">
      
        <div className="flex justify-start items-stretch">
          <StaticImage
            src="../../static/coquet/-La-B-cigar-brevas.webp"
            alt="Imagen b-insignia"
            className="w-3/4 h-3/4 object-cover pointer-events-none select-none m-[1rem]"
            placeholder="dominantColor"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

 <span className="relative m-[0.1] botton-0 left-0 bg-[#cab10d] justify-end flex flex-col  ">

  


        <span className = "w-[16vw]  h-[1/3] absolute left-0 bottom-0 top-full">
            <StaticImage
            src="../../static/coquet/-cigar-brevas-noni-torcedorA.webp"
            alt="Imagen cigar Brevas Ubiccacion"
            className="object-cover pointer-events-none select-none  m-[0.6rem]"
            placeholder="dominantColor"
            onContextMenu={(e) => e.preventDefault()}
          />
        </span>

        </span>

      </div>


        <div className=" flex flex-row w-[88%] bg-[#499b58] h-[10%]  absolute ">  </div>

         <span className="sulphur-point-bold relative text-[3em] z-20 left-[22vw]"> cigar type CUBAN </span>


        <div className=" flex flex-row w-[85%] bg-[#9B7F49] h-[8%] m-[3rem]  absolute z-[-1]">  </div>
        <span className = "w-[16vw]  absolute top-0 left-[10%]  h-[1/3]">
            <StaticImage
            src="../../static/coquet/-cigar-brevas-ubicacion.webp"
            alt="Imagen cigar Brevas Ubiccacion"
            className="object-cover pointer-events-none select-none  m-[1rem]"
            placeholder="dominantColor"
            onContextMenu={(e) => e.preventDefault()}
          />
        </span>

{/* // Galeria de imagenes  == post show INFooooo */}TODO:showINFO
        <div className = 'bg-[#D5D1CD]  w-[13rem] m-[1rem] absolute right-0 top-0  flex flex-col  justify-around div-con-borde' >

                      <span className = "w-[content]  relative mt-6  m-5">
                      <img
                      src = {cardSelected==null?Show_Image1:cardSelected.Image_bitola}
                      alt = "Image Show Cigar Brevas"             // {cardSelected==null?"":cardSelected.title}
                      className="object-cover pointer-events-none select-none pt-2  pl-2 pr-2"
                      placeholder="dominantColor"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </span>

                  <div className="w-[content] text-[1.1em]  sulphur-point-bold relative  text-center">
                    <p className = "text-bold p-3 text-[1.6em] bg-amber-300 leading-relaxed tracking-wide whitespace-pre-line"  >  
                      {/* Tradición – Maestría – Calidad  */}
                      { cardSelected==null?"":cardSelected[textByLang] }
                      </p>
                  </div>

                  <span className = "w-[content] relative mt-2 m-5">
                              <img
                              src= {cardSelected==null?Show_Image2:cardSelected.Image_cigar}
                              alt="Imagen cigar Brevas Ubiccacion"
                              className="object-cover pointer-events-none select-none  m-[0.1rem]"
                              placeholder="dominantColor"
                              onContextMenu={(e) => e.preventDefault()}
                            />
                          </span>

        </div>


<div  className="flex  gap-[2vw]  items-baseline space-evenly flex-wrap justify-center  ml-20 py-8 mt-12 w-[88vdw] ">

  {/* Bloque Numero-5 */}
  <div  className = " relative  w-40  h-40  cigar-vitola " >
    
    {/* Círculo amarillo */}
    <div  onMouseEnter={(event) => { handleInfo(1); setHoveredCircle(1); }}  onMouseLeave={() => setHoveredCircle(null)} className = "w-47 h-47 rounded-full border-2 border-[#9B7F49] bg-[#e6d8bc] flex items-center justify-center overflow-hidden">

       <StaticImage
                            src="../../static/cigar-vitola/-cigar-breva-numero5.webp"
                            alt="Imagen cigarro Aromado Brevas"
                            className=" object-contain pointer-events-none select-none   "
                            placeholder="dominantColor"
                            onContextMenu={(e) => e.preventDefault()}
                        />
    </div>
    {hoveredCircle === 1 && (
      <div className="absolute bottom-[-44px] left-[calc(50%-15px)] transform -translate-x-1/2 z-50 ">
        <img src="/cursor/refLapiz.png" alt="Ref Lapiz" className="h-65 w-auto" />
      </div>
    )}
    {/* Texto alrededor */}
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <defs>
        <path
          id="circlePath"
          d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
        />
      </defs>
      <text fill="black" fontSize="77%" fontWeight="bold">
        <textPath href="#circlePath" startOffset="10%" textAnchor="middle">
          numero 5
        </textPath>
      </text>
    </svg>
  </div>



  {/* Bloque Robusto */}
  <div className="relative w-[200px] h-[200px] cigar-vitola" onMouseEnter={() => { handleInfo(2); setHoveredCircle(2); }} onMouseLeave={() => setHoveredCircle(null)}>

    <div className="w-[200px] h-[200px] rounded-full  border-2 border-[#9B7F49] bg-[#e6d8bc] flex items-center justify-center overflow-hidden">
    
     <StaticImage
                            src="../../static/cigar-vitola/-cigar-breva-robusto.webp"
                            alt="Imagen cigarro breva robusto"
                            className=" object-contain pointer-events-none select-none m-[2px] "
                            placeholder="dominantColor"
                            onContextMenu={(e) => e.preventDefault()}
                        />

    </div>
    {hoveredCircle === 2 && (
      <div className="absolute bottom-[-19px] left-[calc(50%-25px)] transform -translate-x-1/2 z-50 ">
        <img src="/cursor/refLapiz.png" alt="Ref Lapiz" className="h-65 w-auto" />
      </div>
    )}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
      <defs>
        <path
          id="circlePath2"
          d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
        />
      </defs>
      <text fill="black" fontSize="70%" fontWeight="bold">
        <textPath href="#circlePath2" startOffset="8%" textAnchor="middle">
           Robusto
        </textPath>
      </text>
    </svg>
  </div>



  {/* Bloque Panetela */}
  <div className="relative w-[224px] h-[224px] cigar-vitola" onMouseEnter={() => { handleInfo(3); setHoveredCircle(3); }} onMouseLeave={() => setHoveredCircle(null)}>
    <div className="w-[224px] h-[224px] rounded-full border-2 border-[#9B7F49] bg-[#e6d8bc] flex items-center justify-center overflow-hidden">
                         <StaticImage
                            src="../../static/cigar-vitola/-cigar-breva-panetela.webp"
                            alt="Imagen cigarro breva panetela"
                            className=" object-contain pointer-events-none select-none w-[content] m-[2px]  "
                            placeholder="dominantColor"
                            onContextMenu={(e) => e.preventDefault()}
                        />
    </div>
    {hoveredCircle === 3 && (
      <div className="absolute bottom-[-25px] left-[calc(50%-40px)] transform -translate-x-1/2 z-50 ">
        <img src="/cursor/refLapiz.png" alt="Ref Lapiz" className="h-72 w-auto" />
      </div>
    )}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
      <defs>
        <path
          id="circlePath3"
          d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
        />
      </defs>
      <text fill="black" fontSize="10" fontWeight="bold">
        <textPath href="#circlePath3" startOffset="10%" textAnchor="middle">
          Panetela
        </textPath>
      </text>
    </svg>
  </div>

</div>



<div className="flex gap-17 justify-center flex-wrap  items-baseline py-5">
  {/* Bloque Purito */}
  <div className="relative w-[147px] h-[147px] cigar-vitola" onMouseEnter={() => { handleInfo(4); setHoveredCircle(4); }} onMouseLeave={() => setHoveredCircle(null)}>
    {/* Círculo amarillo */}

    <div className="w-[146px] h-[146px] rounded-full border-2 border-[#9B7F49] bg-[#e6d8bc] flex items-center justify-center overflow-hidden">
     

             <StaticImage
                             src="../../static/cigar-vitola/-cigar-breva-purito.webp"
                                alt=" imagen cigar brevas Purito"
                            className=" object-contain pointer-events-none select-none w-[content] m-[0.75]  pt-0.5 "
                            placeholder="dominantColor"
                            onContextMenu={(e) => e.preventDefault()}
                        />

</div>
    {hoveredCircle === 4 && (
      <div className="absolute bottom-[-10px] left-[calc(50%-20px)] transform -translate-x-1/2 z-50 ">
        <img src="/cursor/refLapiz.png" alt="Ref Lapiz" className="h-50 w-auto" />
      </div>
    )}
    {/* Texto alrededor */}
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <path
          id="circlePath"
          d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
        />
      </defs>
      <text fill="black" fontSize="10" fontWeight="bold">
        <textPath href="#circlePath" startOffset="10%" textAnchor="middle">
          Purito
        </textPath>
      </text>
    </svg>
  </div>


  {/* Bloque  Torpedo */}
  <div className="relative w-[230px] h-[230px] cigar-vitola" onMouseEnter={() => { handleInfo(5); setHoveredCircle(5); }} onMouseLeave={() => setHoveredCircle(null)}>
    <div className="w-[230px] h-[230px] rounded-full border-2 border-[#9B7F49] bg-[#e6d8bc] flex items-center justify-center overflow-hidden">
     
      <StaticImage
        src="../../static/cigar-vitola/-cigar-breva-torpedo.webp"
       className=" object-contain pointer-events-none select-none w-[content] m-[0.75]  pt-0.5 "
       alt="Imagen cigar brevas Torpedo"
                            placeholder="dominantColor"
                            onContextMenu={(e) => e.preventDefault()}
      />

    </div>
    {hoveredCircle === 5 && (
      <div className="absolute bottom-[-14px] left-[calc(50%-38px)] transform -translate-x-1/2 z-50 ">
        <img src="/cursor/refLapiz.png" alt="Ref Lapiz" className="h-75 w-auto" />
      </div>
    )}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        <path
          id="circlePath2"
          d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
        />
      </defs>
      <text fill="black" fontSize="10" fontWeight="bold">
        <textPath href="#circlePath2" startOffset="10%" textAnchor="middle">
          Torpedo
        </textPath>
      </text>
    </svg>
  </div>


  {/* Bloque Churchill */}
  <div className="relative w-[295px] h-[295px] cigar-vitola" onMouseEnter={() => { handleInfo(6); setHoveredCircle(6); }} onMouseLeave={() => setHoveredCircle(null)}>
    <div className="w-[290px] h-[290px] rounded-full border-2 border-[#9B7F49]  bg-[#e6d8bc] flex items-center justify-center overflow-hidden">
      <StaticImage
        src="../../static/cigar-vitola/-cigar-brevas-churchill.webp"
        alt=" Image Churchill"
        className=" object-contain pointer-events-none select-none h-[286px] m-[0.75]  pt-0.5 "
            placeholder="dominantColor"
                onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    {hoveredCircle === 6 && (
      <div className="absolute bottom-[-14px] left-[calc(50%-42px)] transform -translate-x-1/2 z-50 ">
        <img src="/cursor/refLapiz.png" alt="Ref Lapiz" className="h-78 w-auto" />
      </div>
    )}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
      <defs>
        <path
          id="circlePath3"
          d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
        />
      </defs>
      <text fill="black" fontSize="10" fontWeight="bold">
        <textPath href="#circlePath3" startOffset="10%" textAnchor="middle">
          Churchill
        </textPath>
      </text>
    </svg>
  </div>
  


  {/* Bloque Mini */}
  <div className="relative w-[140px] h-[133px] cigar-vitola" onMouseEnter={() => { handleInfo(7); setHoveredCircle(7); }} onMouseLeave={() => setHoveredCircle(null)}>
    <div className="w-[134px] h-[134px]  not-last:rounded-full  border-2 border-[#9B7F49] bg-[#e6d8bc] flex items-center justify-center overflow-hidden">
      <StaticImage
        src="../../static/cigar-vitola/-cigar-brevas-mini.webp"
        alt="Imagen Breva Mini"
        className="object-contain w-[content] h-[124px]    pointer-events-none select-none  m-[0.75]  pt-0.5 "
      />

    </div>
    {hoveredCircle === 7 && (
      <div className="absolute bottom-[-19px] left-[calc(50%-24px)] transform -translate-x-1/2 z-50 ">
        <img src="/cursor/refLapiz.png" alt="Ref Lapiz" className="h-67 w-auto" />
      </div>
    )}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
      <defs>
        <path
          id="circlePath3"
          d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
        />
      </defs>
      <text fill="black" fontSize="10" fontWeight="bold">
        <textPath href="#circlePath3" startOffset="10%" textAnchor="middle">
          Breva Mini
        </textPath>
      </text>
    </svg>
  </div>


{/*aromado  Brevas   */}
     <div className=" relative w-[45px] h-[200px] display-none ">
        <div className="w-[45px] h-[200px] square-full border-2 border-[#9B7F49] bg-[#e6d8bc] flex items-center justify-center overflow-hidden">

                <StaticImage
                            src="../../static/cigar-vitola/-cigar-vitola-aromado-brevas.webp"
                            alt="Imagen cigarro Aromado Brevas"
                            className= " object-contain pointer-events-none select-none w-[content] pt-0.5  "
                            placeholder="dominantColor"
                            onContextMenu={(e) => e.preventDefault()}
                        />
    </div>
   <span className=" text-[#311615] right-[-19px] 
    font-bold text-[14px] absolute top-[-26px] 
     ">Aromados</span>  
  </div>


</div>


    </section>
</>

);
};

export default CigarVitolar;