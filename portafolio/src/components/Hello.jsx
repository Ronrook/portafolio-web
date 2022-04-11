

import React from 'react'

import CV from '../assest/CV.pdf'

import { HiCode } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Hello() {
    return (
        <div className='text-white flex flex-col justify-center items-center max-w-[1000px] mx-auto px-8  h-full'>
            <h2 className='text-center mb-4 text-lg sm:text-2xl md:text-3xl lg:text-5xl'>
                Hola mi nombre es <br /> Ronald Esteban
            </h2>
            <h1 className='text-center mb-2 text-2xl sm:text-4xl md:text-6xl lg:text-8xl'>
                Desarrollador <br /> Full Stack
            </h1>
            <a href={CV} download={"Ronald-Rosero-cv"} className="p-4">
                <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                Descarga mi CV
                </button>
            </a>
            
        
        </div>
    )
}
