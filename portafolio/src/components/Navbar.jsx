import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";





function Navbar({ toggleOpen }) {
    return (
        <nav className="flex justify-between items- h-16 bg-sky-300 text-black relative shadow-sm" role="navigation"> 
            <Link 
                to="/" 
                className="m-2 flex justify-center lg:justify-start">LOGO
            </Link>
            <div className="px-4 cursor-pointer md:hidden "onClick={toggleOpen}>
                <div className=" text-black-500 text-3xl">
                    <FaBars/>
                </div>  
            </div>
            <div className="pr-8  md:block hidden">
                <Link to="/" className="p-4">
                    INICIO
                </Link>
                <Link to="/portafolio" className="p-4">
                    PORTAFOLIO
                </Link>
                <Link to="/abaut" className="p-4">
                    SOBRE MÍ
                </Link>
                <Link to="/cv" className="p-4">
                    CV
                </Link>
                <Link to="/contact" className="p-4">
                    CONTACTO
                </Link>
            </div>
        </nav>
    )
}
export default Navbar;