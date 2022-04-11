

import React from 'react'

import { HiCode } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Hello() {
    return (
        <div className='text-[#8892b0] flex flex-col justify-center items-center max-w-[1000px] mx-auto px-8  h-full'>
            <h2 className='text-center mb-4 text-lg sm:text-2xl md:text-3xl lg:text-5xl'>
                Hola mi nombre es <br /> Ronald Esteban
            </h2>
            <h1 className='text-center mb-2 text-2xl sm:text-4xl md:text-6xl lg:text-8xl'>
                Desarrollador <br /> Full Stack
            </h1>
            <Link to="/portafolio" className="p-4">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                PORTAFOLIO
                </button>
            </Link>
            
        
        </div>
    )
}
