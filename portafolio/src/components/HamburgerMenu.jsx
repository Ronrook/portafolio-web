
   
import { Link } from "react-router-dom";



function HamburgerMenu() {
    return (
        <div className="grid grid-rows-4 text-center items-center bg-sky-400 md:hidden">
        
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
  )
}
export default HamburgerMenu;