import React, { useState, useEffect } from "react";



const  PrivacyBanner = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("visited_cigarBbrevas.com");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("visited_cigarBbrevas.com", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className = " aside absolute  h-auto  top-0 right-0  w-1/9 bg-[#8E57A2] text-white p-4 flex-col  justify-between items-center z-50">
      <span className = "  text-sm  cursor-vertical-text">
        
        Usamos cookies para mejorar tu experiencia. Consulta nuestra{" "}
        <a href="/privacidad" className = " underline  hover:text-red-300 text-[#36894E] text-[1.1em] ">
          Política de Privacidad
        </a>
        .
      </span>
      <button
        onClick={handleAccept}
        className=" bg-[#73a663]  hover:bg-[#b6a24b] cursor-pointer  text-white px-4 py-2 rounded relative top-2 mt-3"
      >
        Aceptar
      </button>
    </div>
  );
}

export default PrivacyBanner;