
import React, { useState, useMemo } from "react";

import { StaticImage } from "gatsby-plugin-image";

import { CigarVitolas_Price } from "./../../page-data/page-data";

const Showproduct = () => {

const data_cigar = useMemo(() => CigarVitolas_Price, []);

let previum_index = 0;
// ✅ Estado que guarda el índice del producto seleccionado
const [selectedIndex, setSelectedIndex] = useState(0);

// ✅ Todas las variables derivan del estado — React re-renderiza al cambiar
const selected_card     = data_cigar.Show_Card[selectedIndex];
const first_image       = selected_card.src_image1;
const second_image      = selected_card.src_image2;
const third_image       = selected_card.src_image3;
const name_cigar        = selected_card.item_product_cuantiti;
const cantidad_unidades = selected_card.cantidad_unidades;
const item_count        = selected_card.num_item;
const precio            = selected_card.precio;


// ✅ Handler: actualiza el estado → React re-renderiza automáticamente
const Handle_InfCigar = (index_product) => {

console.log("Producto seleccionado:", index_product);

console.log("Producto seleccionado:", index_product);
   let index_product_num = index_product.split("_")[1];
    
    setSelectedIndex(index_product_num);

if(previum_index != index_product_num){


    document.getElementById(index_product).classList.add("underline-estilo");
    document.getElementById(previum_index).classList.remove("underline-estilo");

    previum_index = index_product_num;
}else {

// document.getElementById(index_product).classList.add("underline-estilo");
}
};

//         // Consulta el precio del dólar en pesos colombianos
// async function getDollarToCOP() {

//   try {
//     const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
//     const data = await response.json();

//     // Extraer la tasa de cambio USD → COP
//     const rate = data.rates.COP;
//     console.log(`1 USD = ${rate} COP`);
    
//     // Ejemplo: convertir 100 USD a COP
//     const amountUSD = (50000/rate).toFixed(4);
//     const amountCOP = (amountUSD * rate).toFixed(4);
//     console.log(`${amountUSD} USD = ${amountCOP} COP`);
//   } catch (error) {
//     console.error("Error consultando la tasa de cambio:", error);
//   }
// }

// getDollarToCOP();




return <>
<section className =' w-[81vw] relative top-0 left-0  z-1  m-auto h-full bg-white flex flex-col items-center justify-center '>


            <section className = 'grid  grid-cols-2   border-amber-300 border-2  w-full h-full '>

                        <div className = 'relative  border-amber-300 border-2  bg-white  w-full h-full '>

                        <div class="flex gap-0 align-right flex-direction-row justify-end ">


                                                <div class="w-[25vw] h-[22vw] z-11 bg-[#9B7F49]  flex items-center justify-center  align-right mt-12  border-[#783689] border-3" >
                                                        <span>
                                                            <img src={first_image} alt="Imagen single cigar Brevas Vitola" className="object-cover pointer-events-none select-none w-[content] h-[content] " placeholder="dominantColor" onContextMenu={(e) => e.preventDefault()} />
                                                        </span>

                                                </div>


     <div class="top-[2rem] w-[15vw] h-[45vh]  left-[0.1rem] -inset-s-7 flex-col absolute m-[8] z-[-0] bg-[#783689]  flex items-center justify-center ">

    <span><p className = 'text-[1.9rem] font-bold relative text-white w-[88%] m-3 '>
                            voucher</p>

    <span className = 'text-[0.9rem] w-[38%] relative top-[-3em]   text-white  font-light inset-2  ml-3'>
        <p classNmae = " mr-[1vw]  ml-[0]"> No pierdas esta oportunidad de Adquirir  ESTE Producto    </p>
    </span>

    </span>

                                 </div>

                             

                        <div className = "w-[8vw] h-auto absolute top-[12%]  m-auto z-18 cursor-pointer mt-29  flex-end right-[-3rem]" >
                                        
                                            <StaticImage
                                            src="../../static/cigar-vitola/-pluss-count.webp"
                                            alt="Imagen Base circular Cigar"
                                            className="object-cover pointer-events-none  select-none w-[content] h-[content] "
                                            placeholder="dominantColor"
                                            onContextMenu={(e) => e.preventDefault()}
                                            />
                        </div>
                                            </div>

<p  className = "pl-2 text-[2.4em]  text-right  right-12 font-semibold text-[#783689] m-2 relative" >${precio} COP</p>

                                 <span id = "find_cigar" className = "w-[full] h-[content] flex-row m-auto z-12 items-center  justify-center mt-2 mb-1 "> 
                                  
                                 

                                <div className = "w-[3vw] h-[content] cursor-pointer z-12 flex items-center justify-center ">
                                         <img src= "/cigar-vitola/-left-signus.webp"  alt="Imagen left-sign" className="object-cover  cursor-pointer select-none w-[43px] h-[content] " placeholder="dominantColor" onContextMenu={(e) => e.preventDefault()} />
                                         </div>

                                         <span className = " block-[content]  ">
                                        <h2 class = "font-name-vitolas m-3 bottom-6 relative block-1" >
                                            {name_cigar}
                                        </h2>
                                </span>
                                        

                    <div className = "w-[3vw] h-[content] cursor-pointer   z-12 flex items-center justify-center  ">
                         <img src= "/cigar-vitola/-right-signus.webp"  alt="Imagen right-sign" className="object-cover cursor-pointer select-none w-[35px] h-[content] " placeholder="dominantColor" onContextMenu={(e) => e.preventDefault()} />

<p className = "pl-2 text-[1.7em] font-bold text-black m-8  relative " >&nbsp; {item_count} </p>
  <span className = " underline-estilo font-medium text-[1.3em]" > {cantidad_unidades}  </span>

                                         </div>


                                         </span>

  

                                    <div className = 'text-2xl relative  flex flex-row  gap-2  w-[79%] justify-end top-2 m-5 inset-1.5  '>
                                
                                        <p className = " text-[1.1rem] h-auto bg-amber-100  center  w-1/3 relative  pl-4 grow  p-2"> No es solo hoja, es herencia; no es solo humo, es memoria.
El cigarro nace de la constacia  del buen esmero y de la pasión que, durante generaciones, han tejido un símbolo de excelencia. </p>
                                    </div>
                        </div>

                    <div className = "flex flex-col items-center justify-center center space-between h-auto w-fulll bg-red-700">

    <span className = "w-[full] h-[auto]  space m-7 font-name-vitolas  mb-[0rem] bg-[#E1E4E9] z-12 flex wrap-normal flex-row "> 

       

<span id="numero_1"  onClick={()=>Handle_InfCigar(0)} className = "block m-3 underline-estilo cursor-pointer select-none" > Brevas Mini-exquisito
            
<span className = "absolute top-[18.5rem] z-11 left-[8.5rem] ">  

</span>

</span>

	    <span id="numero_2" onClick={()=>Handle_InfCigar(1)} className = "block m-3 select-none cursor-pointer " > Brevas Churchill 
            
<span className = "absolute top-[18.5rem] z-11 left-[8.5rem] ">  

</span>
             </span> 


	    <span id="numero_3" className = "block m-3">Brevas  Panetela </span> <span id="numero_4" className = "block m-3"> Brevas Aromado </span>
                        </span>


    <span id="box"  className = "w-[full] h-[auto] font-name-vitolas font-light text-[4.26em] space  m-1 mb-[0rem] bg-[#E1E4E9] z-12 flex wrap-normal flex-row " >

 <span id="numero_6" className = "block m-3"> Brevas Purito </span> <span id="numero_7" className = "block m-3"> Brevas Robusto </span> <span id="numero_8" className = "block m-3"> Brevas N°5</span>
<span id="numero_9" className = "block m-3">Brevas Torpedo </span>

    </span>


                        <div className = "w-[32vw] h-auto bottom-[calc(15%-9em)] m-auto flex flex-col items-center justify-center relative align-content:space-between ">
                                            <StaticImage
                                            src="../../static/cigar-vitola/-base-circular.webp"
                                            alt="Imagen Base circular Cigar"
                                            className="object-cover pointer-events-none select-none w-[content] h-[content] "
                                            placeholder="dominantColor"
                                            onContextMenu={(e) => e.preventDefault()}
                                            />
                       
                            <div className = "w-[32vw]  border-white  absolute  top-[9vh]  m-auto  h-[5vw] bg-[#783689] border border-1 flex items-center justify-center ">
                           <spand>
                             <img src={second_image} alt="Imagen single cigar Brevas Vitola" className="object-cover pointer-events-none select-none w-[content] h-[content] " placeholder="dominantColor" onContextMenu={(e) => e.preventDefault()} />
                           </spand>
                        </div>

                     

                        <div className = "w-[20vw]  absolute top-[23vh]  m-auto  h-[17vw] bg-[#9B7F49] border flex items-center justify-center border-[white]  border-3 border"> 
                            <span className = "w-[18vw]   h-[content]  m-auto z-12 flex items-center justify-center  absolute mt-5 ">
                                <img src={third_image} alt="Imagen single cigar Brevas Vitola" className="object-cover pointer-events-none select-none w-[content] h-[content] " placeholder="dominantColor" onContextMenu={(e) => e.preventDefault()} />
                            </span>
                        </div>
           
               </div>

                <span className = "text-white w-[50%] h-[content]  m-auto z-12 flex items-center justify-center   mt-5 ">
                        <img src="/cigar-vitola/compra-cigars-brevas/-name-enterprice-rec.webp" alt="Imagen name marcas REgistradas" className="object-cover pointer-events-none select-none w-[content] h-[content] " placeholder="dominantColor" onContextMenu={(e) => e.preventDefault()} />
                         </span>
                    </div>



                   


            </section>


</section>


</>
};

export default Showproduct;