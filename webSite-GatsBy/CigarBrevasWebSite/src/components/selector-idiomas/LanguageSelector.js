
import { useTranslation } from "react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";



const LanguageSelector = () => {

  const { i18n, t } = useTranslation();

  const changeLang = (lang) => {

    i18n.changeLanguage(lang);
    localStorage.setItem("selectedLang", lang);
  };



useEffect(() => {

 document.getElementById("btn_default").style.border = "0"; 
 document.getElementById("btn_default").style.backgroundColor = "#007f0d34";
  console.log("Idioma seleccionado:", i18n.language);
}, []);




  return (

    <section className=" cursor-pointer z-99 w-[1/9] gap-4 h-auto flex flex-wrap-reverse items-center justify-center">
      <button id="btn_default"
        onClick={() => changeLang("es")}
        className="flex flex-col items-center m-2 pt-1  rounded-lg border border-[#994743] bg-[#B8C2B9] hover:border-0  hover:bg-[#007f0d34] transition cursor-pointer"
      >
        <StaticImage
          src="../../assets/images/page1/colombia.webp"
          alt="Colombia"
          className="w-[2rem] h-[2rem] rounded-full object-cover pointer-events-none "
          layout="constrained"
          placeholder="dominantColor"
        />
        <span className="mt-2 text-sm p-0.5 font-bold text-[#994743]">Español</span>
      </button>

      <button
        onClick={() => changeLang("pt") }
        className="flex flex-col items-center m-2 pt-1 hover:border-0  hover:bg-[#007f0d34] rounded-lg border border-[#994743] bg-[#B8C2B9]  transition cursor-pointer"
      >
        <StaticImage
          src="../../assets/images/page1/Brazil.webp"
          alt="Brazil"
          className="w-[2rem] h-[2rem] rounded-full object-cover pointer-events-none"
          layout="constrained"
          placeholder="dominantColor"
        />
        <span className="mt-2 text-sm p-0.5 font-bold text-[#994743]">Português</span>
      </button>

      <button
        onClick={() => changeLang("en")}
        className="flex flex-col items-center m-2 pt-1 rounded-lg border border-[#994743] hover:border-0  hover:bg-[#007f0d34] transition cursor-pointer bg-[#B8C2B9]"
      >
        <StaticImage
          src="../../assets/images/page1/usa.webp"
          alt="USA"
          className=" w-[2rem] h-[2rem] rounded-full object-cover pointer-events-none   "
          layout="constrained"
          placeholder="dominantColor"
        />
        <span className="mt-2 p-0.5 text-sm font-bold text-[#994743]">English</span>
      </button>
    </section>
  );
};

export default LanguageSelector;
