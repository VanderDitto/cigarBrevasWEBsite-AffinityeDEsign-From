import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

const Welcome = () => {
    const { t } = useTranslation("translation");

     const scrollToContacto = () => {

    document.getElementById("contactoRef_vitolar").scrollIntoView({ behavior: "smooth" });

                        };

    const onScrool_To = () => {
    
    document.getElementById("compras").scrollIntoView({ behavior: "smooth" });
    
    };


    return (
        <section id='welcome-section' className="relative w-full  min-h-screen py-24 px-6 sm:px-12 lg:px-24 overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
                <div className="absolute top-10 left-10 w-96 h-96 border-2 border-amber-900 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-[500px] h-[500px] border-2 border-amber-900 rounded-full"></div>
            </div>

            <div className="max-w-8xl mx-auto flex flex-col items-center">
                {/* Header Section */}
                <header className="text-center mb-16 md:mb-24">
                    <h2 className="bungee-shade-regular text-5xl md:text-7xl lg:text-8xl mb-6 text-[#783689] drop-shadow-lg">
                        {t("wellcome")}
                    </h2>
                    <div className="w-36 h-1.5 bg-[#9B7F49] mx-auto rounded-full"></div>
                </header>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center w-full">
                    
                    {/* Left Column: Torpedo Image */}
                    <div className="lg:col-span-4 flex flex-row items-center justify-center relative">
                        <div className="relative transform transition-all duration-700 hover:scale-105">
                            <div className="border-[12px] border-[#F3F4F6] p-6 bg-white shadow-2xl rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                               <div className="w-full h-auto">
                                    <StaticImage
                                        src="../../assets/images/welcome/foto-7.webp"
                                        alt="img fundadora cigar brevas"
                                        className="object-contain w-full max-w-md rounded"
                                        placeholder="blurred"
                                        onContextMenu={(e) => e.preventDefault()}
                                    />
                               </div>
                            </div>
                            <p className="mt-6 text-center text-base italic text-gray-500 font-medium select-none">
                                Fermentación y paciencia del maestro Torcedor
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Descriptions and Additional Images */}
                    <div className="lg:col-span-8 space-y-16">
                        
                        {/* Descriptive Text Section */}
                        <article className="bg-[#9B7F49] p-10 md:p-16 text-white shadow-2xl rounded-xl relative transform transition-all duration-500 hover:shadow-amber-800/20">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#783689] flex items-center justify-center text-4xl font-serif rounded-full shadow-lg">“</div>
                            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light italic text-justify select-none">
                                "Cada hoja, cada capa, cada detalle refleja el legado de generaciones dedicadas al tabaco, 
                                donde la calidad no es una promesa, sino una herencia."
                            </p>
                            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#783689] flex items-center justify-center text-4xl font-serif rounded-full shadow-lg">”</div>
                        </article>

                        {/* Secondary Images Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full">
                            {/* Vitolas */}
                            <div onClick={scrollToContacto} className="flex flex-col items-center cursor-pointer group">
                                <div className="border-8 border-[#F3F4F6] p-4 bg-white shadow-xl rounded-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl w-full">
                                    <StaticImage
                                        src="../../assets/images/welcome/vitolario-puros.png"
                                        alt="Diversas Vitolas de Puros Brevas"
                                        className="object-contain aspect-video w-full h-56 md:h-64"
                                        placeholder="blurred"
                                        onContextMenu={(e) => e.preventDefault()}
                                    />
                                </div>
                                <span className="mt-4 text-xl font-extrabold uppercase tracking-widest text-[#783689] transition-colors group-hover:text-[#9B7F49]">
                                    Vitolas
                                </span>
                            </div>

                            {/* Moldes */}
                            <div className="flex flex-col items-center cursor-pointer group" onClick={onScrool_To}>
                                <div className="border-8 border-[#F3F4F6] p-4 bg-white shadow-xl rounded-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl w-full">
                                    <StaticImage
                                        src="../../assets/images/welcome/toBuy.webp"
                                        alt="Moldes artesanales usados en la producción de cigarros"
                                        className="object-cover w-full h-56 md:h-64 rounded"
                                        placeholder="blurred"
                                        onContextMenu={(e) => e.preventDefault()}
                                    />
                                </div>
                                <span className="mt-4 text-xl font-extrabold uppercase tracking-widest text-[#783689] transition-colors group-hover:text-[#9B7F49]">
                                    compras
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Welcome;