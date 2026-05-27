import React, { useState, useMemo } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { CigarVitolas_Price } from "./../../page-data/page-data";

const Showproduct = () => {

    const data_cigar = useMemo(() => CigarVitolas_Price, []);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [voucher, setVoucher] = useState([]);

    // ✅ Todas las variables derivan del estado — React re-renderiza al cambiar
    const selected_card = data_cigar.Show_Cigar[selectedIndex];
    const first_image = selected_card.src_image1;
    const second_image = selected_card.src_image2;
    const third_image = selected_card.src_image3;
    const name_cigar = selected_card.item_product_cuantiti;
    const cantidad_unidades = selected_card.cantidad_unidades;
    const item_count = selected_card.num_item;
    const precio = selected_card.precio;

    const exchangeRate = 4200; // Example exchange rate COP to USD

    const parsePrice = (priceStr) => {
        if (!priceStr) return 0;
        return parseInt(priceStr.replace(/\./g, ""), 10);
    };

    const totalCOP = useMemo(() => {
        return voucher.reduce((sum, item) => sum + parsePrice(item.precio), 0);
    }, [voucher]);

    const totalUSD = useMemo(() => {
        return (totalCOP / exchangeRate).toFixed(2);
    }, [totalCOP]);

    // ✅ Handler: actualiza el estado → React re-renderiza automáticamente
    const Handle_InfCigar = (index_product, id_TOcall) => {
        console.log("Producto seleccionado:", index_product, id_TOcall);


        

        

        const index_product_num = Number(index_product);
        if (selectedIndex !== index_product_num) {

            const currentEl = document.getElementById(id_TOcall);
            const previousId = `numero_${selectedIndex + 1}`;
            const previousEl = document.getElementById(previousId);
           

            setSelectedIndex(index_product_num);
            if (currentEl) currentEl.classList.add("underline-estilo");
            if (previousEl) previousEl.classList.remove("underline-estilo");

            setSelectedIndex(index_product_num);
        }
    };

    const addProduct = () => {
        

        const solicitar_on = document.getElementById("solicitar_on");
         solicitar_on.style.opacity= 1;

        
        

        const productToAdd = {
            name: name_cigar,
            presentation: cantidad_unidades,
            precio: precio
        };
        setVoucher([...voucher, productToAdd]);
        console.log("Producto agregado al carrito:", productToAdd);
    };

    const removeProduct = (index) => {
        setVoucher(voucher.filter((_, i) => i !== index));
    };

    const sendWhatsApp = () => {
        if (voucher.length === 0) return;

        let message = "Hola, me gustaría hacer un pedido:\n\n";
        voucher.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - ${item.presentation} ($${item.precio} COP)\n`;
        });
        message += `\nTotal COP: $${totalCOP.toLocaleString("es-CO")}\n`;
        message += `Total USD: $${totalUSD}\n`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/573174044408?text=${encodedMessage}`, "_blank");
    };

    const sendTelegram = () => {
if (voucher.length === 0) return;

        let message = "Hola, me gustaría hacer un pedido:\n\n";
        voucher.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - ${item.presentation} ($${item.precio} COP)\n`;
        });
        message += `\nTotal COP: $${totalCOP.toLocaleString("es-CO")}\n`;
        message += `Total USD: $${totalUSD}\n`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://t.me/usuario?text=${encodedMessage}`, "_blank");
    
    };

    return (
        <>
            <section className="w-[81vw] relative top-0 left-0 z-1 m-auto h-full bg-white flex flex-col items-center justify-center">
                <section className="grid grid-cols-2 border-red-300 border-2 w-full h-full">
                    <div className="relative border-amber-300 border-2 bg-white w-full h-full">
                        <div className="flex gap-0 align-right flex-direction-row justify-end">
                            <div className="w-[25vw] h-[22vw] z-11 bg-[#9B7F49] flex items-center justify-center align-right mt-12 border-[#783689] border-3">
                                <span className="w-[auto] h-[59vh]">
                                    <img
                                        src={first_image}
                                        alt="Brevas cigar product shot showing a single premium cigar in a styled presentation"
                                        className="object-contain pointer-events-none select-none w-[auto] h-[59vh]"
                                        onContextMenu={(e) => e.preventDefault()}
                                    />
                                </span>
                            </div>

                            <div className="top-[2rem] w-[15vw] h-[45vh] shadow-xl border border-2 border-amber-50 left-[0.1rem] -inset-s-7 flex-col absolute m-[8] z-[-0] bg-[#783689] flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center w-full h-full md:p-2 p-3">
                                    <div className="w-full bg-[#783689] shadow-xl md:py-0.5 md:mb-1 py-1 mb-2 rounded">
                                        <p className="text-[1.4rem] md:text-[1.2rem] font-bold text-white select-none uppercase tracking-wider">
                                            voucher
                                        </p>
                                    </div>
                                    
                                    {voucher.length > 0 ? (
                                        <div className="text-white text-center flex flex-col items-center justify-center w-full h-full">
                                            <div className="w-full  flex-1 overflow-y-auto md:pr-0.5 pr-1 md:mb-1 mb-2">
                                                {voucher.map((item, index) => (
                                                    <div 
                                                        key={index}
                                                        className="bg-white/10 md:mb-0.5 md:p-1 mb-1 p-1.5 rounded text-xs flex flex-col items-center justify-center md:gap-0.25 gap-0.5 hover:bg-white/20 transition"
                                                    >
                                                        <div className="text-center w-full">
                                                            <p className="font-semibold md:text-[0.8rem] text-[0.7rem] truncate">{item.name}</p>
                                                            <p className="md:text-[0.55rem] text-[0.8rem] opacity-90">${item.precio}</p>
                                                        </div>
                                                        <button
                                                            onClick={() => removeProduct(index)}
                                                            className="bg-red-500 hover:bg-red-600 text-white rounded md:px-0.5 md:py-0.1 px-1 py-0.2 md:text-[0.55rem] text-[0.65rem] font-bold transition"
                                                        >
                                                            ✕ Eliminar
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="border-t border-white/30 md:pt-0.1 pt-1 w-full">
                                                <p className="md:text-[0.75rem] text-black bg-amber-50 p-2 text-[0.85rem] font-semibold"> + Total ${totalCOP.toLocaleString("es-CO")} COP</p>
                                                <p className=" bg-amber-50 p-2 text-black md:text-[0.6rem] text-[0.9rem] opacity-90">${totalUSD} USD</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <span className="md:text-[0.7rem] text-[0.8rem] text-white font-light text-center px-2 select-none italic opacity-80">
                                            <p>No pierdas esta oportunidad de adquirir este producto</p>
                                        </span>
                                    )}
                                </div>

                                <div id="solicitar_on" className = "flex  opacity-10 flex-row space-around gap-4 h-full w-full center justify-center "> 
                                  <div 
                                onClick={sendWhatsApp}
                                className="cursor-pointer bottom-[-5.4rem] left-2   group flex flex-col items-center transition-all hover:scale-110 absolute z-18"
                            >
                                <div className="bg-white md:p-1.5 p-2 rounded-full shadow-lg group-hover:bg-green-50 transition-colors">
                                    <StaticImage
                                        src="../../static/footer/-logo-msn-whatup.webp"
                                        alt="Send order via WhatsApp"
                                        className="md:w-9 md:h-9 w-10 h-10"
                                        placeholder="blurred"
                                    />
                                </div>
                                <p className="md:text-[0.6rem] text-[0.75rem] md:mt-0.5 mt-1 font-medium group-hover:underline text-center">Solicitar</p>
                            </div>

                                           <div 
                                onClick={sendTelegram}
                                className="cursor-pointer bottom-[-5.4rem] right-7 group flex flex-col items-center transition-all hover:scale-110 absolute z-18"
                            >
                                <div className="bg-white  md:p-1.5 p-2 rounded-full shadow-lg group-hover:bg-green-50 transition-colors">
                                    <StaticImage
                                        src="../../static/footer/-logo-msn-telegram.webp"
                                        alt="Send order via WhatsApp"
                                        className="md:w-9 md:h-9 w-10 h-10"
                                        placeholder="blurred"
                                    />
                                </div>
                                <p className="md:text-[0.6rem] text-[0.75rem] md:mt-0.5 mt-1 font-medium group-hover:underline text-center">Solicitar</p>
                            </div>
                                            </div>

                            </div>

                

                            <div
                                onClick={addProduct}
                                className="w-[8vw] h-auto absolute top-[12%] m-auto z-18 cursor-pointer mt-29 flex-end right-[-3rem] hover:scale-110 transition-transform"
                            >
                                <StaticImage
                                    src="../../static/cigar-vitola/-pluss-count.webp"
                                    alt="Add product button"
                                    className="object-cover pointer-events-none select-none w-full h-auto"
                                    placeholder="dominantColor"
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            </div>
                        </div>

                        <p className="pl-2 text-[2.4em] text-right right-19 font-semibold text-[#783689] m-2 relative">
                            ${precio} COP
                        </p>

                        <span
                            id="find_cigar"
                            className="w-[full] h-[content] flex-row flex flex-row gap-5 m-auto z-12 items-center space-around justify-center mt-2 mb-1"
                        >
                            <span className="w-[content] h-[content] cursor-pointer z-12 flex-inline">
                                <span className="underline-estilo font-medium text-[1.9em] p-5 | m-7">
                                    <p>{cantidad_unidades}</p>
                                </span>
                            </span>

                            <span className="top-45 right-4 relative flex-inline flex-col items-center justify-center z-12 ">
                                <h2 className=" font-name-vitolas-center  m-2 bg-[#ffcf22] p-2  absolute   bottom-24">
                                    {name_cigar}
                                </h2>
                                <span className="relative">
                                    <p className="text-[1.7em] underline  absolute font-bold text-black ml-5 pl-8 bottom-9 left-8 center">
                                        &nbsp; {item_count}
                                    </p>
                                </span>
                            </span>
                        </span>

                        <div onContextMenu={(e) => {
    e.preventDefault();}} className="text-[0.9rem] leading-tight text-gray-500 font-light uppercase tracking-[0.2em] relative flex flex-row gap-2 w-[79%]  justify-end top-0 m-2 inset-1.5 select-none">
                            No es solo hoja, es herencia; no es solo humo, es memoria. El cigarro nace de la constacia del
                            buen esmero y de la pasión que, durante generaciones, han tejido un símbolo de excelencia.
                        </div>

                    </div>


                        <div className="flex flex-col items-center justify-center center space-between h-auto w-fulll">
                            <span className="w-[full] h-[16vh] letter-spacing-[5px] mt-9 font-name-vitolas bg-[#E1E4E9] z-12 flex wrap-normal flex-row">
                                <span
                                    id="numero_1"
                                    onClick={() => Handle_InfCigar(0, "numero_1")}
                                    className="flex flex-col items-center justify-center relative m-12 underline-estilo cursor-pointer select-none"
                                >
                                    Brevas<br /> Mini-exquisito
                                </span>

                                <span className="flex flex-col items-center justify-center relative">
                                    <span
                                        id="numero_2"
                                        onClick={() => Handle_InfCigar(1, "numero_2")}
                                        className="cursor-pointer bg-red-600 w-[25px] h-[27px] relative text-center text-white text-[15px]"
                                    >
                                        10
                                    </span>
                                    <span className="text-center flex justify-center items-center m-0 select-none relative">
                                        Brevas <br />
                                        Churchill
                                    </span>
                                    <span
                                        id="numero_3"
                                        onClick={() => Handle_InfCigar(2, "numero_3")}
                                        className="cursor-pointer bg-red-600 w-[25px] h-[50px] text-center text-[15px] text-white"
                                    >
                                        25
                                    </span>
                                </span>

                                <span
                                    id="numero_4"
                                    onClick={() => Handle_InfCigar(3, "numero_4")}
                                    className="cursor-pointer m-6 text-center flex justify-center items-center select-none"
                                >
                                    Brevas <br /> Panetela
                                </span>

                                <span className="flex flex-col items-center justify-center relative">
                                    <span
                                        id="numero_5"
                                        onClick={() => Handle_InfCigar(4, "numero_5")}
                                        className="cursor-pointer bg-red-600 w-[25px] h-[27px] relative text-center text-white text-[15px]"
                                    >
                                        25
                                    </span>
                                    <span className="text-center flex justify-center items-center select-none mr-[5px]">
                                        Brevas <br />
                                        Aromado
                                    </span>
                                    <span
                                        id="numero_6"
                                        onClick={() => Handle_InfCigar(5, "numero_6")}
                                        className="cursor-pointer bg-red-600 w-[25px] h-[27px] text-center text-[15px] text-white"
                                    >
                                        10
                                    </span>
                                </span>
                            </span>

                            <span
                                id="box"
                                className="cursor-pointer w-[full] h-[16vh] mt-9 font-name-vitolas font-light text-[1.26em] space-around mb-[1rem] bg-[#E1E4E9] z-12 flex wrap-normal flex-row"
                            >
                                <span
                                    id="numero_7"
                                    onClick={() => Handle_InfCigar(6, "numero_7")}
                                    className="block m-3 flex justify-center items-center m-0 select-none"
                                >
                                    Brevas <br /> Purito
                                </span>

                                <span className="flex flex-col items-center justify-center relative">
                                    <span
                                        id="numero_8"
                                        onClick={() => Handle_InfCigar(7, "numero_8")}
                                        className="cursor-pointer bg-red-600 w-[25px] h-[27px] text-center text-white text-[15px]"
                                    >
                                        10
                                    </span>
                                    <span className="text-center flex justify-center items-center m-3 select-none">
                                        Brevas <br /> Robusto
                                    </span>
                                    <span
                                        id="numero_9"
                                        onClick={() => Handle_InfCigar(8, "numero_9")}
                                        className="cursor-pointer bg-red-600 w-[25px] h-[70px] text-center text-white text-[15px]"
                                    >
                                        20
                                    </span>
                                </span>

                                <span
                                    id="numero_10"
                                    onClick={() => Handle_InfCigar(9, "numero_10")}
                                    className="cursor-pointer m-8 flex-col items-center flex relative"
                                >
                                    Brevas <br /> N°5
                                </span>

                                <span className="flex flex-col m-8 items-center justify-center relative">
                                    <span
                                        id="numero_11"
                                        onClick={() => Handle_InfCigar(10, "numero_11")}
                                        className="bg-red-600 w-[25px] h-[27px] text-center text-white text-[15px]"
                                    >
                                        10
                                    </span>
                                    <span id="numero_9" className="text-center flex justify-center items-center select-none">
                                        Brevas <br /> Torpedo
                                    </span>
                                    <span
                                        id="numero_12"
                                        onClick={() => Handle_InfCigar(11, "numero_12")}
                                        className="cursor-pointer text-center flex justify-center items-center select-none"
                                    >
                                        25
                                    </span>
                                </span>
                            </span>

                            <div className="w-[32vw] h-auto bottom-[calc(15%-9em)] m-auto flex flex-col items-center justify-center relative align-content:space-between">
                                <StaticImage
                                    src="../../static/cigar-vitola/-base-circular.webp"
                                    alt="Circular decorative base graphic behind the cigar display"
                                    className="object-cover pointer-events-none select-none w-[content] h-[content]"
                                    placeholder="dominantColor"
                                    onContextMenu={(e) => e.preventDefault()}
                                />

                                <div className="w-[32vw] border-white absolute top-[5vh] m-auto h-[7vw] bg-[#783689] border border-1 flex items-center justify-center">
                                    <span>
                                        <img
                                            src={second_image}
                                            alt="Brevas cigar close-up displayed inside a purple and gold presentation panel"
                                            className="bottom-[14px] relative object-cover pointer-events-none select-none w-[content] h-[content]"
                                            onContextMenu={(e) => e.preventDefault()}
                                        />
                                    </span>
                                </div>

                                <div className="w-[20vw] absolute top-[23vh] m-auto h-[17vw] bg-[#9B7F49] border flex items-center justify-center border-[white] border-3 border">
                                    <span className="w-[18vw] h-[content] m-auto z-12 flex items-center justify-center absolute mt-5">
                                        <img
                                            src={third_image}
                                            alt="Brevas cigar segment resting on a gold and brown display tray"
                                            className="object-cover pointer-events-none select-none w-[content] h-[content]"
                                            onContextMenu={(e) => e.preventDefault()}
                                        />
                                    </span>
                                </div>

                                <span className="text-white w-[50%] h-[content] m-auto z-12 flex items-center justify-center mt-5">
                                    <img
                                        src="/cigar-vitola/compra-cigars-brevas/-name-enterprice-rec.webp"
                                        alt="Brevas registered brand name graphic on a promotional panel"
                                        className="object-cover pointer-events-none select-none w-[content] h-[content]"
                                        onContextMenu={(e) => e.preventDefault()}
                                    />
                                </span>
                            </div>
                        </div>
                    

                    

                </section>
            </section>
        </>
    );



};

export default Showproduct;