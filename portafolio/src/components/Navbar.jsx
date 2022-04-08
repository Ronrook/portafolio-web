import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";





function Navbar({ toggleOpen }) {

    const [nav, setNav] = useState(false);

    const handleNav = () => setNav(!nav);
    return (
        <nav className="px-4 fixed w-full h-[80px] flex justify-between md:justify-center items-center  bg-indigo-500 text-white shadow-sm" role="navigation">
            
            

            <div className=" z-10 md:hidden text-2xl" onClick={handleNav}>
                    {nav? <FaTimes/> : <FaBars/>}
            </div>
            <Link 
                to="/" 
                className="">LOGO
            </Link>


            {/* Menu Movil */}
            <div className={!nav? "hidden" : "absolute top-0 left-0 w-full h-screen bg-indigo-500 flex flex-col justify-center items-center"}>
        
                <Link to="/" className="p-6 text-4xl" onClick={handleNav}>INICIO</Link>
                <Link to="/portafolio" className="p-6 text-4xl" onClick={handleNav}>PORTAFOLIO</Link>
                <Link to="/abaut" className="p-6 text-4xl" onClick={handleNav}>SOBRE MÍ</Link>
                <Link to="/cv" className="p-6 text-4xl" onClick={handleNav}>CV</Link>
                <Link to="/contact" className="p-6 text-4xl" onClick={handleNav}>CONTACTO</Link>
            
            </div>

            <div className="hidden md:flex">
                <Link to="/" className="p-4">INICIO</Link>
                <Link to="/portafolio" className="p-4">PORTAFOLIO</Link>
                <Link to="/abaut" className="p-4">SOBRE MÍ</Link>
                <Link to="/cv" className="p-4">CV</Link>
                <Link to="/contact" className="p-4">CONTACTO</Link>
            </div>

            







            
        </nav>
    )
}
export default Navbar;