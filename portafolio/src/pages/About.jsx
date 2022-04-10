
import { useState } from "react";
import ojitos from '../images/OJITOS.jpg';
import programador from '../images/programador.jpeg';

function About() {

    const [isVisible, setIsVisible] = useState(true);

    const handleisVisible = () => setIsVisible(!isVisible);

    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                
                
                <p className='text-4xl font-bold inline pb-8'>
                ¿Quién soy?
                </p>
                <div className='max-w-[600px] w-full grid lg:grid-cols-2 gap-8 px-4'>
                    <div className='flex justify-center lg:items-center cursor-pointer' onClick={handleisVisible}>


                        {isVisible?<img src={ojitos} alt="ojitos" className="w-36 h-36 rounded-full object-cover"/> : <img src={programador} alt="programador" className="w-36 h-36 rounded-full object-cover"/>}
                        
                        
                        
                        
                        
                    </div>
                    <div>
                        <p className="text-justify"> Mi nombre es Ronald Esteban Rosero, tengo 30 años, a lo largo del tiempo he aprendido a superar retos y verle el lado bueno a la vida, para mí programar significa eso; buscar soluciones de la mejor manera, me identifico con el zorro Kitsune un ser inteligente que con el tiempo adquiere más conocimiento; así mismo tengo la meta de mejorar cada día cada una de mis habilidades como programador Full Stack y mis valores como persona.
                        </p>  
                    </div>

                    
          </div>
                
                    
                    
            
                
                
            </div>
            
      
    </div>
    )
}
export default About;