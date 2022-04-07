

import React from 'react'

import { HiCode } from "react-icons/hi";
import CardHome from "./CardHome";


export default function Hello() {
    return (
        <div className='bg-white h-screen flex flex-col justify-center items-center'>
            <h2 className='font-black text-center mb-4 text-lg sm:text-2xl md:text-3xl lg:text-5xl'>
                Hola mi nombre es <br /> Ronald Esteban
            </h2>
            <h1 className='font-black text-center mb-2 text-2xl sm:text-4xl md:text-6xl lg:text-8xl'>
                Desarrollador <br /> Full Stack
            </h1>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            PORTAFOLIO
            </button>

            <div className='mt-20'>
                <h2 
                className='font-black text-center mb-4 text-lg sm:text-2xl md:text-3xl lg:text-5xl'>Conoce sobre mí
                </h2>
                <div className='flex flex-col justify-center items-center lg:flex-row'>
                    <CardHome titulo='Perfil'/>
                    <CardHome titulo= 'Habilidades'/>
            
                </div>
                
            
                

            </div>

        
        </div>
    )
}
