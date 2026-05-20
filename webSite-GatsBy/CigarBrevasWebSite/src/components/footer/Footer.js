import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#FFA800] w-screen h-[43%]  mt-6  border-t-2 border-[#bf5512] relative  top-50  flex flex-col items-center justify-center">




    <div className= " grid   grid-cols-[2fr_2fr_1fr_1fr]   m-auto gap-4 w-full border-2 border-red-900 ">
    <div className="flex flex-col items-center justify-center gap-2 m-4 ">
      <StaticImage
        src="../../static/footer/-logo-cigar-brevas.png"
        alt="Logo Cigar Breva"
        className="w-[20rem] h-auto object-cover pointer-events-none select-none"
        placeholder="dominantColor"
        onContextMenu={(e) => e.preventDefault()}
      />
      </div>


       <div className="z-10 flex flex-col items-center justify-center gap-2 m-4 align-start">
      <StaticImage
        src="../../static/footer/-name-cigar-Brevas.webp"
        alt="Logo Cigar Breva"
        className="w-[35rem] h-auto object-cover pointer-events-none select-none"
        placeholder="dominantColor"
        onContextMenu={(e) => e.preventDefault()}
      />

      <p className="text-[17px] text-center text-white font-bold">
       Elaboracion a mano de hoja de tabaco
seleccionada tanto nacional como importada
      </p>
      
       <p className="text-[0.8rem] text-center text-white font-bold">
        “Prohibida la venta a menores de 18 años”
      </p>
        </div>
{/* // columna tres */}
<div className = "flex flex-col  items-center justify-center gap-2 mt-3 align-center">

            <div className="w-[4rem] bg-[#E5FDD3]  align-start border-radius-2xl"> 

                {/* // zone redes socials */}
                    <span className="  h-[content] m-3 ">
                    <StaticImage
                    src="../../static/footer/-logo-msn-telegram.webp"
                    alt="Logo Cigar Breva"
                    className="w-[2rem] h-auto object-cover pointer-events-none select-none m-2"
                    placeholder="dominantColor"
                    onContextMenu={(e) => e.preventDefault()}
                />
                
                    <StaticImage
                    src="../../static/footer/-logo-cigar-face.webp"
                    alt="Logo Cigar Breva"
                    className="w-[2rem] h-auto object-cover pointer-events-none select-none  m-2"
                    placeholder="dominantColor"
                    onContextMenu={(e) => e.preventDefault()}
                />

                  <StaticImage
                    src="../../static/footer/-logo-msn-whatup.webp"
                    alt="Logo Cigar Breva"
                    className="w-[2rem] h-auto object-cover pointer-events-none select-none  m-2"
                    placeholder="dominantColor"
                    onContextMenu={(e) => e.preventDefault()}
                />

                  <StaticImage
                    src="../../static/footer/-logo-insta-social.webp"
                    alt="Logo Cigar Breva"
                    className="w-[2rem] h-auto object-cover pointer-events-none select-none  m-2"
                    placeholder="dominantColor"
                    onContextMenu={(e) => e.preventDefault()}
                />
                    </span>
            </div>

            <span className="text-[12px] text-center text-white font-bold m-7 p-2">
                Cigar Brevas - Todos los derechos reservados © 2026
            </span>
</div>


            <div className=" text-shadow-2xs text-[1.1rem] grid grid-cols-2   items-center justify-center gap-2 ">
                <div className = " flex flex-col items-center justify-center gap-2 m-4 align-start">
                <p> Bienvenidos</p> 
                <p> Compras</p> 
                <p> Puros</p> 
                <p> Idioma</p>
                </div> 

                <div className = " flex flex-col items-center justify-center gap-2 m-4 align-start">

            
                <StaticImage
                        src="../../static/footer/-up-init-welcome.webp"
                        alt="Logo Cigar Breva"
                        className="w-[5rem] h-auto object-cover pointer-events-none select-none  m-2"
                        placeholder="dominantColor"
                        onContextMenu={(e) => e.preventDefault()}
                    />

                </div>

            </div>
</div>

      </footer>
    </>
  );
};

export default Footer;