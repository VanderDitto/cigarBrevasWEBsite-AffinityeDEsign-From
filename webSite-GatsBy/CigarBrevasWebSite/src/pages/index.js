import React, { useEffect, useState } from "react";
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
import GallerySection from "../components/gallery/GallerySection";

import PrivacyBanner from "../components/privacyBanner/bannerPrivacy";

import sharePage from "../pages/sharePage/sharePage";
import LanguageSelector from "../components/selector-idiomas/LanguageSelector"
import { useTranslation } from "react-i18next"; 

const IndexPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        const age_approve = localStorage.getItem("edad_Accepted") === "true";
        const _visit_cigarBrevas = localStorage.getItem("visited_cigarBbrevas.com") === "true";

        if (typeof document !== "undefined") {
            const canScroll = age_approve && _visit_cigarBrevas;
            document.body.style.overflow = canScroll ? "auto" : "hidden";

            if (canScroll) {
                const btnAction = document.getElementById("btn-action");
                if (btnAction) btnAction.style.opacity = "0.5";
            }
        }
    }, []);


    /*
    const [id_goto , irPorId] = useState[""];

    const irPorId = (id) => {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
*/


    return (
        <>
            <PrivacyBanner />

            <main className="bg-main border border-[#007F0D] relative left-0 top-0 h-dvh overflow-hidden">
                <div className="left"></div>
                <div className="right"></div>

                {/* Layer 1: Background Images */}
                <section className="min-w-full  min-h-screen flex items-center justify-center absolute left-0 top-0 z-0">
                    <section className="grid grid-cols-4 w-full h-dvh grid-rows-3 gap-[3vw] gap-y-0.5 p-0">
                        <div className="bg-black/5"></div>
                        <div className="bg-black/5"></div>
                        <StaticImage
                            src="../assets/images/page1/perilla-cigar-Brevas.webp"
                            alt="Imagen perillas bitola N°5"
                            className="aspect-square w-full h-full object-cover pointer-events-none user-select-none"
                            layout="constrained"
                            placeholder="dominantColor"
                            onContextMenu={(e) => e.preventDefault()}
                        />

                        <div className="bg-black/20  w-full   flex flex-col left-0 items-center justify-center relative">
                            <span className="z-40 relative right-6.5 block-[content] ">
                                <LanguageSelector />
                               
                            </span>
                        </div>

                        <StaticImage
                            src="../assets/images/page1/fachada-cigar-Brevas.webp"
                            alt="Imagen fachada de Cigar Brevas"
                            className="aspect-square w-1/2 h-1/2 object-cover pointer-events-none user-select-none"
                            layout="constrained"
                            placeholder="dominantColor"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                        <StaticImage
                            src="../assets/images/page1/abue-rosa-cigar-Brevas.webp"
                            alt="Imagen abuela torcedora trabajadora"
                            className="aspect-square w-full h-full object-cover pointer-events-none user-select-none"
                            layout="constrained"
                            placeholder="dominantColor"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                        <div className="bg-black/5"></div>
                        <div className="flex justify-end-safe items-stretch">
                            <StaticImage
                                src="../assets/images/page1/solo-cortadora-Cigar-Brevas.webp"
                                alt="Imagen Cortadora de Cigarro Brevas"
                                className="w-3/4 h-3/4 object-cover pointer-events-none right-0 user-select-none"
                                layout="constrained"
                                placeholder="dominantColor"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </div>

                        <div className="flex justify-start bottom-0 items-stretch">
                            <StaticImage
                                src="../assets/images/page1/rollero-cortadora-cigar-brevas.webp"
                                alt="Imagen Maquina de Rollero y cortadora"
                                className="w-3/4 h-3/4 object-cover pointer-events-none user-select-none"
                                layout="constrained"
                                placeholder="dominantColor"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </div>
                        <div className="bg-black/5"></div>
                        <div className="bg-black/5"></div>
                        <div className="flex justify-end-safe items-stretch">
                            <StaticImage
                                src="../assets/images/page1/cigar-Brevas-tabaco-Flor.webp"
                                alt="Imagen tabaco flor"
                                className="w-33 h-full object-cover pointer-events-none user-select-none"
                                layout="constrained"
                                placeholder="dominantColor"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </div>
                    </section>
                </section>

                {/* Layer 2: Decorative Grid Text */}
                <section className="w-full h-dvh grid grid-cols-4 grid-rows-3 absolute left-0 top-0 z-10 pointer-events-none">
                    <div className="chevron transform rotation-190 w-full flex items-center justify-center">
                        <div>
                            <span className="firstPage-word-font text-fluid-mini text-center w-full vertical-text text-[funnel]">
                                tiempo
                            </span>
                            <span className="mr-22 mt-12 text-[2px] text-white firstPage-word-font text-fluid-mini text-center w-full vertical-text text-[funnel]">
                                jubilo
                            </span>
                        </div>
                    </div>

                    <div className="col-span-2 flex items-center justify-center">
                        <svg viewBox="0 0 400 100" className="w-full h-24 mx-auto">
                            <text x="0" y="60" className="text-[0.4em] letter-spacing-[2px] stroke-[#dfc114] fill-none" strokeWidth="1">
                                Cigarros Brevas
                                <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="2s" fill="freeze" />
                            </text>
                        </svg>
                    </div>

                    <div className="chevron w-full flex items-center justify-center">
                        <span className="text-[funnel] firstPage-word-font text-center w-full">Sistematico</span>
                    </div>

                    <div className="firstPage-word-font text-center w-full vertical-text text-white flex items-center justify-center">Pasión</div>

                    <div className="chevron w-full flex items-center justify-center">
                        <span className="firstPage-word-font left-[-9em] vertical-text relative bottom-0.1 text-left w-full">aroma</span>
                    </div>

                    <div className="chevron w-full flex items-center justify-center">
                        <span className="firstPage-word-font text-fluid-mini text-center w-full text-gray-100">arte</span>
                    </div>

                    <div className="chevron w-full flex items-center justify-center">
                        <span className="firstPage-word-font text-[2px] text-fluid-mini text-center w-full">serenidad</span>
                    </div>
 <div className="chevron w-full flex items-center justify-center">
                        <span className="firstPage-word-font text-[2px] text-fluid-mini text-center w-full text-white">maestria</span>
                    </div>

                    <div className="chevron w-full flex items-center justify-center">
                        <span className="firstPage-word-font text-white text-fluid-mini text-center w-full">
                            Tecnica <br />
                            "Cada hoja, una historia; cada puro, una obra"
                        </span>
                    </div>

                    <div className="chevron w-full firstPage-word-font block-0 bottom-0 flex items-center justify-center">
                        <span className="text-white  text-fluid-mini text-center w-full">Calidad</span>
                    </div>

                    <div className="chevron w-full flex items-center justify-center">
                        <span className="firstPage-word-font text-center w-full">satisfacción</span>
                    </div>

                    <div className="flecha-completa w-full col-span-2 firstPage-word-font text-center flex items-center justify-center text-white">Dedicación</div>
                </section>

                {/* Layer 3: Foreground Content */}
                <section className="z-20 text-bungeespice text-fluid w-full h-dvh flex flex-col absolute left-0 top-0 pointer-events-none">
                    <div className="flex justify-center items-center w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <span className="mr-[4rem] mt-[4rem] w-full bungee-Tint-regular pointer-events-auto"> {t("tienes")} </span>
                    </div>

                    <div className="w-dvh ml-[22rem] mt-[2rem] bungee-Tint-regular mx-auto text-[clamp(1.7rem,2vw+0.8rem,2.9rem)] pointer-events-auto">
                        IDADE
                    </div>

                    <div className="flex justify-center items-center">
                        <svg viewBox="0 0 400 150" width="100" height="50" className="pointer-events-auto">
                            <text x="150" y="80" fontSize="20" fontFamily="Fira Code" fill="white">
                            tiempo
                            </text>
                            <ellipse cx="200" cy="75" rx="150" ry="50" stroke="red" fill="none" strokeWidth="3" className="anim-ellipse" />
                        </svg>
                    </div>

                    <div className="relative w-[85%] flex items-center justify-center pointer-events-auto">
                        <div className="mt-[1svh] ml-[22rem] bungee-Tint-regular-large">SUFICIENTE</div>
                    </div>

                    <div className="ml-[27svw]   bungee-Tint-regular  relative  mx-auto text-fluid pointer-events-auto">
                        PARA FUMAR?  
                        <div className="flex justify-end-safe  w-25  items-stretch float-right bottom-3 relative ">
                               

                            <StaticImage
                                src="../assets/images/page1/icon-alarm.webp"
                                alt="Imagen Icon Alarm"
                                className="aspect-square w-[23] right-0 bottom-6 object-contain pointer-events-none block user-select-none"
                                layout="constrained"
                                placeholder="dominantColor"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </div>
                    </div>

                     

                </section>

                <div className = "w-full h-auto absolute bottom-0">
                            <Btn_select className="z-10" />
                        </div>

                <section className="w-1/4 h-14 firstPage-word-font bottom-0 absolute m-[20px] bottom-[-30px] flex flex-row z-30 bg-white/50 backdrop-blur-sm">
                    <span className="text-black m-auto p-1.5 firstPage-word-font-bold text-center box-content">
                        “Prohibida la venta a menores de 18 años. El consumo de tabaco es nocivo para la salud.”
                    </span>
                </section> 

            </main>

            <span className="mt-9 bg-amber-400 max-w-full block ">
                <Banner />
            </span>

            <div className="min-h-screen">
                <Heropage_features />
            </div>

            <div className="mt-15 w-[78vw] relative z-1 m-auto bg-white flex flex-col items-center justify-center">
                <Welcome />
            </div>

            <div className="min-h-screen relative left-0 top-3 m-17 mb-5">
                <CigarVitolar  id = "vitolar"/>
            </div>

            <div className="h-[30px] pt-2 top-[15px] relative w-full m-auto mt-1 border-red-700 bg-red-800 block"></div>
            
            <div className="min-h-screen w-full relative flex flex-col justify-center left-0 top-0 mt-9">
                <Showproduct id="compras" />
            </div>

            <div className="w-full">
                <GallerySection />
            </div>

            {/* <Footer /> */}
        </>
    );
};

export const Head = () => (
    <>
        <title>Puros Brevas&reg;</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </>
);

export default IndexPage;