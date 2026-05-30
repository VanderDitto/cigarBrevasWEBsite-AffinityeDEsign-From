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
      className="flex hover:bg-gray-600  flex-row items-center justify-center gap-4 bg-[#b8c2b922] p-4"
    >
      {["yes", "no"].map((option) => (
        <button
          key={option}
          onClick={() => handleClick(option)}
          className="bg-[#007F0D] hover:bg-gray-400 hover:border-3 text-[1.2em] border border-[#994743] px-5 py-2 text-white font-bold rounded cursor-pointer"
        >
          {option}
        </button>
      ))}
    </div>
  );
};


export default Btn_select;
