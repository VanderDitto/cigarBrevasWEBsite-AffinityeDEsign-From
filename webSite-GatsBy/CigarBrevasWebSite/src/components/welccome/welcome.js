import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

const Welcome = () => {
    const { t } = useTranslation("translation");

    return (
        <section id='welcome-section' className="relative w-full min-h-screen py-16 px-4 sm:px-8 lg:px-16 overflow-hidden bg-white">
            {/* Background Decorative Elements (Optional) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
                <div className="absolute top-10 left-10 w-64 h-64 border-2 border-amber-900 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-amber-900 rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Header Section */}
                <header className="text-center mb-12">
                    <h2 className="bungee-shade-regular text-4xl md:text-6xl lg:text-7xl mb-4 text-[#783689]">
                        {t("wellcome")}
                    </h2>
                    <div className="w-24 h-1 bg-[#9B7F49] mx-auto"></div>
                </header>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Torpedo Image & Vertical Text */}
                    <div className="lg:col-span-3 flex flex-row items-center justify-center relative">
                        <div className="relative ">
                            {/* <p className="text-[#9B7F49] vertical-text font-bold text-2xl uppercase tracking-widest absolute -left-12 top-1/2 -translate-y-1/2 select-none"> 
                                {t("hecho")}
                            </p> */}
                            <div className="border-8 border-[#F3F4F6] p-4 bg-white shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                               
                               <div className = "w-[content] h-auto ">
                                        <StaticImage
                                    src="../../assets/images/welcome/foto-7.webp"
                                    alt="img fundadora cigar brevas"
                                    className="object-contain w-full max-w-sm"
                                    placeholder="blurred"
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                               </div>
                               
                             
                            </div>
                            <p className="mt-4 text-center text-sm italic text-gray-500">
                                Fermentación y paciencia del maestro Torcedor
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Descriptions and Additional Images */}
                    <div className="lg:col-span-7 space-y-12">
                        
                        {/* Descriptive Text Section */}
                        <article className="bg-[#9B7F49] p-8 md:p-12 text-white shadow-2xl rounded-sm relative">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#783689] flex items-center justify-center text-2xl">“</div>
                            <p className="text-xl md:text-2xl leading-relaxed font-light italic text-justify">
                                "Cada hoja, cada capa, cada detalle refleja el legado de generaciones dedicadas al tabaco, 
                                donde la calidad no es una promesa, sino una herencia."
                            </p>
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#783689] flex items-center justify-center text-2xl">”</div>
                        </article>

                        {/* Secondary Images Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* Vitolas */}
                            <div className="flex flex-col items-center">
                                <div className="border-4 border-[#F3F4F6] p-2 bg-white shadow-md hover:scale-105 transition-transform duration-300">
                                    <StaticImage
                                        src="../../assets/images/welcome/vitolario-puros.png"
                                        alt="Diversas Vitolas de Puros Brevas"
                                        className="object-contain aspect-video w-full h-48"
                                        placeholder="blurred"
                                        onContextMenu={(e) => e.preventDefault()}
                                    />
                                </div>
                                <span className="mt-3 font-bold uppercase tracking-widest text-[#783689]">Vitolas</span>
                            </div>

                            {/* MoldesTODO: Click goto */}
                            <div className="flex flex-col items-center" >
                                <div className="border-4 border-[#F3F4F6] p-2 bg-white shadow-md hover:scale-105 transition-transform duration-300">
                                    <StaticImage
                                        src="../../assets/images/welcome/toBuy.webp"
                                        alt="Moldes artesanales usados en la producción de cigarros"
                                        className="object-cover w-full h-48"
                                        placeholder="blurred"
                                        onContextMenu={(e) => e.preventDefault()}
                                    />
                                </div>
                                <span className="mt-3 font-bold uppercase tracking-widest text-[#783689]">compras</span>
                            </div>
                            
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default Welcome;