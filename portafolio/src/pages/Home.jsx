


import React from 'react'
import Hello from '../components/Hello';
import CardHome from "../components/CardHome";
import Ojitos from '../images/OJITOS.jpg';



function Home() {
    return (
        <div name='home' className='w-full h-screen'>
            
            <Hello/>
            <div className='flex justify-center'>
                <img className='w-1/3' src={Ojitos} alt="" />
            </div>
            
            
            <div className='bg-gray-200 '>
                <h2 
                className='font-black text-center mb-4 text-lg sm:text-2xl md:text-3xl lg:text-5xl'>Conoce sobre mí
                </h2>
                <div className=' mt-40 ml-20 mr-20 flex flex-col justify-between items-center lg:flex-row'>
                    
                    <CardHome titulo='Perfil'/>
                    <CardHome titulo= 'Habilidades'/>
                    <CardHome titulo= 'Otras Habilidades'/>


                </div>
                    
            
            </div>
        </div>
    )
}

export default Home;