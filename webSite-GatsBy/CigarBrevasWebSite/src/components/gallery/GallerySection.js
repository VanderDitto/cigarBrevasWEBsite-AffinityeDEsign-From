import React, { useState, useEffect } from 'react';

import { StaticImage } from "gatsby-plugin-image";

const GallerySection = () => {
    const images = [
        "/galeria-temp/-galery-cigar-brevas-1.webp",
        "/galeria-temp/-galery-cigar-brevas-2.webp",
        "/galeria-temp/-galery-cigar-brevas-3.webp",
        "/galeria-temp/-galery-cigar-brevas-4.webp",
        "/galeria-temp/-galery-cigar-brevas-5.webp",
        "/galeria-temp/-galery-cigar-brevas-6.webp",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
        }, 2100);
        return () => clearInterval(interval);
    }, [images.length]);

    // Obtener las dos imágenes actuales para mostrar
    const firstImage = images[currentIndex];
    const secondImage = images[(currentIndex + 1) % images.length];

    return (




        <section className="relative w-full min-h-screen bg-[#FDFBF7] py-20 px-4 flex items-center justify-center overflow-hidden">
            

    

            {/* TEXTO CENTRAL: HAND MADE */}
            <div className="absolute z-30 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col items-center">
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#783689] opacity-10 whitespace-nowrap tracking-tighter bungee-shade-regular select-none uppercase">
                    HAND MADE
                </h2>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#9B7F49] whitespace-nowrap bungee-regular select-none uppercase drop-shadow-lg">
                        HAND MADE
                    </h2>
                </div>
            </div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                
                {/* Columna Izquierda (Espacio o Contenido Adicional) */}
                <div className="lg:col-span-6 hidden lg:block">
                    {/* Espacio reservado para el texto central o equilibrio visual */}
                                    
<div className="grid grid-cols-3 grid-rows-4 gap-4 ">
    <div className="row-span-2 col-start-1 row-start-2">
        <img src="/footer/logo-brevas.webp" alt="Cigar gallery view 1" className="w-full h-full object-contain transition-opacity duration-1000" />
    </div>
    <div className="col-start-2 row-start-2 text-[0.65rem] leading-tight text-gray-500 font-light uppercase tracking-[0.2em]"><p>
        Elaboracion a mano de hoja de tabaco
seleccionada tanto nacional como importada.
    </p>
    
    </div>
    <div className="col-start-2 row-start-3 text-[0.65rem] leading-tight text-gray-500 font-light uppercase tracking-[0.2em]">
         “Prohibida la venta a menores de 18 años”
    </div>
    <div className="row-span-4 col-start-3 row-start-1 ">
        
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
        
                    <span className="text-[0.65rem] leading-tight text-gray-500 font-light uppercase tracking-[0.2em]">
                        Cigar Brevas - Todos los derechos reservados © 2026
                    </span>
        </div>

    </div>
    <div className="col-span-2 col-start-1 row-start-1 ">
<img src="/footer/-name-cigar-Brevas.webp" alt="Cigar gallery view 1" className="w-full h-full object-contain transition-opacity duration-1000" />
    </div>
</div>

                </div>

                {/* Columna Derecha: Galería Dinámica */}
                <div className="lg:col-span-6 flex flex-col items-center lg:items-end space-y-8">
                    
                    {/* Contenedor de las dos fotos */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-end">
                        <div className="w-full sm:w-1/2 aspect-[4/5] bg-gray-100 overflow-hidden border-4 border-white shadow-lg">
                            <img 
                                key={firstImage}
                                src={firstImage} 
                                alt="Cigar gallery view 1" 
                                className="w-full h-full object-cover transition-opacity duration-1000"
                                style={{animation: 'fadeIn 1.2s forwards'}}
                            />
                        </div>
                        <div className="w-full sm:w-1/2 aspect-[4/5] bg-gray-100 overflow-hidden border-4 border-white shadow-lg">
                            <img 
                                key={secondImage}
                                src={secondImage} 
                                alt="Cigar gallery view 2" 
                                className="w-full h-full object-cover transition-opacity duration-1000"
                                style={{animation: 'fadeIn 1.2s forwards'}}
                            />
                        </div>
                    </div>

                    {/* Escrito corto de letras pequeñas (Dos párrafos) */}
                    <div className="max-w-md text-right space-y-4">
                        <p className="text-[0.65rem] leading-tight text-gray-500 font-light uppercase tracking-[0.2em]">
                            Nuestra selección de hojas pasa por un riguroso proceso de curación y fermentación natural, 
                            asegurando que cada calada sea una experiencia sensorial única y equilibrada.
                        </p>
                        <p className="text-[0.65rem] leading-tight text-gray-500 font-light uppercase tracking-[0.2em]">
                            El arte del torcido manual es una tradición que protegemos, donde la precisión de los dedos 
                            del maestro artesano define la estructura perfecta de cada vitola.
                        </p>
                    </div>

                    {/* Escrito final de cuatro líneas */}
                    <div className="max-w-md pt-8 border-t border-[#9B7F49] w-full text-right">
                        <p className="text-sm md:text-base text-[#783689] font-medium leading-relaxed italic">
                            Más que un producto, entregamos un pedazo de historia colombiana.<br />
                            Cultivado con respeto, nacido entre montañas y nubes,<br />
                            seleccionado para paladares que entienden de silencios y humo,<br />
                            Brevas es el punto donde el tiempo se detiene para disfrutar.
                        </p>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(1.05); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </section>
    );
};

export default GallerySection;