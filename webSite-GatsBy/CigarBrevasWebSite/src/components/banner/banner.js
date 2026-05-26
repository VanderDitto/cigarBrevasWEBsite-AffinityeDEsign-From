import React from 'react';

const Banner = () => {
return(
<>

<aside className='relative '>
    <h2 className="text-3xl  font-bold mb-9 m-auto text-center">Tradición artesanal</h2>
    <span className='text-center flex w-1/2  left-1/2 right-1/2  m-auto '>
        <p className="text-lg  m-auto text-wrap text-center">
        Cigar Brevas: tabaco colombiano hecho a mano, suave y auténtico, con tradición familiar en cada elaboracion.<br></br>
        
        <span className="text-white  text-[1.1em] text-bold ">
        Hoja de tabaco seleccionada tanto nacional como importada. &nbsp;
                </span>

            <span className="text-white  text-[1.1em] text-bold ">
            Fabricante y Distribuidor de Cigarros Gamos desde <span className = 'font-italic  bold  text-[1.6em] text-bold '> 1974</span>
                </span>     
        </p>
    
    </span>
</aside>

</>

);

};

export default Banner;