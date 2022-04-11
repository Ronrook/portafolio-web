import { Link } from "react-router-dom";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from "react";





function Navbar({ toggleOpen }) {

    const [nav, setNav] = useState(false);

    const handleNav = () => setNav(!nav);
    return (
        <nav className="px-4 fixed w-full h-[80px] flex justify-between md:justify-center items-center  bg-[#050533] text-white shadow-sm" role="navigation">
            
            

            <div className=" z-10 md:hidden text-2xl" onClick={handleNav}>
                    {nav? <FaTimes/> : <FaBars/>}
            </div>
            <Link 
                to="/" 
                className="md:absolute md:left-6 lg:left-8">LOGO
            </Link>


            {/* Menu Movil */}
            <div className={!nav? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#050533] flex flex-col justify-center items-center"}>
        
                <Link to="/" className="p-6 text-3xl" onClick={handleNav}>INICIO</Link>
                <Link to="/portafolio" className="p-6 text-3xl" onClick={handleNav}>PORTAFOLIO</Link>
                <Link to="/about" className="p-6 text-3xl" onClick={handleNav}>SOBRE MÍ</Link>
                {/* <Link to="/cv" className="p-6 text-3xl" onClick={handleNav}>CV</Link> */}
                <Link to="/contact" className="p-6 text-3xl" onClick={handleNav}>CONTACTO</Link>
            
            </div>

            <div className="hidden md:flex">
                <Link to="/" className="p-4">INICIO</Link>
                <Link to="/portafolio" className="p-4">PORTAFOLIO</Link>
                <Link to="/about" className="p-4">SOBRE MÍ</Link>
                {/* <Link to="/cv" className="p-4">CV</Link> */}
                <Link to="/contact" className="p-4">CONTACTO</Link>
            </div>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                        className='flex justify-between items-center w-full text-gray-300'
                        href='https://www.linkedin.com/in/ronald-rosero/' target="_blank"
                        >
                        Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                        className='flex justify-between items-center w-full text-gray-300'
                        href='https://github.com/Ronrook' target="_blank"
                        >
                        Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                        className='flex justify-between items-center w-full text-gray-300'
                        href='/'
                        >
                        Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                        className='flex justify-between items-center w-full text-gray-300'
                        href='/'
                        >
                        Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>

            







            
        </nav>
    )
}
export default Navbar;