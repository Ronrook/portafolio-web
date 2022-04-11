

import React from 'react'
import Proyect from '../components/Proyect';
import ojitos from '../images/OJITOS.jpg';

function Portafolio() {
        return (
            <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div className=' mt-20 flex justify-center'>
                        <p className='text-4xl font-bold inline text-gray-300'>
                        Mis proyectos
                        </p>
                        {/* <p className='py-6'>// Check out some of my recent work</p> */}
                    </div>

                    {/* Container */}
                    <div className='mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                        {/* Grid Item */}
                        <Proyect img={ojitos}/>
                        <Proyect img={ojitos}/>
                        <Proyect img={ojitos}/>
                        <Proyect img={ojitos}/>
                        <Proyect img={ojitos}/>
                        <Proyect img={ojitos}/>
                        
                        
                        
                    </div>
                </div>
        </div>
    );
    
}
export default Portafolio;