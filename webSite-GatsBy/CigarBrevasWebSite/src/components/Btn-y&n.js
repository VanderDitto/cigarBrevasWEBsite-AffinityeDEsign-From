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

  return ["yes", "no"].map((option) => (
    <div id ="btn-action"
  key={option}
  className="w-full h-12 right-0 top-[3rem] flex items-center justify-around bg-[#b8c2b922]"
>
  <div className="relative z-50 h-10 border-[#994743] border bg-[#B8C2B9] pt-0.5 pl-0.3 flex items-center justify-around w-25 m-auto">
    <button
      onClick={() => handleClick(option)}
      className="bg-[#007F0D] text-[1.2em] border border-[#994743] w-[5rem] text-white font-bold rounded cursor-pointer"
    >
      {option}
    </button>
  </div>
</div>
  ));
};

export default Btn_select;
