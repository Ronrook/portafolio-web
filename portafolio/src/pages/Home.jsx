


import React from 'react'
import Hello from '../components/Hello';
import CardHome from "../components/CardHome";
import Ojitos from '../images/OJITOS.jpg';
import Data from '../data'



function Home() {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <Hello/>
                <div className='flex justify-center'>
                    <img className='w-1/3' src={Ojitos} alt="" />
                </div>


            </div>
            
            
            
            
            
            <div className='bg-[#0a192f] w-full max-h-md mx-auto lg:h-full'>
                <h2 
                className='text-[#8892b0] pt-32 text-center  text-2xl md:text-3xl lg:text-5xl'>Conoce sobre mí
                </h2>

                <div className='pt-20 flex justify-center'>

                

                    <div className='grid  lg:grid-cols-3 gap-10'>
                        
                        <CardHome title='Perfil' text= {Data[0]}/>
                        <CardHome title= 'Habilidades' text= {Data[1]}/>
                        <CardHome title= 'Otras Habilidades' text= {Data[2]}/>


                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;