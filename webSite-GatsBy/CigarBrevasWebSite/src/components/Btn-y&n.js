import { navigate } from "gatsby";
import * as React from "react";

const handleClick = (option) => {

  console.log("Seleccionaste:", option);

  // Guardar en localStorage
  localStorage.setItem("edad_Accepted", option === "yes" ? "true" : "false");

  if (option === "yes") {

    alert("Gracias por confirmar que eres mayor de edad. Bienvenido a Cigar Brevas.");
    document.body.style.overflow = "auto"; // Permitir scroll

  }else{
    // goto share Page
   // window.location.href = "/sharePage";
   navigate("../sharePage/sharePage");
  }

            document.getElementById("btn-action").style.opacity = "0.5";
            console.log("valor ///////////////////////", option);

};

const Btn_select = () => {
  return (
    <div
      id="btn-action"
      className="flex hover:bg-gray-600/30 flex-row items-center justify-center gap-6 bg-[#b8c2b922] p-6"
    >
      {["yes", "no"].map((option) => (
        <button
          key={option}
          onClick={() => handleClick(option)}
          className="bg-[#007F0D] hover:bg-green-600 hover:scale-105 border-2 border-[#994743] px-9 py-3.5 text-[1.6em] text-white font-bold rounded-lg cursor-pointer transition shadow-lg uppercase tracking-wider"
        >
          {option}
        </button>
      ))}
    </div>
  );
};


export default Btn_select;
